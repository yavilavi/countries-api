import { Injectable } from '@nestjs/common';
import {PrismaService} from '../prisma.service';

@Injectable()
export class CityService {

  constructor(
      private prisma: PrismaService
  ) {
  }
  getCitiesByCountryId(id: number) {
    return this.prisma.city.findMany({
      where: {
        country_id: id
      },
      orderBy:{
        name: 'asc'
      }
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
