import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async getCountries(selectFields?: string) {
    try {
      let select: Prisma.CountrySelect<DefaultArgs> | null | undefined = {
        id: true,
        name: true,
        iso3: true,
        iso2: true,
      };
      if (selectFields && selectFields !== '*') {
        select = undefined;
        selectFields?.split(',').forEach((fieldName) => {
          if (!select) select = {};
          select[fieldName as keyof Prisma.CountrySelect<DefaultArgs>] = true;
        });
      }
      if (selectFields === '*') select = undefined;
      return await this.prisma.country.findMany({
        orderBy: { name: 'asc' },
        select,
      });
    } catch (e: unknown) {
      const err = e as Error;
      Logger.error(err.message);
      Logger.error(err.stack);
      if (err instanceof Prisma.PrismaClientValidationError) {
        const msg = err.message.split('\n');
        throw new BadRequestException(
          `${msg[msg.length - 1].split('`.')[0]}\`.`,
        );
      }
      throw new InternalServerErrorException(err);
    }
  }
}
