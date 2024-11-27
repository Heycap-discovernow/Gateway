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
exports.GeneratePlanController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const GeneratePlanDTO_1 = require("../../../application/dtos/GeneratePlanDTO");
const BaseResponse_1 = require("../../../application/dtos/BaseResponse");
let GeneratePlanController = class GeneratePlanController {
    constructor(client) {
        this.client = client;
    }
    async generatePlan(Plan, res) {
        try {
            const result = await (0, rxjs_1.lastValueFrom)(this.client.send('generate-plan', Plan));
            if (!result) {
                throw new microservices_1.RpcException('No fue posible generar el plan, intentelo de nuevo mas tarde');
            }
            const response = new BaseResponse_1.BaseResponse(result.message, true, "Plan generado correctamente");
            res.status(common_1.HttpStatus.OK).json(response.toResponseEntity());
        }
        catch (error) {
            const response = new BaseResponse_1.BaseResponse({}, false, error.message);
            res.status(common_1.HttpStatus.BAD_REQUEST).json(response.toResponseEntity());
        }
    }
};
exports.GeneratePlanController = GeneratePlanController;
__decorate([
    (0, common_1.Post)("/generate-plan"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GeneratePlanDTO_1.GeneratePlanDTO, Object]),
    __metadata("design:returntype", Promise)
], GeneratePlanController.prototype, "generatePlan", null);
exports.GeneratePlanController = GeneratePlanController = __decorate([
    (0, common_1.Controller)("/itineraries"),
    __param(0, (0, common_1.Inject)('ITINIERARIE_TRANSPORT')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], GeneratePlanController);
//# sourceMappingURL=GeneratePlanController.js.map