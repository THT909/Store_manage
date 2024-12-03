import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
@Schema({ timestamps: true })
export class Category {
  @Prop()
  name: string;
  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.String })
  prarentId: string;
}
export type CategoryDocument = Category & Document;
export const CategorySchema = SchemaFactory.createForClass(Category);
