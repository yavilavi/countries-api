"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CityService = exports.CityService = class CityService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getCitiesByCountryId(id, selectFields) {
        let select = {
            id: true,
            name: true,
            country_id: true,
            state_id: true,
        };
        if (selectFields && selectFields !== '*') {
            select = undefined;
            selectFields?.split(',').forEach((fieldName) => {
                if (!select)
                    select = {};
                select[fieldName] = true;
            });
        }
        if (selectFields === '*')
            select = undefined;
        return this.prisma.city.findMany({
            where: {
                country_id: id,
            },
            orderBy: {
                name: 'asc',
            },
            select,
        });
    }
    getCitiesByStateId(id, selectFields) {
        let select = {
            id: true,
            name: true,
            country_id: true,
            state_id: true,
        };
        if (selectFields && selectFields !== '*') {
            select = undefined;
            selectFields?.split(',').forEach((fieldName) => {
                if (!select)
                    select = {};
                select[fieldName] = true;
            });
        }
        if (selectFields === '*')
            select = undefined;
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
    getCitiesByCountryCode(country_code) {
        return this.prisma.city.findMany({
            where: {
                country_code,
            },
        });
    }
    getCitiesByCountryname(country_name) {
        return this.prisma.city.findMany({
            where: {
                country_name,
            },
        });
    }
};
exports.CityService = CityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CityService);
//# sourceMappingURL=city.service.js.map