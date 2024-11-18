// import { UserService } from "src/users/application/services/UserService";
import { UserRequest } from "src/user/application/dtos/UserRequest";
// import { BaseResponse } from "src/users/application/dtos/BaseResponse";

import { Controller, Post, Res, Body, HttpStatus, Inject } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";
import { Response } from "express";
import { lastValueFrom } from "rxjs";

@Controller(`/users`)
export class CreateUserController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ) { }

    @Post("/create-user")
    public async createUser(@Body() user: UserRequest, @Res() res: Response) {
        try {
            const result = await lastValueFrom(this.client.send('create-user', user));
            if(!result) {
                throw new RpcException('User not created');
            }
            res.status(HttpStatus.OK).json({ message: 'User created' });
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).json({ message: error })
        } 
    }
}