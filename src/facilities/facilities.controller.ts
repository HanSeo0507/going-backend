import { Controller, Get, Param, Query } from '@nestjs/common';
import { FacilityDocument } from 'src/schemas/facility.schema';
import { FacilitiesService } from './facilities.service';

@Controller('facilities')
export class FacilitiesController {
  constructor(private readonly facilitiesService: FacilitiesService) {}

  @Get()
  async getFacilitiesByLocation(
    @Query('lng') lng: number,
    @Query('lat') lat: number,
    @Query('limit') limit: number,
    @Query('distance') distance: number,
  ): Promise<FacilityDocument[]> {
    return await this.facilitiesService.getManyByLocation(
      lng,
      lat,
      limit,
      distance,
    );
  }

  @Get(':id')
  async getOneFacility(@Param('id') id: string) {
    return this.facilitiesService.getOne(id);
  }
}
