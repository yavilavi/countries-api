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
exports.StateController = void 0;
const common_1 = require("@nestjs/common");
const state_service_1 = require("./state.service");
let StateController = exports.StateController = class StateController {
    constructor(stateService) {
        this.stateService = stateService;
    }
    getStates(select) {
        return this.stateService.getStates(select);
    }
    getStatesByCountryId(id, select) {
        return this.stateService.getStatesByCountryId(id, select);
    }
};
__decorate([
    (0, common_1.Get)('getStates'),
    __param(0, (0, common_1.Query)('select')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StateController.prototype, "getStates", null);
__decorate([
    (0, common_1.Get)('getStatesByCountryId/:countryId'),
    __param(0, (0, common_1.Param)('countryId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('select')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], StateController.prototype, "getStatesByCountryId", null);
exports.StateController = StateController = __decorate([
    (0, common_1.Controller)('state'),
    __metadata("design:paramtypes", [state_service_1.StateService])
], StateController);
//# sourceMappingURL=state.controller.js.map