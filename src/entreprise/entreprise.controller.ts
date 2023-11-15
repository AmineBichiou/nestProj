import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EntrepriseService } from './entreprise.service';
import { Entreprise } from './entreprise.model';
import { User } from 'src/user/user.model';
@Controller('entreprise')
export class EntrepriseController {
    constructor(private readonly entrepriseService: EntrepriseService) { }
    @Post()
    async addEntreprise(
        @Body('user') user: User,
        @Body('localisation') localisation: string,
        @Body('secteur') secteur: string,

    ) {
        const generatedId = await this.entrepriseService.insertEntreprise(user,localisation, secteur);
        return { id: generatedId };
    }
    @Get()
    async getAllEntreprises() {
        const entreprises = await this.entrepriseService.getEntreprises();
        return entreprises;
    }
    @Get(':id')
    getEntreprise(@Param('id') id: string) {
        return this.entrepriseService.getSingleEntreprise(id);
    }
    @Patch(':id')
    async updateEntreprise(
        @Param('id') id: string,
        @Body('localisation') localisation: string,
        @Body('secteur') secteur: string,
    ) {
        await this.entrepriseService.updateEntreprise(id, localisation, secteur);
        return "Updated Successfully";
    }
    @Delete(':id')
    async removeEntreprise(@Param('id') Id: string) {
        await this.entrepriseService.deleteEntreprise(Id);
        return "Deleted Successfully";
    }
    


}
