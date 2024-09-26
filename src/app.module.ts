import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { StatisticsModule } from './statistics/statistics.module'
import { CategoryModule } from './category/category.module'
import { PaginationModule } from './pagination/pagination.module';

@Module({
  imports: [UserModule, AuthModule, StatisticsModule, CategoryModule, PaginationModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
