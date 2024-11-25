import { Controller, Patch, Res, Body, HttpStatus, Inject, UseGuards } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";

import { AccessTokenAuthGuard } from "src/user/infrastructure/guards/AccesTokenAuthGuard";
import { AccessToken } from "src/decorators/AccessToken";

import { Response } from "express";
import { lastValueFrom } from "rxjs";

import { BaseResponse } from "src/user/application/dtos/response/BaseResponse";

@Controller("/users")
export class ChangePasswordController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ) { }

    @UseGuards(AccessTokenAuthGuard)
    @Patch("change-password")
    public async changePassword(
        @Body("password") password: string,
        @AccessToken() accessToken: string,
        @Res() res: Response
    ) {
        try {
            const result = await lastValueFrom(this.client.send('change-password', { token: accessToken, newPassword: password }));
            if (!result) {
                throw new RpcException('Password not changed');
            }
            const response = new BaseResponse(result, true, result.message);
            res.status(HttpStatus.OK).json(response.toResponseEntity());
        } catch (error) {
            const response = new BaseResponse({}, false, error.message);
            res.status(HttpStatus.BAD_REQUEST).json(response.toResponseEntity());
        }
    }
}