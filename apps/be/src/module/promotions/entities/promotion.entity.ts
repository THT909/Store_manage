import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type PromotionDocument = HydratedDocument<Promotion>;
export class Promotion {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  type: string;
  @Prop()
  value: string;
  @Prop()
  startDate: Date;
  @Prop()
  endDate: Date;
  @Prop()
  applyTo: string;
  @Prop()
  minimumAmount: number;
  @Prop()
  isActive: boolean;
}
export const PromotionSchema = SchemaFactory.createForClass(Promotion);
PromotionSchema.loadClass(Promotion);
