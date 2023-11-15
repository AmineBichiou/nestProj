import * as mongoose from 'mongoose';
import { User } from 'src/user/user.model';


export const EntrepriseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  localisation: { type: String , required: true },
  secteur : { type: String , required: true },
 
});

export interface Entreprise extends mongoose.Document  {
    id: string;
    user: User;
    localisation: string;
    secteur : string;
  
}