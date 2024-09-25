import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StatisticsController } from './statistics/statistics.controller';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [UserModule, AuthModule, StatisticsModule],
  controllers: [AppController, StatisticsController],
  providers: [AppService]
})
export class AppModule {}
