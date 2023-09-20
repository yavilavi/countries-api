import { Controller, Get, Query } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('getCountries')
  getCountries(@Query('select') select?: string) {
    return this.countryService.getCountries(select);
  }
}
