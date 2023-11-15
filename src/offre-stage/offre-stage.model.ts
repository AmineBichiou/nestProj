import * as mongoose from 'mongoose';
import { Entreprise } from 'src/entreprise/entreprise.model';
import { Etudiant } from 'src/etudiant/etudiant.model';


export const OffreStageSchema = new mongoose.Schema({
  titre: { type: String , required: true },
  description : { type: String , required: true },
  domaine : { type: String , required: true },
  candidatures : { type: Array , required: true },
  localisation: { type: String , required: true },
  competences: { type: Array , required: true },
  date_debut: { type: Date , required: true },
  date_fin: { type: Date , required: true },
  entreprise: { type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise', required: true },
 
});

export interface OffreStage extends mongoose.Document  {
    id: string;
    titre: string;
    description : string;
    domaine : string;
    candidatures : Array<Etudiant>;
    localisation: string;
    competences: Array<string>;
    date_debut: Date;
    date_fin: Date;
    entreprise: Entreprise;
  
}