import { Controller, Post, Res, Body, HttpStatus, Inject } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";

import { Response } from "express";
import { lastValueFrom } from "rxjs";

import { BaseResponse } from "src/user/application/dtos/response/BaseResponse";

@Controller("/users")
export class ForgotPasswordController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ) { }

    @Post("/forgot-password")
    public async forgotPassword(
        @Body("email") email: string,
        @Res() res: Response
    ) {
        try {
            const result = await lastValueFrom(this.client.send('email-to-forgot-password', email));
            if (!result) {
                throw new RpcException('User not found');
            }
            const response = new BaseResponse(result, true, result.message);
            res.status(HttpStatus.OK).json(response.toResponseEntity());
        } catch (error) {
            const response = new BaseResponse({}, false, error.message);
            res.status(HttpStatus.BAD_REQUEST).json(response.toResponseEntity());
        }
    }
}