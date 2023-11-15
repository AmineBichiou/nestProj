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
exports.OffreStageController = void 0;
const common_1 = require("@nestjs/common");
const offre_stage_service_1 = require("./offre-stage.service");
let OffreStageController = class OffreStageController {
    constructor(offreStageService) {
        this.offreStageService = offreStageService;
    }
    async addOffreStage(titre, description, domaine, candidatures, competences, localisation, date_debut, date_fin, entreprise) {
        const generatedId = await this.offreStageService.insertOffreStage(titre, description, domaine, candidatures, competences, localisation, date_debut, date_fin, entreprise);
        return { id: generatedId };
    }
    async getAllOffresStage() {
        const offresStage = await this.offreStageService.getOffresStage();
        return offresStage;
    }
    getOffreStage(id) {
        return this.offreStageService.getSingleOffreStage(id);
    }
    async updateOffreStage(id, titre, description, domaine, competences, localisation, date_debut, date_fin) {
        await this.offreStageService.updateOffreStage(id, titre, description, domaine, competences, localisation, date_debut, date_fin);
        return "Updated Successfully";
    }
    async removeOffreStage(Id) {
        await this.offreStageService.deleteOffreStage(Id);
        return "Deleted Successfully";
    }
};
exports.OffreStageController = OffreStageController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('titre')),
    __param(1, (0, common_1.Body)('description')),
    __param(2, (0, common_1.Body)('domaine')),
    __param(3, (0, common_1.Body)('candidatures')),
    __param(4, (0, common_1.Body)('competences')),
    __param(5, (0, common_1.Body)('localisation')),
    __param(6, (0, common_1.Body)('date_debut')),
    __param(7, (0, common_1.Body)('date_fin')),
    __param(8, (0, common_1.Body)('entreprise')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Array,
        Array, String, Date,
        Date, Object]),
    __metadata("design:returntype", Promise)
], OffreStageController.prototype, "addOffreStage", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OffreStageController.prototype, "getAllOffresStage", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OffreStageController.prototype, "getOffreStage", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('titre')),
    __param(2, (0, common_1.Body)('description')),
    __param(3, (0, common_1.Body)('domaine')),
    __param(4, (0, common_1.Body)('competences')),
    __param(5, (0, common_1.Body)('localisation')),
    __param(6, (0, common_1.Body)('date_debut')),
    __param(7, (0, common_1.Body)('date_fin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Array, String, Date,
        Date]),
    __metadata("design:returntype", Promise)
], OffreStageController.prototype, "updateOffreStage", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OffreStageController.prototype, "removeOffreStage", null);
exports.OffreStageController = OffreStageController = __decorate([
    (0, common_1.Controller)('offre-stage'),
    __metadata("design:paramtypes", [offre_stage_service_1.OffreStageService])
], OffreStageController);
//# sourceMappingURL=offre-stage.controller.js.map