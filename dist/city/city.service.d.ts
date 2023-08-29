import { PrismaService } from '../prisma.service';
export declare class CityService {
    private prisma;
    constructor(prisma: PrismaService);
    getCitiesByCountryId(id: number): import("@prisma/client").Prisma.PrismaPromise<{
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
    getCitiesByCountryCode(country_code: string): import("@prisma/client").Prisma.PrismaPromise<{
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
    getCitiesByCountryname(country_name: string): import("@prisma/client").Prisma.PrismaPromise<{
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
