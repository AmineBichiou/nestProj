import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Etudiant } from './etudiant.model';
import { User } from '../user/user.model';

@Injectable()
export class EtudiantService {
    findByEmail(email: any, password: any): Etudiant | PromiseLike<Etudiant> {
        throw new Error('Method not implemented.');
    }
    getSingleProduct(prodId: string) {
        throw new Error('Method not implemented.');
    }
    constructor( @InjectModel('Etudiant') private readonly etudiantModel : Model<Etudiant>,) {}
    async insertEtudiant(competences:Array<string>,localisation:string,user:User,Resume:string){
        const newEtudiant = new this.etudiantModel({
            competences,
            localisation,
            user,
            Resume,
        });
        const result = await newEtudiant.save();
        console.log(result);
        return result
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
      } catch (error) {
        console.error(error);
        throw new Error('Error fetching etudiants');
      }
    }
    async findOne(username: string): Promise<Etudiant | undefined> {
      const etudiants = await this.etudiantModel.find().populate('user').exec();
      const etudiant = etudiants.find(etudiant => etudiant.user.email === username);
      return etudiant;
    }
    async getSingleEtudiant(Id: string) {
        const etudiant = await this.findEtudiant(Id);
        return {
          id: etudiant.id,
          competences: etudiant.competences,
          localisation: etudiant.localisation,
            Resume: etudiant.Resume,
        };
      }
    async updateEtudiant(Id: string, competences:Array<string>,localisation:string,Resume:string){
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
    findEtudiant(Id: string): Promise<Etudiant> {
        let etudiant;
        try {
          etudiant = this.etudiantModel.findById(Id).exec();
        } catch (error) {
          throw new Error('Could not find etudiant.');
        }
        if (!etudiant) {
          throw new Error('Could not find etudiant.');
        }
        return etudiant;
        
    }
    async deleteEtudiant(Id: string){
        const result = await this.etudiantModel.deleteOne({_id: Id}).exec();
        if (result.deletedCount === 0) {
            throw new Error('Could not find etudiant.');
          }
    }


}
