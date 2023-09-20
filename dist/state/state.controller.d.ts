import { StateService } from './state.service';
export declare class StateController {
    private readonly stateService;
    constructor(stateService: StateService);
    getStates(select?: string): Promise<{
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
    getStatesByCountryId(id: number, select?: string): import("@prisma/client").Prisma.PrismaPromise<{
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
