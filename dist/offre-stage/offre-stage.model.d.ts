import * as mongoose from 'mongoose';
import { Entreprise } from 'src/entreprise/entreprise.model';
import { Etudiant } from 'src/etudiant/etudiant.model';
export declare const OffreStageSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    competences: any[];
    localisation: string;
    description: string;
    entreprise: mongoose.Types.ObjectId;
    titre: string;
    domaine: string;
    candidatures: any[];
    date_debut: Date;
    date_fin: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    competences: any[];
    localisation: string;
    description: string;
    entreprise: mongoose.Types.ObjectId;
    titre: string;
    domaine: string;
    candidatures: any[];
    date_debut: Date;
    date_fin: Date;
}>> & mongoose.FlatRecord<{
    competences: any[];
    localisation: string;
    description: string;
    entreprise: mongoose.Types.ObjectId;
    titre: string;
    domaine: string;
    candidatures: any[];
    date_debut: Date;
    date_fin: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface OffreStage extends mongoose.Document {
    id: string;
    titre: string;
    description: string;
    domaine: string;
    candidatures: Array<Etudiant>;
    localisation: string;
    competences: Array<string>;
    date_debut: Date;
    date_fin: Date;
    entreprise: Entreprise;
}
