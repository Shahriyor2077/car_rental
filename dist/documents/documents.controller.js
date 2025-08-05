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
exports.DocumentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/common/guards/jwt-auth.guard");
const admin_auth_guard_1 = require("../auth/common/guards/admin-auth.guard");
const documents_service_1 = require("./documents.service");
const create_document_dto_1 = require("./dto/create-document.dto");
const update_document_dto_1 = require("./dto/update-document.dto");
let DocumentsController = class DocumentsController {
    documentsService;
    constructor(documentsService) {
        this.documentsService = documentsService;
    }
    create(createDocumentDto, req) {
        return this.documentsService.create(createDocumentDto, req.user.sub);
    }
    findOne(id, req) {
        return this.documentsService.findOne(+id, req.user.sub, req.user.role);
    }
    update(id, updateDocumentDto) {
        return this.documentsService.update(+id, updateDocumentDto);
    }
    remove(id) {
        return this.documentsService.remove(+id);
    }
    findAll() {
        return this.documentsService.findAll();
    }
};
exports.DocumentsController = DocumentsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Hujjat yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Hujjat muvaffaqiyatli yaratildi" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_dto_1.CreateDocumentsDto, Object]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Hujjat ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Hujjat ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Hujjat ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Hujjat topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Hujjat ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Hujjat ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Hujjat yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Hujjat topilmadi" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_document_dto_1.UpdateDocumentsDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Hujjat ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Hujjat ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Hujjat o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Hujjat topilmadi" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha hujjatlar ro'yxatini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Hujjatlar ro'yxati" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "findAll", null);
exports.DocumentsController = DocumentsController = __decorate([
    (0, swagger_1.ApiTags)("Documents - Hujjatlar"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("documents"),
    __metadata("design:paramtypes", [documents_service_1.DocumentsService])
], DocumentsController);
//# sourceMappingURL=documents.controller.js.map