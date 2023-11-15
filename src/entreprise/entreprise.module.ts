import { Module } from '@nestjs/common';
import { EntrepriseService } from './entreprise.service';
import { EntrepriseController } from './entreprise.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { EntrepriseSchema } from './entreprise.model';

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Entreprise', schema: EntrepriseSchema }])],
  providers: [EntrepriseService],
  controllers: [EntrepriseController]
})
export class EntrepriseModule {}
