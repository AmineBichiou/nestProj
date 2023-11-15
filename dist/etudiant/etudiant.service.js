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
exports.EtudiantService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EtudiantService = class EtudiantService {
    getSingleProduct(prodId) {
        throw new Error('Method not implemented.');
    }
    constructor(etudiantModel) {
        this.etudiantModel = etudiantModel;
    }
    async insertEtudiant(competences, localisation, user, Resume) {
        const newEtudiant = new this.etudiantModel({
            competences,
            localisation,
            user,
            Resume,
        });
        const result = await newEtudiant.save();
        console.log(result);
        return result;
    }
    async getEtudiants() {
        try {
            const etudiants = await this.etudiantModel.find().populate('user').exec();
            return etudiants.map(etudiant => ({
                id: etudiant.id,
                competences: etudiant.competences,
                localisation: etudiant.localisation,
                user: {
                    id: etudiant.user.id,
                    nom: etudiant.user.nom,
                    email: etudiant.user.email,
                    password: etudiant.user.password,
                },
                Resume: etudiant.Resume,
            }));
        }
        catch (error) {
            console.error(error);
            throw new Error('Error fetching etudiants');
        }
    }
    async getSingleEtudiant(Id) {
        const etudiant = await this.findEtudiant(Id);
        return {
            id: etudiant.id,
            competences: etudiant.competences,
            localisation: etudiant.localisation,
            Resume: etudiant.Resume,
        };
    }
    async updateEtudiant(Id, competences, localisation, Resume) {
        const updatedEtudiant = await this.findEtudiant(Id);
        if (competences) {
            updatedEtudiant.competences = competences;
        }
        if (localisation) {
            updatedEtudiant.localisation = localisation;
        }
        if (Resume) {
            updatedEtudiant.Resume = Resume;
        }
        updatedEtudiant.save();
    }
    findEtudiant(Id) {
        let etudiant;
        try {
            etudiant = this.etudiantModel.findById(Id).exec();
        }
        catch (error) {
            throw new Error('Could not find etudiant.');
        }
        if (!etudiant) {
            throw new Error('Could not find etudiant.');
        }
        return etudiant;
    }
    async deleteEtudiant(Id) {
        const result = await this.etudiantModel.deleteOne({ _id: Id }).exec();
        if (result.deletedCount === 0) {
            throw new Error('Could not find etudiant.');
        }
    }
};
exports.EtudiantService = EtudiantService;
exports.EtudiantService = EtudiantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Etudiant')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EtudiantService);
//# sourceMappingURL=etudiant.service.js.map