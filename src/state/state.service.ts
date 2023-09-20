import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { PrismaService } from '../prisma.service';

@Injectable()
export class StateService {
  constructor(private prisma: PrismaService) {}

  async getStates(selectFields?: string) {
    try {
      let select: Prisma.StateSelect<DefaultArgs> | null | undefined = {
        id: true,
        name: true,
        country_id: true,
      };
      if (selectFields && selectFields !== '*') {
        select = undefined;
        selectFields?.split(',').forEach((fieldName) => {
          if (!select) select = {};
          select[fieldName as keyof Prisma.StateSelect<DefaultArgs>] = true;
        });
      }
      if (selectFields === '*') select = undefined;
      return await this.prisma.state.findMany({
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

  getStatesByCountryId(countryId: number, selectFields?: string) {
    let select: Prisma.StateSelect<DefaultArgs> | null | undefined = {
      id: true,
      name: true,
      country_id: true,
    };
    if (selectFields && selectFields !== '*') {
      select = undefined;
      selectFields?.split(',').forEach((fieldName) => {
        if (!select) select = {};
        select[fieldName as keyof Prisma.StateSelect<DefaultArgs>] = true;
      });
    }
    if (selectFields === '*') select = undefined;

    return this.prisma.state.findMany({
      where: {
        country_id: countryId,
      },
      orderBy: {
        name: 'asc',
      },
      select,
    });
  }
}
