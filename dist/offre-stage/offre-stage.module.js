"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffreStageModule = void 0;
const common_1 = require("@nestjs/common");
const offre_stage_service_1 = require("./offre-stage.service");
const offre_stage_controller_1 = require("./offre-stage.controller");
const mongoose_1 = require("@nestjs/mongoose");
const offre_stage_model_1 = require("./offre-stage.model");
let OffreStageModule = class OffreStageModule {
};
exports.OffreStageModule = OffreStageModule;
exports.OffreStageModule = OffreStageModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'OffreStage', schema: offre_stage_model_1.OffreStageSchema }])],
        providers: [offre_stage_service_1.OffreStageService],
        controllers: [offre_stage_controller_1.OffreStageController]
    })
], OffreStageModule);
//# sourceMappingURL=offre-stage.module.js.map