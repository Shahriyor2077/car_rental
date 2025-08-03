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
exports.CarFeatureService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CarFeatureService = class CarFeatureService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createCarFeatureDto) {
        return this.prismaService.car_feature.create({ data: createCarFeatureDto });
    }
    findAll() {
        return this.prismaService.car_feature.findMany();
    }
    findOne(id) {
        return this.prismaService.car_feature.findUnique({ where: { id } });
    }
    update(id, updateCarFeatureDto) {
        return this.prismaService.car_feature.update({ where: { id }, data: updateCarFeatureDto });
    }
    remove(id) {
        return this.prismaService.car_feature.delete({ where: { id } });
    }
};
exports.CarFeatureService = CarFeatureService;
exports.CarFeatureService = CarFeatureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarFeatureService);
//# sourceMappingURL=car_feature.service.js.map