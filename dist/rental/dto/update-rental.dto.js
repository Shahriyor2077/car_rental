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
exports.UpdateRentalsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const create_rental_dto_1 = require("./create-rental.dto");
class UpdateRentalsDto extends (0, mapped_types_1.PartialType)(create_rental_dto_1.CreateRentalsDto) {
    user_id;
    car_id;
    start_date;
    end_date;
    total_price;
    status;
}
exports.UpdateRentalsDto = UpdateRentalsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Foydalanuvchi ID (ixtiyoriy)',
        example: 1
    }),
    __metadata("design:type", Number)
], UpdateRentalsDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Avtomobil ID (ixtiyoriy)',
        example: 1
    }),
    __metadata("design:type", Number)
], UpdateRentalsDto.prototype, "car_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Ijara boshlanish sanasi (ixtiyoriy)',
        example: '2024-01-15'
    }),
    __metadata("design:type", String)
], UpdateRentalsDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Ijara tugash sanasi (ixtiyoriy)',
        example: '2024-01-20'
    }),
    __metadata("design:type", String)
], UpdateRentalsDto.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Umumiy narxi (ixtiyoriy)',
        example: 2500000
    }),
    __metadata("design:type", Number)
], UpdateRentalsDto.prototype, "total_price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Ijara holati (ixtiyoriy)',
        example: 'ACTIVE',
        enum: ['PENDING', 'ACTIVE', 'COMPLETED', 'CANCELLED']
    }),
    __metadata("design:type", String)
], UpdateRentalsDto.prototype, "status", void 0);
//# sourceMappingURL=update-rental.dto.js.map