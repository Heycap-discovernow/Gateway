import { Controller, Patch, Res, Body, HttpStatus, Inject, UseGuards } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";

import { Response } from "express";
import { lastValueFrom } from "rxjs";

import { AccessToken } from "src/decorators/AccessToken";
import { AccessTokenAuthGuard } from "src/user/infrastructure/guards/AccesTokenAuthGuard";

import { BaseResponse } from "src/user/application/dtos/response/BaseResponse";

@Controller("/users")
export class UpdatePasswordController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ) { }
    
    @UseGuards(AccessTokenAuthGuard)
    @Patch("/password")
    public async updatePassword(
        @Body("password") password: string,
        @AccessToken() accessToken: string,
        @Res() res: Response
    ) {
        try {
            const result = await lastValueFrom(this.client.send('update-password', { token: accessToken, newPassword: password }));
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