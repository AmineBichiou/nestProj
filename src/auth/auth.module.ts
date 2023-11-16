// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.auth';
import { PassportModule } from '@nestjs/passport';
import { EntrepriseModule } from 'src/entreprise/entreprise.module';
import { EtudiantModule } from 'src/etudiant/etudiant.module';

@Module({
  imports: [
    EntrepriseModule,
    EtudiantModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    EntrepriseModule,
    EtudiantModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
