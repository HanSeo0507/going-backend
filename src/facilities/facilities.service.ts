import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Facility, FacilityDocument } from 'src/schemas/facility.schema';

@Injectable()
export class FacilitiesService {
  constructor(
    @InjectModel(Facility.name)
    private facilityModel: Model<FacilityDocument>,
  ) {}

  async getManyByLocation(
    lng: number,
    lat: number,
    limit: number,
    distance: number,
  ): Promise<FacilityDocument[]> {
    const result = await this.facilityModel
      .find({
        location: {
          $nearSphere: {
            $geometry: { type: 'Point', coordinates: [lng, lat] },
            $maxDistance: distance || 1000,
          },
        },
      })
      .limit(limit);

    return result;
  }

  async getOne(id: string): Promise<FacilityDocument> {
    if (!Types.ObjectId.isValid(id)) throw new BadRequestException();
    const _id = new Types.ObjectId(id);
    const result = await this.facilityModel.findOne({ _id });
    if (!result) throw new NotFoundException();

    return result;
  }
}
