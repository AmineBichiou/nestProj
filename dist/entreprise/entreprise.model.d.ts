import * as mongoose from 'mongoose';
import { User } from 'src/user/user.model';
export declare const EntrepriseSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    user: mongoose.Types.ObjectId;
    localisation: string;
    secteur: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    user: mongoose.Types.ObjectId;
    localisation: string;
    secteur: string;
}>> & mongoose.FlatRecord<{
    user: mongoose.Types.ObjectId;
    localisation: string;
    secteur: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Entreprise extends mongoose.Document {
    id: string;
    user: User;
    localisation: string;
    secteur: string;
}
