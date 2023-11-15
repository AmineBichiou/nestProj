import { Module } from '@nestjs/common';
import { EtudiantController } from './etudiant.controller';
import { EtudiantService } from './etudiant.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { EtudiantSchema } from './etudiant.model';

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Etudiant', schema: EtudiantSchema }])],
  controllers: [EtudiantController],
  providers: [EtudiantService]
})
export class EtudiantModule {}
