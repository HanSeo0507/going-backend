import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FacilityDocument = Facility & Document;

@Schema({ collection: 'facilities' })
export class Facility {
  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  county: string;

  @Prop({ required: true })
  countyCode: string;

  @Prop({ required: true })
  adressDoro: string;

  @Prop({ required: true })
  adressJibun: string;

  @Prop({ required: true, type: 'object' })
  location: {
    type: 'Point';
    coordinates: [number, number]; // lng, lat (경도, 위도)
  };

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  weekday: [string, string];

  @Prop({ required: true })
  saturday: [string, string];

  @Prop({ required: true })
  holiday: [string, string];

  @Prop({ required: true })
  numberOfChargeAtSameTime: number;

  @Prop({ required: true })
  canPhoneCharge: boolean;

  @Prop({ required: true })
  canAirInjection: boolean;

  @Prop(
    raw({
      name: { type: String, required: true },
      phone: { type: String, required: true },
    }),
  )
  managementAgency: Record<string, any>;

  @Prop({ required: true })
  dataBaseDate: string;

  @Prop({ required: true })
  providerCode: string;

  @Prop({ required: true })
  providerName: string;
}

const FacilitySchema = SchemaFactory.createForClass(Facility);
FacilitySchema.index({ location: '2dsphere' });

export { FacilitySchema };
