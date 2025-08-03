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
exports.CreatePaymentsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePaymentsDto {
    rental_id;
    amount;
    payment_date;
    payment_method;
    status;
}
exports.CreatePaymentsDto = CreatePaymentsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ijaraga olingan avtomobil ID',
        example: 1
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'rental_id raqam bo\'lishi kerak' }),
    __metadata("design:type", Number)
], CreatePaymentsDto.prototype, "rental_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Toʻlov summasi',
        example: 100000
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'amount raqam bo\'lishi kerak' }),
    __metadata("design:type", Number)
], CreatePaymentsDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Toʻlov sanasi',
        example: '2024-08-01'
    }),
    (0, class_validator_1.IsDateString)({}, { message: 'payment_date ISO formatda bo\'lishi kerak' }),
    __metadata("design:type", String)
], CreatePaymentsDto.prototype, "payment_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Toʻlov turi',
        example: 'CASH',
        enum: ['CASH', 'CARD', 'TRANSFER']
    }),
    (0, class_validator_1.IsString)({ message: 'payment_method matn bo\'lishi kerak' }),
    (0, class_validator_1.IsIn)(['CASH', 'CARD', 'TRANSFER'], { message: 'Toʻlov turi CASH, CARD yoki TRANSFER bo\'lishi kerak' }),
    __metadata("design:type", String)
], CreatePaymentsDto.prototype, "payment_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Toʻlov statusi',
        example: 'PENDING',
        enum: ['PENDING', 'PAID', 'FAILED']
    }),
    (0, class_validator_1.IsString)({ message: 'status matn bo\'lishi kerak' }),
    (0, class_validator_1.IsIn)(['PENDING', 'PAID', 'FAILED'], { message: 'Status PENDING, PAID yoki FAILED bo\'lishi kerak' }),
    __metadata("design:type", String)
], CreatePaymentsDto.prototype, "status", void 0);
//# sourceMappingURL=create-payment.dto.js.map