import {
  Body,
  Controller,
  Get,
  Put,
  Patch,
  HttpCode,
  UsePipes,
  ValidationPipe,
  Param
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth()
  async getProfile(@CurrentUser('id') id: number) {
    return this.userService.byId(id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put('profile')
  async getNewTokens(
    @CurrentUser('id') id: number,
    @Body() dto: CreateUserDto
  ) {
    return this.userService.updateProfile(id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Patch('profile/favorites/:productId')
  async toggleFavorite(
    @CurrentUser('id') id: number,
    @Param('productId') productId: string
  ) {
    return this.userService.toggleFavorite(id, +productId)
  }
}
