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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityController = void 0;
const common_1 = require("@nestjs/common");
const city_service_1 = require("./city.service");
const getAllCitiesQueryDto_1 = require("./dto/getAllCitiesQueryDto");
let CityController = exports.CityController = class CityController {
    constructor(cityService) {
        this.cityService = cityService;
    }
    getCitiesByCountryId(id, select) {
        return this.cityService.getCitiesByCountryId(id, select);
    }
    async getAllCities(res, { select, asFile, take }) {
        console.log({ select, asFile, take });
        const cities = await this.cityService.getAllCities(select, take);
        if (asFile !== 'true') {
            return res.json(cities);
        }
        else {
            const jsonData = JSON.stringify(cities);
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Content-Disposition', 'attachment; filename=cities.json');
            res.send(jsonData);
        }
    }
    getCitiesByStateId(id, select) {
        return this.cityService.getCitiesByStateId(id, select);
    }
};
__decorate([
    (0, common_1.Get)('getCitiesByCountryId/:countryId'),
    __param(0, (0, common_1.Param)('countryId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('select')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "getCitiesByCountryId", null);
__decorate([
    (0, common_1.Get)('getAllCities'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, getAllCitiesQueryDto_1.GetAllCitiesQueryDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "getAllCities", null);
__decorate([
    (0, common_1.Get)('getCitiesByStateId/:stateId'),
    __param(0, (0, common_1.Param)('stateId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('select')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "getCitiesByStateId", null);
exports.CityController = CityController = __decorate([
    (0, common_1.Controller)('city'),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CityController);
//# sourceMappingURL=city.controller.js.map