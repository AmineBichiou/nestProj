/// <reference types="multer" />
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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { EtudiantService } from './etudiant.service';
import { User } from 'src/user/user.model';
export declare class EtudiantController {
    private readonly etudiantService;
    constructor(etudiantService: EtudiantService);
    addEtudiant(competences: Array<string>, localisation: string, user: User, file: Express.Multer.File): Promise<{
        id: import("mongoose").Document<unknown, {}, import("./etudiant.model").Etudiant> & import("./etudiant.model").Etudiant & {
            _id: import("mongoose").Types.ObjectId;
        };
        filePath: string;
    }>;
    getAllEtudiants(): Promise<{
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
    uploadFile(): Promise<string>;
    getEtudiant(id: string): Promise<{
        id: string;
        competences: string[];
        localisation: string;
        Resume: string;
    }>;
    removeEtudiant(Id: string): Promise<string>;
    updateEtudiant(id: string, competences: Array<string>, localisation: string, file: Express.Multer.File): Promise<void>;
}
