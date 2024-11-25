"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessToken = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
exports.AccessToken = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new microservices_1.RpcException('Authorization header not found');
    }
    const token = authHeader.split(' ')[1];
    return token;
});
//# sourceMappingURL=AccessToken.js.map