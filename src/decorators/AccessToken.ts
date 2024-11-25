import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";

export const AccessToken = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new RpcException('Authorization header not found');
        }
        const token = authHeader.split(' ')[1]; // Extraer el token después de "Bearer "
        return token;
    }
);