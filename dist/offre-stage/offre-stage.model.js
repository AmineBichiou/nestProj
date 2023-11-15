"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffreStageSchema = void 0;
const mongoose = require("mongoose");
exports.OffreStageSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    domaine: { type: String, required: true },
    candidatures: { type: Array, required: true },
    localisation: { type: String, required: true },
    competences: { type: Array, required: true },
    date_debut: { type: Date, required: true },
    date_fin: { type: Date, required: true },
    entreprise: { type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise', required: true },
});
//# sourceMappingURL=offre-stage.model.js.map