import { CityService } from './city.service';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
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
}
