import { Controller, Post, Res, Body, HttpStatus, Inject, UseGuards } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";

import { Response } from "express";
import { lastValueFrom } from "rxjs";

import { AccessTokenAuthGuard } from "src/user/infrastructure/guards/AccesTokenAuthGuard";
import { AccessToken } from "src/decorators/AccessToken";

import { BaseResponse } from "src/user/application/dtos/response/BaseResponse";

@Controller("/users")
export class MultiFactorAuthenticationController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ) { }

    @UseGuards(AccessTokenAuthGuard)
    @Post("/login/code")
    public async mfaLogin(
        @Body('code') code: string,
        @Body('user_uuid') user_uuid: string,
        @Body('type') type: string,
        @AccessToken() accessToken: string,
        @Res() res: Response
    ) {
        try {
            const result = await lastValueFrom(this.client.send('verify-number-login', { code: code, user_uuid: user_uuid, type: type }));
            if (!result) {
                throw new RpcException('Code not verified');
            }
            const response = new BaseResponse(result, true, result.message);
            res.status(HttpStatus.OK).json(response.toResponseEntity());
        } catch (error) {
            const response = new BaseResponse({}, false, error.message);
            res.status(HttpStatus.BAD_REQUEST).json(response.toResponseEntity());
        }
    }
}