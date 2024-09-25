import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'
import { JwtStrategy } from './jwt.strategy'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { UserModule } from 'src/user/user.module'
import { getJwtConfig } from 'src/config/jwt.config'

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UserService, JwtStrategy],
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig
    }),
    UserModule
  ]
})
export class AuthModule {}
