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
exports.CarFeatureController = void 0;
const common_1 = require("@nestjs/common");
const car_feature_service_1 = require("./car_feature.service");
const create_car_feature_dto_1 = require("./dto/create-car_feature.dto");
const update_car_feature_dto_1 = require("./dto/update-car_feature.dto");
let CarFeatureController = class CarFeatureController {
    carFeatureService;
    constructor(carFeatureService) {
        this.carFeatureService = carFeatureService;
    }
    create(createCarFeatureDto) {
        return this.carFeatureService.create(createCarFeatureDto);
    }
    findAll() {
        return this.carFeatureService.findAll();
    }
    findOne(id) {
        return this.carFeatureService.findOne(+id);
    }
    update(id, updateCarFeatureDto) {
        return this.carFeatureService.update(+id, updateCarFeatureDto);
    }
    remove(id) {
        return this.carFeatureService.remove(+id);
    }
};
exports.CarFeatureController = CarFeatureController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_car_feature_dto_1.CreateCarFeatureDto]),
    __metadata("design:returntype", void 0)
], CarFeatureController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarFeatureController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarFeatureController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_car_feature_dto_1.UpdateCarFeatureDto]),
    __metadata("design:returntype", void 0)
], CarFeatureController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarFeatureController.prototype, "remove", null);
exports.CarFeatureController = CarFeatureController = __decorate([
    (0, common_1.Controller)('car-feature'),
    __metadata("design:paramtypes", [car_feature_service_1.CarFeatureService])
], CarFeatureController);
//# sourceMappingURL=car_feature.controller.js.map