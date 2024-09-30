import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { PrismaService } from 'src/prisma.service'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { User } from '@prisma/client'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get('JWT_SECRET')
    })
  }

  async validate({ id }: Pick<User, 'id'>) {
    return this.prisma.user.findUnique({
      where: {
        id: +id
      }
    })
  }
}
