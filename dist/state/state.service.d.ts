import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class StateService {
    private prisma;
    constructor(prisma: PrismaService);
    getStates(selectFields?: string): Promise<{
        id: number;
        name: string;
        country_id: number;
        country_code: string;
        fips_code: string;
        iso2: string;
        type: string;
        latitude: string;
        longitude: string;
    }[]>;
    getStatesByCountryId(countryId: number, selectFields?: string): Prisma.PrismaPromise<{
        id: number;
        name: string;
        country_id: number;
        country_code: string;
        fips_code: string;
        iso2: string;
        type: string;
        latitude: string;
        longitude: string;
    }[]>;
}
