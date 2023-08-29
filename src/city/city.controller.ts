import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import {CityService} from './city.service';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) {
    }

    @Get('getCitiesByCountryId/:countryId')
    getCitiesByCountryId(@Param('countryId', ParseIntPipe) id: number) {
        return this.cityService.getCitiesByCountryId(id);
    }
}
