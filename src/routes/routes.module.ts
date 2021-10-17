import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Route, RouteSchema } from 'src/schemas/route.schema';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

@Module({
  controllers: [RoutesController],
  providers: [RoutesService],
  imports: [
    MongooseModule.forFeature([{ name: Route.name, schema: RouteSchema }]),
  ],
})
export class RoutesModule {}
