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
exports.BranchController = void 0;
const common_1 = require("@nestjs/common");
const branch_service_1 = require("./branch.service");
const update_branch_dto_1 = require("./dto/update-branch.dto");
const create_branch_dto_1 = require("./dto/create-branch.dto");
const winston_logger_service_1 = require("../common/logger/winston-logger.service");
let BranchController = class BranchController {
    branchService;
    logger;
    constructor(branchService, logger) {
        this.branchService = branchService;
        this.logger = logger;
    }
    create(createBranchDto) {
        this.logger.log('Branch yaratish so‘rovi', 'BranchController');
        return this.branchService.create(createBranchDto);
    }
    findAll() {
        this.logger.log('Barcha branchlar ro‘yxati', 'BranchController');
        return this.branchService.findAll();
    }
    findOne(id) {
        this.logger.log(`Branch olish: ${id}`, 'BranchController');
        return this.branchService.findOne(+id);
    }
    update(id, updateBranchDto) {
        this.logger.log(`Branch yangilash: ${id}`, 'BranchController');
        return this.branchService.update(+id, updateBranchDto);
    }
    remove(id) {
        this.logger.log(`Branch o‘chirish: ${id}`, 'BranchController');
        return this.branchService.remove(+id);
    }
};
exports.BranchController = BranchController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_branch_dto_1.CreateBranchesDto]),
    __metadata("design:returntype", void 0)
], BranchController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BranchController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BranchController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_branch_dto_1.UpdateBranchesDto]),
    __metadata("design:returntype", void 0)
], BranchController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BranchController.prototype, "remove", null);
exports.BranchController = BranchController = __decorate([
    (0, common_1.Controller)('branch'),
    __metadata("design:paramtypes", [branch_service_1.BranchService,
        winston_logger_service_1.WinstonLoggerService])
], BranchController);
//# sourceMappingURL=branch.controller.js.map