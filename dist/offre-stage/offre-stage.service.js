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
exports.OffreStageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OffreStageService = class OffreStageService {
    constructor(offreStageModel) {
        this.offreStageModel = offreStageModel;
    }
    async insertOffreStage(titre, description, domaine, candidatures, competences, localisation, date_debut, date_fin, entreprise) {
        const newOffreStage = new this.offreStageModel({
            titre,
            description,
            domaine,
            candidatures,
            localisation,
            competences,
            date_debut,
            date_fin,
            entreprise,
        });
        const result = await newOffreStage.save();
        console.log(result);
        return result;
    }
    async getOffresStage() {
        try {
            const offresStage = await this.offreStageModel.find().populate("entreprise").exec();
            return offresStage.map(offreStage => ({
                id: offreStage.id,
                titre: offreStage.titre,
                description: offreStage.description,
                domaine: offreStage.domaine,
                candidatures: offreStage.candidatures,
                localisation: offreStage.localisation,
                competences: offreStage.competences,
                date_debut: offreStage.date_debut,
                date_fin: offreStage.date_fin,
                entreprise: {
                    id: offreStage.entreprise.id,
                    user: offreStage.entreprise.user,
                    localisation: offreStage.entreprise.localisation,
                    secteur: offreStage.entreprise.secteur,
                }
            }));
        }
        catch (error) {
            console.error(error);
            throw new Error('Error fetching offresStage');
        }
    }
    async getSingleOffreStage(Id) {
        const offreStage = await this.findOffreStage(Id);
        return {
            id: offreStage.id,
            titre: offreStage.titre,
            description: offreStage.description,
            domaine: offreStage.domaine,
            candidatures: offreStage.candidatures,
            localisation: offreStage.localisation,
            competences: offreStage.competences,
            date_debut: offreStage.date_debut,
            date_fin: offreStage.date_fin,
        };
    }
    async updateOffreStage(Id, titre, description, domaine, competences, localisation, date_debut, date_fin) {
        const updatedOffreStage = await this.findOffreStage(Id);
        if (titre) {
            updatedOffreStage.titre = titre;
        }
        if (description) {
            updatedOffreStage.description = description;
        }
        if (domaine) {
            updatedOffreStage.domaine = domaine;
        }
        if (competences) {
            updatedOffreStage.competences = competences;
        }
        if (localisation) {
            updatedOffreStage.localisation = localisation;
        }
        if (date_debut) {
            updatedOffreStage.date_debut = date_debut;
        }
        if (date_fin) {
            updatedOffreStage.date_fin = date_fin;
        }
        updatedOffreStage.save();
    }
    findOffreStage(Id) {
        let offreStage;
        try {
            offreStage = this.offreStageModel.findById(Id).exec();
        }
        catch (error) {
            throw new Error('Could not find offreStage.');
        }
        if (!offreStage) {
            throw new Error('Could not find offreStage.');
        }
        return offreStage;
    }
    async deleteOffreStage(Id) {
        const result = await this.offreStageModel.deleteOne({ _id: Id }).exec();
        if (result.deletedCount === 0) {
            throw new Error('Could not find offreStage.');
        }
    }
};
exports.OffreStageService = OffreStageService;
exports.OffreStageService = OffreStageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('OffreStage')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OffreStageService);
//# sourceMappingURL=offre-stage.service.js.map