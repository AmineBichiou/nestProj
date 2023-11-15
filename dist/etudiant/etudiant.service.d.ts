/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Etudiant } from './etudiant.model';
import { User } from '../user/user.model';
export declare class EtudiantService {
    private readonly etudiantModel;
    getSingleProduct(prodId: string): void;
    constructor(etudiantModel: Model<Etudiant>);
    insertEtudiant(competences: Array<string>, localisation: string, user: User, Resume: string): Promise<import("mongoose").Document<unknown, {}, Etudiant> & Etudiant & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getEtudiants(): Promise<{
        id: any;
        competences: string[];
        localisation: string;
        user: {
            id: string;
            nom: string;
            email: string;
            password: string;
        };
        Resume: string;
    }[]>;
    getSingleEtudiant(Id: string): Promise<{
        id: string;
        competences: string[];
        localisation: string;
        Resume: string;
    }>;
    updateEtudiant(Id: string, competences: Array<string>, localisation: string, Resume: string): Promise<void>;
    findEtudiant(Id: string): Promise<Etudiant>;
    deleteEtudiant(Id: string): Promise<void>;
}
