import { CityService } from './city.service';
import { Response } from 'express';
import { GetAllCitiesQueryDto } from './dto/getAllCitiesQueryDto';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    getCitiesByCountryId(id: number, select?: string): import("@prisma/client").Prisma.PrismaPromise<{
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
    getAllCities(res: Response, { select, asFile, take }: GetAllCitiesQueryDto): Promise<Response<any, Record<string, any>> | undefined>;
    getCitiesByStateId(id: number, select?: string): import("@prisma/client").Prisma.PrismaPromise<{
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
