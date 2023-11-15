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
exports.EtudiantController = void 0;
const common_1 = require("@nestjs/common");
const etudiant_service_1 = require("./etudiant.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let EtudiantController = class EtudiantController {
    constructor(etudiantService) {
        this.etudiantService = etudiantService;
    }
    async addEtudiant(competences, localisation, user, file) {
        const generatedId = await this.etudiantService.insertEtudiant(competences, localisation, user, file.path);
        return { id: generatedId, filePath: file.path };
    }
    async getAllEtudiants() {
        const etudiants = await this.etudiantService.getEtudiants();
        return etudiants;
    }
    async uploadFile() {
        return "success";
    }
    getEtudiant(id) {
        return this.etudiantService.getSingleEtudiant(id);
    }
    async removeEtudiant(Id) {
        await this.etudiantService.deleteEtudiant(Id);
        return "Deleted Successfully";
    }
    async updateEtudiant(id, competences, localisation, file) {
        const updatedEtudiant = await this.etudiantService.updateEtudiant(id, competences, localisation, file.path);
        return updatedEtudiant;
    }
};
exports.EtudiantController = EtudiantController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('Resume', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.Body)('competences')),
    __param(1, (0, common_1.Body)('localisation')),
    __param(2, (0, common_1.Body)('user')),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, Object, Object]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "addEtudiant", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "getAllEtudiants", null);
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            },
        }),
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "getEtudiant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "removeEtudiant", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('Resume', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('competences')),
    __param(2, (0, common_1.Body)('localisation')),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, String, Object]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "updateEtudiant", null);
exports.EtudiantController = EtudiantController = __decorate([
    (0, common_1.Controller)('etudiant'),
    __metadata("design:paramtypes", [etudiant_service_1.EtudiantService])
], EtudiantController);
//# sourceMappingURL=etudiant.controller.js.map