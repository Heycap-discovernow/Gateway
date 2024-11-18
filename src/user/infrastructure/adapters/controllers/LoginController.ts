import { Controller, Post, Res, Body, Inject, HttpStatus } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";
import { Response } from "express";
import { lastValueFrom } from "rxjs";

@Controller("/users")
export class LoginController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ) {}

    @Post("/login")
    public async login(@Body('email') email: string, @Body('password') password: string,  @Res() res: Response) {
        try {
            const result = await lastValueFrom(this.client.send('user-login', { email, password }));
            if(!result) {
                throw new RpcException('User not found');
            }
            res.status(HttpStatus.OK).json(result)
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).json({ message: error })
        }
    }
}