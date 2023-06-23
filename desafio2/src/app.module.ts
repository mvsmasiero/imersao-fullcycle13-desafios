import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [AssetsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
