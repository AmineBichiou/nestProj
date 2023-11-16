import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { EtudiantModule } from './etudiant/etudiant.module';
import { EntrepriseModule } from './entreprise/entreprise.module';
import { OffreStageModule } from './offre-stage/offre-stage.module';
import { AuthModule } from './auth/auth.module';
import * as cors from 'cors';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://aminebichiou2:7Uhs80FIwBAhC690@amine.qukftes.mongodb.net/nextjsapi"),
    StudentModule,
    EtudiantModule,
    EntrepriseModule,
    UserModule,
    OffreStageModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors({ origin: '*' })).forRoutes('*');
  }
}