import { Module } from '@nestjs/common';
import { OffreStageService } from './offre-stage.service';
import { OffreStageController } from './offre-stage.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OffreStageSchema } from './offre-stage.model';


@Module({
  imports: [ MongooseModule.forFeature([{ name: 'OffreStage', schema: OffreStageSchema }])],
  providers: [OffreStageService],
  controllers: [OffreStageController]
})
export class OffreStageModule {}
