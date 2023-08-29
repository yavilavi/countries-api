import {Controller, Get, Post, Body, Param, ParseIntPipe} from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('getCountries')
  getCountries() {
    return this.countryService.getCountries();
  }
}
