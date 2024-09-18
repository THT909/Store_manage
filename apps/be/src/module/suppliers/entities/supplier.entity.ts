import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type SupplierDocument = HydratedDocument<Supplier>;
export class Supplier {
  @Prop()
  name: string;
  @Prop()
  contract: string;
  @Prop()
  phone: string;
  @Prop()
  email: string;
  @Prop()
  address: string;
}
export const SupplierSchema = SchemaFactory.createForClass(Supplier);
SupplierSchema.loadClass(Supplier);
