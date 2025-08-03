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
exports.DamageController = void 0;
const common_1 = require("@nestjs/common");
const damage_service_1 = require("./damage.service");
const create_damage_dto_1 = require("./dto/create-damage.dto");
const update_damage_dto_1 = require("./dto/update-damage.dto");
let DamageController = class DamageController {
    damageService;
    constructor(damageService) {
        this.damageService = damageService;
    }
    create(createDamageDto) {
        return this.damageService.create(createDamageDto);
    }
    findAll() {
        return this.damageService.findAll();
    }
    findOne(id) {
        return this.damageService.findOne(+id);
    }
    update(id, updateDamageDto) {
        return this.damageService.update(+id, updateDamageDto);
    }
    remove(id) {
        return this.damageService.remove(+id);
    }
};
exports.DamageController = DamageController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_damage_dto_1.CreateDamagesDto]),
    __metadata("design:returntype", void 0)
], DamageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DamageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DamageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_damage_dto_1.UpdateDamagesDto]),
    __metadata("design:returntype", void 0)
], DamageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DamageController.prototype, "remove", null);
exports.DamageController = DamageController = __decorate([
    (0, common_1.Controller)('damage'),
    __metadata("design:paramtypes", [damage_service_1.DamageService])
], DamageController);
//# sourceMappingURL=damage.controller.js.map