import { Controller, Post, Res, Body, Inject, HttpStatus } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";

import { Response } from "express";
import { lastValueFrom } from "rxjs";

import { BaseResponse } from "src/user/application/dtos/response/BaseResponse";

@Controller("/users")
export class LoginController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ) { }

    @Post("/login")
    public async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res() res: Response
    ) {
        try {
            const result = await lastValueFrom(this.client.send('user-login', { email, password }));
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