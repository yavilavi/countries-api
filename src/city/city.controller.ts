import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { CityService } from './city.service';
import { Response } from 'express';
import { GetAllCitiesQueryDto } from './dto/getAllCitiesQueryDto';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('getCitiesByCountryId/:countryId')
  getCitiesByCountryId(
    @Param('countryId', ParseIntPipe) id: number,
    @Query('select') select?: string,
  ) {
    return this.cityService.getCitiesByCountryId(id, select);
  }

  @Get('getAllCities')
  async getAllCities(
    @Res() res: Response,
    @Query() { select, asFile, take }: GetAllCitiesQueryDto,
  ) {
    console.log({ select, asFile, take });
    const cities = await this.cityService.getAllCities(select, take);
    if (asFile !== 'true') {
      return res.json(cities);
    } else {
      const jsonData = JSON.stringify(cities);

      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', 'attachment; filename=cities.json');

      res.send(jsonData);
    }
  }

  @Get('getCitiesByStateId/:stateId')
  getCitiesByStateId(
    @Param('stateId', ParseIntPipe) id: number,
    @Query('select') select?: string,
  ) {
    return this.cityService.getCitiesByStateId(id, select);
  }
}
