import { Controller, Post, Res, Body, HttpStatus, Inject } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";

import { Response } from "express";
import { lastValueFrom } from "rxjs";

import { UserRequest } from "src/user/application/dtos/request/UserRequest";
import { BaseResponse } from "src/user/application/dtos/response/BaseResponse";

@Controller("/users")
export class CreateUserController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ) { }

    @Post("/")
    public async createUser(
        @Body() user: UserRequest,
        @Res() res: Response
    ) {
        try {
            const result = await lastValueFrom(this.client.send('create-user', user));
            if (!result) {
                throw new RpcException('User not created');
            }
            const response = new BaseResponse(result, true, result.message);
            res.status(HttpStatus.OK).json(response.toResponseEntity());
        } catch (error) {
            const response = new BaseResponse({}, false, error.message);
            res.status(HttpStatus.BAD_REQUEST).json(response.toResponseEntity());
        }
    }
}