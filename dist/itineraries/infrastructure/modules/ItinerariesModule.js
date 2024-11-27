"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItinerariesModule = void 0;
const common_1 = require("@nestjs/common");
const ItinierarieTransport_1 = require("./ItinierarieTransport");
const GeneratePlanController_1 = require("../adapters/controllers/GeneratePlanController");
const CreateItineraryController_1 = require("../adapters/controllers/CreateItineraryController");
const GetItinerariesController_1 = require("../adapters/controllers/GetItinerariesController");
let ItinerariesModule = class ItinerariesModule {
};
exports.ItinerariesModule = ItinerariesModule;
exports.ItinerariesModule = ItinerariesModule = __decorate([
    (0, common_1.Module)({
        imports: [ItinierarieTransport_1.ItinerarieTransportModule],
        controllers: [GeneratePlanController_1.GeneratePlanController, CreateItineraryController_1.CreateItinieraryController, GetItinerariesController_1.GetItinerariesController]
    })
], ItinerariesModule);
//# sourceMappingURL=ItinerariesModule.js.map