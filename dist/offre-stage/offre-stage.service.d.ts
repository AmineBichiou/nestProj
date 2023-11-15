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
import { OffreStage } from './offre-stage.model';
import { Entreprise } from 'src/entreprise/entreprise.model';
import { Etudiant } from 'src/etudiant/etudiant.model';
export declare class OffreStageService {
    private readonly offreStageModel;
    constructor(offreStageModel: Model<OffreStage>);
    insertOffreStage(titre: string, description: string, domaine: string, candidatures: Array<Etudiant>, competences: Array<string>, localisation: string, date_debut: Date, date_fin: Date, entreprise: Entreprise): Promise<import("mongoose").Document<unknown, {}, OffreStage> & OffreStage & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getOffresStage(): Promise<{
        id: any;
        titre: string;
        description: string;
        domaine: string;
        candidatures: Etudiant[];
        localisation: string;
        competences: string[];
        date_debut: Date;
        date_fin: Date;
        entreprise: {
            id: string;
            user: import("../user/user.model").User;
            localisation: string;
            secteur: string;
        };
    }[]>;
    getSingleOffreStage(Id: string): Promise<{
        id: string;
        titre: string;
        description: string;
        domaine: string;
        candidatures: Etudiant[];
        localisation: string;
        competences: string[];
        date_debut: Date;
        date_fin: Date;
    }>;
    updateOffreStage(Id: string, titre: string, description: string, domaine: string, competences: Array<string>, localisation: string, date_debut: Date, date_fin: Date): Promise<void>;
    findOffreStage(Id: string): Promise<OffreStage>;
    deleteOffreStage(Id: string): Promise<void>;
}
