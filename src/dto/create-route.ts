import { IsString, IsArray } from 'class-validator';

export class CreateRouteDTO {
  @IsString()
  readonly targetFacility: string;

  @IsArray({ each: true })
  readonly coords: [number, number][];

  @IsString()
  readonly description: string;
}
