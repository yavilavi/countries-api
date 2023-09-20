import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  getCountries(selectFields?: string) {
    let select: Prisma.CountrySelect<DefaultArgs> | null | undefined;
    if (selectFields && selectFields !== '*') {
      selectFields?.split(',').forEach((fieldName) => {
        if (!select) select = {};
        select[fieldName as keyof Prisma.CountrySelect<DefaultArgs>] = true;
      });
    }
    return this.prisma.country.findMany({
      orderBy: { name: 'asc' },
      select,
    });
  }
}
