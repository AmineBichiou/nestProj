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
exports.EntrepriseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EntrepriseService = class EntrepriseService {
    constructor(entrepriseModel) {
        this.entrepriseModel = entrepriseModel;
    }
    async insertEntreprise(user, localisation, secteur) {
        const newEntreprise = new this.entrepriseModel({
            user,
            localisation,
            secteur,
        });
        const result = await newEntreprise.save();
        console.log(result);
        return result;
    }
    async getEntreprises() {
        const entreprises = await this.entrepriseModel.find().populate('user').exec();
        return entreprises.map(entreprise => ({
            id: entreprise.id,
            user: {
                id: entreprise.user.id,
                nom: entreprise.user.nom,
                email: entreprise.user.email,
                password: entreprise.user.password,
            },
            localisation: entreprise.localisation,
            secteur: entreprise.secteur,
        }));
    }
    async getSingleEntreprise(Id) {
        const entreprise = await this.findEntreprise(Id);
        return {
            id: entreprise.id,
            localisation: entreprise.localisation,
            secteur: entreprise.secteur,
        };
    }
    async updateEntreprise(Id, localisation, secteur) {
        const updatedEntreprise = await this.findEntreprise(Id);
        if (localisation) {
            updatedEntreprise.localisation = localisation;
        }
        if (secteur) {
            updatedEntreprise.secteur = secteur;
        }
        updatedEntreprise.save();
    }
    findEntreprise(Id) {
        let entreprise;
        try {
            entreprise = this.entrepriseModel.findById(Id).exec();
        }
        catch (error) {
            throw new Error('Could not find entreprise.');
        }
        if (!entreprise) {
            throw new Error('Could not find entreprise.');
        }
        return entreprise;
    }
    async deleteEntreprise(Id) {
        const result = await this.entrepriseModel.deleteOne({ _id: Id }).exec();
        if (result.deletedCount === 0) {
            throw new Error('Could not find entreprise.');
        }
    }
};
exports.EntrepriseService = EntrepriseService;
exports.EntrepriseService = EntrepriseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Entreprise')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EntrepriseService);
//# sourceMappingURL=entreprise.service.js.map