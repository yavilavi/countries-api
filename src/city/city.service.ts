import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  #getSelect(selectFields?: string) {
    let select: Prisma.CitySelect<DefaultArgs> | null | undefined = {
      id: true,
      name: true,
      country_id: true,
      state_id: true,
    };
    if (selectFields && selectFields !== '*') {
      select = undefined;
      selectFields?.split(',').forEach((fieldName) => {
        if (!select) select = {};
        select[fieldName as keyof Prisma.CitySelect<DefaultArgs>] = true;
      });
    }
    if (selectFields === '*') select = undefined;
    return select;
  }

  async getAllCities(selectFields?: string, limit?: string) {
    const select: Prisma.CitySelect<DefaultArgs> | null | undefined =
      this.#getSelect(selectFields);
    let take;
    if (limit) {
      take =
        limit === '*'
          ? undefined
          : Number.isInteger(+limit)
          ? +limit
          : undefined;
    }
    return this.prisma.city.findMany({
      orderBy: {
        name: 'asc',
      },
      take,
      select,
    });
  }

  getCitiesByCountryId(id: number, selectFields?: string) {
    const select: Prisma.CitySelect<DefaultArgs> | null | undefined =
      this.#getSelect(selectFields);

    return this.prisma.city.findMany({
      where: {
        country_id: id,
      },
      distinct: ['name'],
      orderBy: {
        name: 'asc',
      },
      select,
    });
  }

  getCitiesByStateId(id: number, selectFields?: string) {
    const select: Prisma.CitySelect<DefaultArgs> | null | undefined =
      this.#getSelect(selectFields);

    return this.prisma.city.findMany({
      where: {
        state_id: id,
      },
      orderBy: {
        name: 'asc',
      },
      select,
    });
  }
}
