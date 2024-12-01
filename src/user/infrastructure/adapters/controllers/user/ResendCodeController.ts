import { Controller, Post, Res, HttpStatus, Inject, Body } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";

import { Response } from "express";
import { lastValueFrom } from "rxjs";

import { BaseResponse } from "src/user/application/dtos/response/BaseResponse";

@Controller("/users")
export class ResendCodeController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ) { }

    @Post("/verifynumber")
    public async resendCode(
        @Body("email") email: string,
        @Res() res: Response
    ) {
        try {
            const result = await lastValueFrom(this.client.send('resend-code', email));
            if (!result) {
                throw new RpcException('Code not be able to resend');
            }
            const response = new BaseResponse(result, true, result.message);
            res.status(HttpStatus.OK).json(response.toResponseEntity());
        } catch (error) {
            const response = new BaseResponse({}, false, error.message);
            res.status(HttpStatus.BAD_REQUEST).json(response.toResponseEntity());
        }
    }
}