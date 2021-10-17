import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRouteDTO } from 'src/dto/create-route';
import { Route, RouteDocument } from 'src/schemas/route.schema';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name) private readonly routeModel: Model<RouteDocument>,
  ) {}

  async createRoute(userData: CreateRouteDTO): Promise<RouteDocument> {
    const result = await this.routeModel.create(userData);

    return result;
  }
}
