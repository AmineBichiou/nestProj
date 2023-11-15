import * as mongoose from 'mongoose';
import { User } from '../user/user.model';
export declare const EtudiantSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    user: mongoose.Types.ObjectId;
    competences: any[];
    Resume: string;
    localisation: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    user: mongoose.Types.ObjectId;
    competences: any[];
    Resume: string;
    localisation: string;
}>> & mongoose.FlatRecord<{
    user: mongoose.Types.ObjectId;
    competences: any[];
    Resume: string;
    localisation: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Etudiant extends mongoose.Document {
    id: string;
    user: User;
    competences: Array<string>;
    Resume: string;
    localisation: string;
    getResume(): string;
}
