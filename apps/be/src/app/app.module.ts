import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from '../module/orders/orders.module';
import { ProductsModule } from '../module/products/products.module';
import { CategorysModule } from '../module/categorys/categorys.module';
import { SuppliersModule } from '../module/suppliers/suppliers.module';
import { PromotionsModule } from '../module/promotions/promotions.module';
import { AdditionalCostsModule } from '../module/additional-costs/additional-costs.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          console.log('\x1b[36m%s\x1b[0m', 'DATABASE IS CONNECTED !!');
        });
        connection._events.connected();
        return connection;
      },
    }),
    AdditionalCostsModule,
    CategorysModule,
    OrdersModule,
    ProductsModule,
    PromotionsModule,
    SuppliersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
