import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Facility, FacilityDocument } from 'src/schemas/facility.schema';

import { getRegExp } from 'korean-regexp';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Facility.name)
    private facilityModel: Model<FacilityDocument>,
  ) {}

  async searchFacilities(
    lng: number,
    lat: number,
    query: string,
    limit = 50,
  ): Promise<FacilityDocument[]> {
    const regexp = getRegExp(query);
    const result = await this.facilityModel
      .find({
        name: { $regex: regexp },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [lng, lat],
            },
          },
        },
      })
      .limit(limit);

    console.log(result);
    return result;
  }
}
