import { Controller, Post, Body, Inject, HttpStatus, Res } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";

import { lastValueFrom } from "rxjs";
import { Response } from "express";

@Controller('/contacts')
export class VerifyNumberContactController {
    constructor(
        @Inject('USERS_TRANSPORT') private readonly client: ClientProxy
    ){}

    @Post('/verify-number-contact')
    public async verifyNumber(@Body('code') code: string, @Body('contact_uuid') contact_uuid: string, @Res() res: Response) {
        try {
            const result = await lastValueFrom(this.client.send('verify-number', { code, contact_uuid }));
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            if (error instanceof RpcException) {
                res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
            } else {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
            }
        }
    }
}