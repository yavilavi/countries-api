import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  getCountries() {
    return this.prisma.country.findMany({ orderBy: { name: 'asc' } });
  }
}
