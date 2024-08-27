import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class CityService {
    #private;
    private prisma;
    constructor(prisma: PrismaService);
    getAllCities(selectFields?: string, limit?: string): Promise<{
        id: number;
        name: string;
        state_id: number;
        state_code: string;
        state_name: string;
        country_id: number;
        country_code: string;
        country_name: string;
        latitude: string;
        longitude: string;
        wikiDataId: string;
    }[]>;
    getCitiesByCountryId(id: number, selectFields?: string): Prisma.PrismaPromise<{
        id: number;
        name: string;
        state_id: number;
        state_code: string;
        state_name: string;
        country_id: number;
        country_code: string;
        country_name: string;
        latitude: string;
        longitude: string;
        wikiDataId: string;
    }[]>;
    getCitiesByStateId(id: number, selectFields?: string): Prisma.PrismaPromise<{
        id: number;
        name: string;
        state_id: number;
        state_code: string;
        state_name: string;
        country_id: number;
        country_code: string;
        country_name: string;
        latitude: string;
        longitude: string;
        wikiDataId: string;
    }[]>;
}
