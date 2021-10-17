import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RouteDocument = Route & Document;

@Schema({ collection: 'routes' })
export class Route {
  @Prop({ required: true })
  targetFacility: string;

  @Prop({ required: true })
  coords: [number, number][];

  @Prop({ required: true })
  description: string;
}

const RouteSchema = SchemaFactory.createForClass(Route);
RouteSchema.index({ location: '2dsphere' });

export { RouteSchema };
