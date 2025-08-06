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
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CarService = class CarService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createCarDto) {
        const branch = await this.prismaService.branches.findUnique({
            where: { id: createCarDto.branch_id },
        });
        if (!branch) {
            throw new common_1.BadRequestException("Filial topilmadi");
        }
        return await this.prismaService.car.create({
            data: {
                branch_id: createCarDto.branch_id,
                brand: createCarDto.brand,
                model: createCarDto.model,
                year: createCarDto.year,
                color: createCarDto.color,
                mileage: createCarDto.mileage,
                price_per_day: createCarDto.price_per_day,
                is_available: createCarDto.is_available,
            },
        });
    }
    async findAll() {
        return await this.prismaService.car.findMany({
            include: { branch: true },
        });
    }
    async findByColor(color) {
        return await this.prismaService.car.findMany({
            where: { color: { contains: color } },
            include: { branch: true, car_images: true },
        });
    }
    async findByYear(year) {
        return await this.prismaService.car.findMany({
            where: { year },
            include: { branch: true, car_images: true },
            orderBy: { year: "desc" },
        });
    }
    async findByPrice(minPrice, maxPrice) {
        const where = {};
        if (minPrice || maxPrice) {
            where.price_per_day = {};
            if (minPrice)
                where.price_per_day.gte = minPrice.toString();
            if (maxPrice)
                where.price_per_day.lte = maxPrice.toString();
        }
        return await this.prismaService.car.findMany({
            where,
            include: { branch: true, car_images: true },
            orderBy: { price_per_day: "asc" },
        });
    }
    async findByRating(minRating, maxRating) {
        const where = {};
        if (minRating || maxRating) {
            where.reviews = { some: { rating: {} } };
            if (minRating)
                where.reviews.some.rating.gte = minRating.toString();
            if (maxRating)
                where.reviews.some.rating.lte = maxRating.toString();
        }
        return await this.prismaService.car.findMany({
            where,
            include: { branch: true, car_images: true, reviews: { include: { user: true } } },
            orderBy: { reviews: { _count: "desc" } },
        });
    }
    async findOne(id) {
        const car = await this.prismaService.car.findUnique({
            where: { id },
            include: { branch: true },
        });
        if (!car) {
            throw new common_1.NotFoundException("Avtomobil topilmadi");
        }
        return car;
    }
    async update(id, updateCarDto) {
        const existingCar = await this.prismaService.car.findUnique({
            where: { id },
        });
        if (!existingCar) {
            throw new common_1.NotFoundException("Avtomobil topilmadi");
        }
        if (updateCarDto.branch_id) {
            const branch = await this.prismaService.branches.findUnique({
                where: { id: updateCarDto.branch_id },
            });
            if (!branch) {
                throw new common_1.BadRequestException("Filial topilmadi");
            }
        }
        const updateData = {};
        if (updateCarDto.branch_id !== undefined)
            updateData.branch_id = updateCarDto.branch_id;
        if (updateCarDto.brand !== undefined)
            updateData.brand = updateCarDto.brand;
        if (updateCarDto.model !== undefined)
            updateData.model = updateCarDto.model;
        if (updateCarDto.year !== undefined)
            updateData.year = updateCarDto.year;
        if (updateCarDto.color !== undefined)
            updateData.color = updateCarDto.color;
        if (updateCarDto.mileage !== undefined)
            updateData.mileage = updateCarDto.mileage;
        if (updateCarDto.price_per_day !== undefined)
            updateData.price_per_day = updateCarDto.price_per_day;
        if (updateCarDto.is_available !== undefined)
            updateData.is_available = updateCarDto.is_available;
        return await this.prismaService.car.update({
            where: { id },
            data: updateData,
        });
    }
    async remove(id) {
        const existingCar = await this.prismaService.car.findUnique({
            where: { id },
            include: { rentals: true },
        });
        if (!existingCar) {
            throw new common_1.NotFoundException("Avtomobil topilmadi");
        }
        if (existingCar.rentals.length > 0) {
            throw new common_1.BadRequestException("Bu avtomobilda ijara tarixi mavjud. Ochirish mumkin emas");
        }
        return await this.prismaService.car.delete({
            where: { id },
        });
    }
};
exports.CarService = CarService;
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarService);
//# sourceMappingURL=car.service.js.map