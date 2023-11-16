// entreprise.module.ts
import { Module } from '@nestjs/common';
import { EntrepriseService } from './entreprise.service';
import { EntrepriseController } from './entreprise.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EntrepriseSchema } from './entreprise.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Entreprise', schema: EntrepriseSchema }])],
  providers: [EntrepriseService],
  controllers: [EntrepriseController],
  exports: [EntrepriseService],
})
export class EntrepriseModule {}
