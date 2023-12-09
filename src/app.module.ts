import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';
import { CountryModule } from './country/country.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    CityModule,
    StateModule,
    CountryModule,
    ThrottlerModule.forRoot({
      ttl: 60000,
      limit: 30,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
