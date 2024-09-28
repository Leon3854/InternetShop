import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { productReturnObject } from 'src/product/return-product.object'
import * as YooKassa from 'yookassa'
import { OrderDto, OrderItemDto } from './dto/order.dto'
import { PaymentStatusDto } from './dto/paynet-status.dto'
import { EnumOrderStatus } from '@prisma/client'

const yooKassa = new YooKassa({
  shopId: process.env['SHOP_ID'],
  secretKey: process.env['PAYMENT_TOKEN']
})

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.order.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        items: {
          include: {
            product: {
              select: productReturnObject
            }
          }
        }
      }
    })
  }

  async getByUserId(userId: number) {
    return this.prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        items: {
          include: {
            product: {
              select: productReturnObject
            }
          }
        }
      }
    })
  }
  async placeOrder(dto: OrderDto, userId: number) {
    const total = dto.items.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)

    const orderItems = dto.items.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price
      // добавьте другие необходимые поля здесь
    }))

    const order = await this.prisma.order.create({
      data: {
        status: dto.status,
        items: {
          create: orderItems
        },
        total,
        user: {
          connect: {
            id: userId
          }
        }
      }
    })

    const payment = await yooKassa.createPayment({
      amount: {
        value: total.toFixed(2),
        currency: 'RUB'
      },
      payment_method_data: {
        /* CHANGE */
        type: 'bank_card'
      },
      confirmation: {
        type: 'redirect',
        /* CHANGE */
        return_url: 'http://localhost:3000/thanks'
      },
      /* CHANGE */
      description: `Order #${order.id}`
    })
    return payment
  }

  async updateStatus(dto: PaymentStatusDto) {
    if (dto.event === 'payment.waiting_for_capture') {
      const payment = await yooKassa.capturePayment(dto.object.id)
      return payment
    }

    if (dto.event === 'payment.succeeded') {
      const orderId = Number(dto.object.description.split('#')[1])

      await this.prisma.order.update({
        where: { id: orderId },
        data: { status: EnumOrderStatus.PAYED }
      })
      return true
    }
    return true
  }
}
