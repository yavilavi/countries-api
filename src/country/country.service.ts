import { Injectable } from '@nestjs/common';
import {PrismaService} from '../prisma.service';

@Injectable()
export class CountryService {
  constructor(
      private prisma: PrismaService
  ) {
  }

  getCountries() {
    return this.prisma.country.findMany({})
  }

  getCitiesByCountryId(id: number) {
    return this.prisma.city.findMany({
      where: {
        country_id: id
      },
    })
  }

  getCitiesByCountryCode(country_code: string) {
    return this.prisma.city.findMany({
      where: {
        country_code
      },
    })
  }

  getCitiesByCountryname(country_name: string) {
    return this.prisma.city.findMany({
      where: {
        country_name
      },
    })
  }
}
