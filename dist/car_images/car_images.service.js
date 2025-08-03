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
exports.CarImagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CarImagesService = class CarImagesService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createCarImageDto) {
        return this.prismaService.car_images.create({ data: createCarImageDto });
    }
    findAll() {
        return this.prismaService.car_images.findMany();
    }
    findOne(id) {
        return this.prismaService.car_images.findUnique({ where: { id } });
    }
    update(id, updateCarImageDto) {
        return this.prismaService.car_images.update({ where: { id }, data: updateCarImageDto });
    }
    remove(id) {
        return `This action removes a #${id} carImage`;
    }
};
exports.CarImagesService = CarImagesService;
exports.CarImagesService = CarImagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarImagesService);
//# sourceMappingURL=car_images.service.js.map