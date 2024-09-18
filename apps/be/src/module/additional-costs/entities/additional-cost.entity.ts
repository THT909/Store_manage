import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type AdditionalCostDocument = HydratedDocument<AdditionalCost>;
export class AdditionalCost {
  @Prop()
  name: string;
  @Prop()
  amount: number;
  @Prop()
  type: string;
  @Prop()
  applyTo: string;
  @Prop()
  isActive: boolean;
}
export const AdditionalCostSchema =
  SchemaFactory.createForClass(AdditionalCost);
AdditionalCostSchema.loadClass(AdditionalCost);
