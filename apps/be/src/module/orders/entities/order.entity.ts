import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;
@Schema({ timestamps: true })
export class Order {
  @Prop()
  orderDate: Date;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'customers' }])
  customerId: Types.ObjectId;
  @Prop()
  deleveryDate: Date;
  @Prop()
  items: items[];
  @Prop({ type: () => [items] })
  totalAmount: number;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'promotions' }])
  prmotionId: Types.ObjectId;
  @Prop()
  discountAmount: number;
  @Prop()
  finnalAmount: number;
  @Prop()
  status: string;
}
class items {
  @Prop()
  productId: Types.ObjectId;
  @Prop()
  quantity: number;
  @Prop()
  price: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
OrderSchema.loadClass(Order);
