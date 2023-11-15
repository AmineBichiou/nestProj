
import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { User } from 'src/user/user.model';

@Controller('etudiant')
export class EtudiantController {
    constructor( private readonly etudiantService : EtudiantService){}
    @Post()
    @UseInterceptors(FileInterceptor('Resume', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }))
    async addEtudiant(
      @Body('competences') competences: Array<string>,
      @Body('localisation') localisation: string,
      @Body('user') user: User,
      @UploadedFile() file: Express.Multer.File,
    ) {
      const generatedId = await this.etudiantService.insertEtudiant(competences, localisation,user,file.path);
      
      return { id: generatedId, filePath: file.path };
    }
    @Get()
        async getAllEtudiants(){
            const etudiants = await this.etudiantService.getEtudiants();
            return etudiants;
        }
    @Post('/upload')
    @UseInterceptors( FileInterceptor('file', {
         storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    cb(null, file.originalname);
                },
            }),
        }),
    )

        async uploadFile() {
            
            return "success";
        }
    @Get(':id')
        
        getEtudiant(@Param('id') id: string) {
          return this.etudiantService.getSingleEtudiant(id);
        }
    @Delete(':id')
        async removeEtudiant(@Param('id') Id: string){
            await this.etudiantService.deleteEtudiant(Id);
            return "Deleted Successfully";
        }
        @Patch(':id')
  @UseInterceptors(FileInterceptor('Resume', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  }))
  async updateEtudiant(
    @Param('id') id: string,
    @Body('competences') competences: Array<string>,
    @Body('localisation') localisation: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const updatedEtudiant = await this.etudiantService.updateEtudiant(id, competences, localisation, file.path);
    
    return updatedEtudiant;
  }
}
