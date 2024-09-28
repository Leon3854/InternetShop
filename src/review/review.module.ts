import { Module } from '@nestjs/common'
import { ReviewController } from './review.controller'
import { ReviewService } from './review.service'
import { PrismaService } from 'src/prisma.service'
import { CategoryModule } from 'src/category/category.module'
import { PaginationModule } from 'src/pagination/pagination.module'
import { ProductService } from 'src/product/product.service'

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, PrismaService, ProductService],
  imports: [CategoryModule, PaginationModule, CategoryModule]
})
export class ReviewModule {}
