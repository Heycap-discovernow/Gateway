import { Controller, Get, Inject, Param, HttpStatus, Res } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";

import { lastValueFrom } from "rxjs";

@Controller('/contacts')
export class GetOrderController {
    constructor(
        @Inject("PAYMENT_TRANSPORT") private readonly client: ClientProxy,
    ){}

    @Get("/get-order")
    public async getProductOrder(@Param() order_uuid: string, @Res() res: Response) {
        try {
            const result = await lastValueFrom(this.client.send('create-order', order_uuid));
            res.status(HttpStatus.OK).json({ message: result });
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).json({ message: error })
        }
    }
}