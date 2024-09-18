import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;
@Schema({ timestamps: true })
export class Product {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  salePrice: number;
  @Prop()
  stockQuantity: number;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'categoty' }])
  categoryId: Types.ObjectId;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'supplier' }])
  supplierId: Types.ObjectId;
  @Prop({ type: () => [additionalCosts] })
  additionalCosts: additionalCosts[];
  @Prop()
  slug: string;
}
class additionalCosts {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'additonalCosts' }])
  costId: Types.ObjectId;
  @Prop()
  amount: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.loadClass(Product);
