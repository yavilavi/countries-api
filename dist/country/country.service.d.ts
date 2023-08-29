import { PrismaService } from '../prisma.service';
export declare class CountryService {
    private prisma;
    constructor(prisma: PrismaService);
    getCountries(): import("@prisma/client").Prisma.PrismaPromise<({
        id: number;
        name: string;
        iso3: string;
        iso2: string;
        numeric_code: string;
        phone_code: string;
        capital: string;
        currency: string;
        currency_name: string;
        currency_symbol: string;
        tld: string;
        native: string | null;
        region: string;
        subregion: string;
        nationality: string;
        latitude: string;
        longitude: string;
        emoji: string;
        emojiU: string;
    } & {
        timezones: {
            zoneName: string;
            gmtOffset: number;
            gmtOffsetName: string;
            abbreviation: string;
            tzName: string;
        }[];
        translations: {
            kr: string | null;
            pt: string | null;
            nl: string | null;
            hr: string | null;
            fa: string | null;
            de: string | null;
            es: string | null;
            fr: string | null;
            ja: string | null;
            it: string | null;
            cn: string | null;
            tr: string | null;
        };
    })[]>;
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
