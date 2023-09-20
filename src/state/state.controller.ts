import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get('getStates')
  getStates(@Query('select') select?: string) {
    return this.stateService.getStates(select);
  }

  @Get('getStatesByCountryId/:countryId')
  getStatesByCountryId(
    @Param('countryId', ParseIntPipe) id: number,
    @Query('select') select?: string,
  ) {
    return this.stateService.getStatesByCountryId(id, select);
  }
}
