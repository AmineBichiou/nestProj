"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntrepriseModule = void 0;
const common_1 = require("@nestjs/common");
const entreprise_service_1 = require("./entreprise.service");
const entreprise_controller_1 = require("./entreprise.controller");
const mongoose_1 = require("@nestjs/mongoose");
const entreprise_model_1 = require("./entreprise.model");
let EntrepriseModule = class EntrepriseModule {
};
exports.EntrepriseModule = EntrepriseModule;
exports.EntrepriseModule = EntrepriseModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Entreprise', schema: entreprise_model_1.EntrepriseSchema }])],
        providers: [entreprise_service_1.EntrepriseService],
        controllers: [entreprise_controller_1.EntrepriseController]
    })
], EntrepriseModule);
//# sourceMappingURL=entreprise.module.js.map