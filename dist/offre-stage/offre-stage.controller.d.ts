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
import { OffreStageService } from './offre-stage.service';
import { Etudiant } from 'src/etudiant/etudiant.model';
import { Entreprise } from 'src/entreprise/entreprise.model';
export declare class OffreStageController {
    private readonly offreStageService;
    constructor(offreStageService: OffreStageService);
    addOffreStage(titre: string, description: string, domaine: string, candidatures: Array<Etudiant>, competences: Array<string>, localisation: string, date_debut: Date, date_fin: Date, entreprise: Entreprise): Promise<{
        id: import("mongoose").Document<unknown, {}, import("./offre-stage.model").OffreStage> & import("./offre-stage.model").OffreStage & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getAllOffresStage(): Promise<{
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
    getOffreStage(id: string): Promise<{
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
    updateOffreStage(id: string, titre: string, description: string, domaine: string, competences: Array<string>, localisation: string, date_debut: Date, date_fin: Date): Promise<string>;
    removeOffreStage(Id: string): Promise<string>;
}
