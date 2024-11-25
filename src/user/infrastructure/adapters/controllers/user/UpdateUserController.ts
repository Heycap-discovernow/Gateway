import { Controller, Put, Res, Body, HttpStatus, Inject, UseGuards } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";

import { Response } from "express";
import { lastValueFrom } from "rxjs";

import { AccessToken } from "src/decorators/AccessToken";
import { AccessTokenAuthGuard } from "src/user/infrastructure/guards/AccesTokenAuthGuard";

import { UpdateUserRequest } from "src/user/application/dtos/request/UpdateUserRequest";
import { BaseResponse } from "src/user/application/dtos/response/BaseResponse";

@Controller("/users")
export class UpdateUserController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ) { }

    @UseGuards(AccessTokenAuthGuard)
    @Put("/")
    public async updateUser(
        @Body() fields: UpdateUserRequest,
        @AccessToken() accessToken: string,
        @Res() res: Response
    ) {
        try {
            const result = await lastValueFrom(this.client.send('update-user', { token: accessToken, newFields: fields }));
            if (!result) {
                throw new RpcException('User not updated');
            }
            const response = new BaseResponse(result, true, result.message);
            res.status(HttpStatus.OK).json(response.toResponseEntity());
        } catch (error) {
            const response = new BaseResponse({}, false, error.message);
            res.status(HttpStatus.BAD_REQUEST).json(response.toResponseEntity());
        }
    }
}