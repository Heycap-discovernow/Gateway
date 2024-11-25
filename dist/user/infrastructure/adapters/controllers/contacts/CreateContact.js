"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const ContactRequestDTO_1 = require("../../../../application/dtos/request/ContactRequestDTO");
const rxjs_1 = require("rxjs");
const Opossum = require("opossum");
let CreateContactController = class CreateContactController {
    constructor(client) {
        this.client = client;
        const sendContactRequest = (contact) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const result = await (0, rxjs_1.lastValueFrom)(this.client.send('create-contact', contact));
                    resolve(result);
                }
                catch (error) {
                    reject(error);
                }
            });
        };
        this.circuitBreaker = new Opossum(sendContactRequest, {
            timeout: 3000,
            errorThresholdPercentage: 50,
            resetTimeout: 10000,
        });
        this.circuitBreaker.fallback(() => {
            console.error('El Circuit Breaker está abierto. Servicio no disponible.');
            return Promise.reject('Servicio no disponible temporalmente');
        });
        this.circuitBreaker.on('open', () => {
            console.warn('Circuit Breaker en estado ABIERTO');
        });
        this.circuitBreaker.on('halfOpen', () => {
            console.info('Circuit Breaker en estado SEMI-ABIERTO');
        });
        this.circuitBreaker.on('close', () => {
            console.info('Circuit Breaker en estado CERRADO');
        });
    }
    async createContact(contact, res) {
        try {
            const result = await this.circuitBreaker.fire(contact);
            res.status(common_1.HttpStatus.OK).json({ message: result });
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: error });
        }
    }
};
exports.CreateContactController = CreateContactController;
__decorate([
    (0, common_1.Post)("/create-contact"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ContactRequestDTO_1.ContactRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], CreateContactController.prototype, "createContact", null);
exports.CreateContactController = CreateContactController = __decorate([
    (0, common_1.Controller)("/contacts"),
    __param(0, (0, common_1.Inject)("USERS_TRANSPORT")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], CreateContactController);
//# sourceMappingURL=CreateContact.js.map