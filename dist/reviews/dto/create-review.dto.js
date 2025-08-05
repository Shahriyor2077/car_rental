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
exports.CreateReviewsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateReviewsDto {
    user_id;
    car_id;
    comment;
    rating;
}
exports.CreateReviewsDto = CreateReviewsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Foydalanuvchi ID",
        example: 1
    }),
    (0, class_validator_1.IsNumber)({}, { message: "Foydalanuvchi ID raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], CreateReviewsDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Avtomobil ID",
        example: 1
    }),
    (0, class_validator_1.IsNumber)({}, { message: "Avtomobil ID raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], CreateReviewsDto.prototype, "car_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Sharh matni",
        example: "Avtomobil juda yaxshi ishlaydi"
    }),
    (0, class_validator_1.IsString)({ message: "Sharh matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(10, { message: "Sharh kamida 10 ta harf bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(500, { message: "Sharh 500 ta harfdan oshmasligi kerak" }),
    __metadata("design:type", String)
], CreateReviewsDto.prototype, "comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Baho (1-5)",
        example: "5"
    }),
    (0, class_validator_1.IsString)({ message: "Baho matn bo'lishi kerak" }),
    __metadata("design:type", String)
], CreateReviewsDto.prototype, "rating", void 0);
//# sourceMappingURL=create-review.dto.js.map