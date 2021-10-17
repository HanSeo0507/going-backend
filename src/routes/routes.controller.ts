import { Body, Controller, Post } from '@nestjs/common';
import { CreateRouteDTO } from 'src/dto/create-route';
import { RouteDocument } from 'src/schemas/route.schema';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  postRoutes(@Body() userData: CreateRouteDTO): Promise<RouteDocument> {
    return this.routesService.createRoute(userData);
  }
}
