"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItinerarieTransportModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("../../../config");
let ItinerarieTransportModule = class ItinerarieTransportModule {
};
exports.ItinerarieTransportModule = ItinerarieTransportModule;
exports.ItinerarieTransportModule = ItinerarieTransportModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'ITINIERARIE_TRANSPORT',
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: [config_1.NATS_SERVER]
                    },
                },
            ]),
        ],
        exports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'ITINIERARIE_TRANSPORT',
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: [config_1.NATS_SERVER]
                    },
                },
            ]),
        ],
    })
], ItinerarieTransportModule);
//# sourceMappingURL=ItinierarieTransport.js.map