import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { SaleModule } from './sale/sale.module';
import { DeliveryModule } from './delivery/delivery.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductModule, CustomerModule, SaleModule, DeliveryModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
