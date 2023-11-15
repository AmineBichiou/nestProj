"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtudiantSchema = void 0;
const mongoose = require("mongoose");
exports.EtudiantSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    competences: { type: Array, required: true },
    Resume: { type: String, required: true },
    localisation: { type: String, required: true },
});
//# sourceMappingURL=etudiant.model.js.map