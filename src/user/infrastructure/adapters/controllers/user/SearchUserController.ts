import { Controller, Get, Query, Res, HttpStatus, Inject, UseGuards } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";

import { Response } from "express";
import { lastValueFrom } from "rxjs";

import { AccessTokenAuthGuard } from "src/user/infrastructure/guards/AccesTokenAuthGuard";

import { BaseResponse } from "src/user/application/dtos/response/BaseResponse";

@Controller("/users")
export class SearchUserController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ) { }

    @UseGuards(AccessTokenAuthGuard)
    @Get("/search")
    public async searchUser(
        @Query('text') text: string,
        @Res() res: Response
    ) {
        try {
            const result = await lastValueFrom(this.client.send('search-user', text));
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