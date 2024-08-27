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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CityService_instances, _CityService_getSelect;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CityService = exports.CityService = class CityService {
    constructor(prisma) {
        _CityService_instances.add(this);
        this.prisma = prisma;
    }
    async getAllCities(selectFields, limit) {
        const select = __classPrivateFieldGet(this, _CityService_instances, "m", _CityService_getSelect).call(this, selectFields);
        let take;
        if (limit) {
            take =
                limit === '*'
                    ? undefined
                    : Number.isInteger(+limit)
                        ? +limit
                        : undefined;
        }
        return this.prisma.city.findMany({
            orderBy: {
                name: 'asc',
            },
            take,
            select,
        });
    }
    getCitiesByCountryId(id, selectFields) {
        const select = __classPrivateFieldGet(this, _CityService_instances, "m", _CityService_getSelect).call(this, selectFields);
        return this.prisma.city.findMany({
            where: {
                country_id: id,
            },
            distinct: ['name'],
            orderBy: {
                name: 'asc',
            },
            select,
        });
    }
    getCitiesByStateId(id, selectFields) {
        const select = __classPrivateFieldGet(this, _CityService_instances, "m", _CityService_getSelect).call(this, selectFields);
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
};
_CityService_instances = new WeakSet();
_CityService_getSelect = function _CityService_getSelect(selectFields) {
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
    return select;
};
exports.CityService = CityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CityService);
//# sourceMappingURL=city.service.js.map