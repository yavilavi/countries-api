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
exports.StateService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma.service");
let StateService = exports.StateService = class StateService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStates(selectFields) {
        try {
            let select = {
                id: true,
                name: true,
                country_id: true,
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
            return await this.prisma.state.findMany({
                orderBy: { name: 'asc' },
                select,
            });
        }
        catch (e) {
            const err = e;
            common_1.Logger.error(err.message);
            common_1.Logger.error(err.stack);
            if (err instanceof client_1.Prisma.PrismaClientValidationError) {
                const msg = err.message.split('\n');
                throw new common_1.BadRequestException(`${msg[msg.length - 1].split('`.')[0]}\`.`);
            }
            throw new common_1.InternalServerErrorException(err);
        }
    }
    getStatesByCountryId(countryId, selectFields) {
        let select = {
            id: true,
            name: true,
            country_id: true,
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
};
exports.StateService = StateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StateService);
//# sourceMappingURL=state.service.js.map