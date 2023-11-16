import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OffreStageService } from './offre-stage.service';
import { Etudiant } from 'src/etudiant/etudiant.model';
import { Entreprise } from 'src/entreprise/entreprise.model';

@Controller('offre-stage')
export class OffreStageController {
    constructor(private readonly offreStageService: OffreStageService) { }
    @Post()
    async addOffreStage(
        
        @Body('titre') titre: string,
        @Body('description') description: string,
        @Body('domaine') domaine: string,
        @Body('candidatures') candidatures: Array<Etudiant>,
        @Body('competences') competences: Array<string>,
        @Body('localisation') localisation: string,
        @Body('date_debut') date_debut: Date,
        @Body('date_fin') date_fin: Date,
        @Body('entreprise') entreprise: Entreprise,
    ) {
        const generatedId = await this.offreStageService.insertOffreStage(titre, description, domaine, candidatures, competences, localisation ,date_debut, date_fin,entreprise);
        return { id: generatedId };
    }
    @Get()
    async getAllOffresStage() {
        const offresStage = await this.offreStageService.getOffresStage();
        return offresStage;
    }
    @Get(':id')
    getOffreStage(@Param('id') id: string) {
        return this.offreStageService.getSingleOffreStage(id);
    }
    @Patch(':id')
    async updateOffreStage(
        @Param('id') id: string,
        @Body('titre') titre: string,
        @Body('description') description: string,
        @Body('domaine') domaine: string,
        @Body('competences') competences: Array<string>,
        @Body('localisation') localisation: string,
        @Body('date_debut') date_debut: Date,
        @Body('date_fin') date_fin: Date,
    ) {
        await this.offreStageService.updateOffreStage(id, titre, description, domaine, competences, localisation ,date_debut, date_fin);
        return "Updated Successfully";
    }
    @Delete(':id')
    async removeOffreStage(@Param('id') Id: string) {
        await this.offreStageService.deleteOffreStage(Id);
        return "Deleted Successfully";
    }

}
