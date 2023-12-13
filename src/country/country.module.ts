import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { PrismaService } from '../prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  controllers: [CountryController],
  providers: [
    CountryService,
    PrismaService,
  ],
})
export class CountryModule {}
