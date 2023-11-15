"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntrepriseSchema = void 0;
const mongoose = require("mongoose");
exports.EntrepriseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    localisation: { type: String, required: true },
    secteur: { type: String, required: true },
});
//# sourceMappingURL=entreprise.model.js.map