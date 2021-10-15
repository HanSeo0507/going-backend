import { Controller, Get, Query } from '@nestjs/common';
import { FacilityDocument } from 'src/schemas/facility.schema';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('facilities')
  searchFacilities(
    @Query('lng') lng: number,
    @Query('lat') lat: number,
    @Query('query') query: string,
    @Query('limit') limit?: number,
  ): Promise<FacilityDocument[]> {
    return this.searchService.searchFacilities(lng, lat, query, limit);
  }
}
