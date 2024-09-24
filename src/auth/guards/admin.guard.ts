import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable
} from '@nestjs/common'
import { User } from '@prisma/client'

@Injectable()
export class onlyAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<{ user: User }>()
    const user = request.user

    if (!user.isAdmin)
      throw new ForbiddenException('У вас нет прав на Администратора')

    return user.isAdmin
  }
}
