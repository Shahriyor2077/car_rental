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
exports.UpdateCompaniesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const create_company_dto_1 = require("./create-company.dto");
class UpdateCompaniesDto extends (0, mapped_types_1.PartialType)(create_company_dto_1.CreateCompaniesDto) {
    name;
    address;
    phone;
    license_number;
}
exports.UpdateCompaniesDto = UpdateCompaniesDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Kompaniya nomi (ixtiyoriy)',
        example: 'Avto Ijara MChJ'
    }),
    __metadata("design:type", String)
], UpdateCompaniesDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Kompaniya manzili (ixtiyoriy)',
        example: 'Toshkent shahri, Chilonzor tumani, 1-uy'
    }),
    __metadata("design:type", String)
], UpdateCompaniesDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Telefon raqami (ixtiyoriy)',
        example: '+998901234567'
    }),
    __metadata("design:type", String)
], UpdateCompaniesDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Litsenziya raqami (ixtiyoriy)',
        example: 'L123456789'
    }),
    __metadata("design:type", String)
], UpdateCompaniesDto.prototype, "license_number", void 0);
//# sourceMappingURL=update-company.dto.js.map