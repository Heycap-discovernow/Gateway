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
exports.VerifyNumberController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const AccesTokenAuthGuard_1 = require("../../../guards/AccesTokenAuthGuard");
const AccessToken_1 = require("../../../../../decorators/AccessToken");
const BaseResponse_1 = require("../../../../application/dtos/response/BaseResponse");
let VerifyNumberController = class VerifyNumberController {
    constructor(client) {
        this.client = client;
    }
    async verifyNumber(code, accessToken, res) {
        try {
            const result = await (0, rxjs_1.lastValueFrom)(this.client.send('verify-number-register', { token: accessToken, code: code }));
            if (!result) {
                throw new microservices_1.RpcException('Code not verified');
            }
            const response = new BaseResponse_1.BaseResponse(result, true, result.message);
            res.status(common_1.HttpStatus.OK).json(response.toResponseEntity());
        }
        catch (error) {
            const response = new BaseResponse_1.BaseResponse({}, false, error.message);
            res.status(common_1.HttpStatus.BAD_REQUEST).json(response.toResponseEntity());
        }
    }
};
exports.VerifyNumberController = VerifyNumberController;
__decorate([
    (0, common_1.UseGuards)(AccesTokenAuthGuard_1.AccessTokenAuthGuard),
    (0, common_1.Post)("/verifynumber/code"),
    __param(0, (0, common_1.Body)('code')),
    __param(1, (0, AccessToken_1.AccessToken)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], VerifyNumberController.prototype, "verifyNumber", null);
exports.VerifyNumberController = VerifyNumberController = __decorate([
    (0, common_1.Controller)("/users"),
    __param(0, (0, common_1.Inject)('USERS_TRANSPORT')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], VerifyNumberController);
//# sourceMappingURL=VerifyNumberController.js.map