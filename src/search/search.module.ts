import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Facility, FacilitySchema } from 'src/schemas/facility.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Facility.name, schema: FacilitySchema },
    ]),
  ],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
