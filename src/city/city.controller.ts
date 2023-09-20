import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CityService } from './city.service';

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

  @Get('getCitiesByStateId/:stateId')
  getCitiesByStateId(
    @Param('stateId', ParseIntPipe) id: number,
    @Query('select') select?: string,
  ) {
    return this.cityService.getCitiesByStateId(id, select);
  }
}
