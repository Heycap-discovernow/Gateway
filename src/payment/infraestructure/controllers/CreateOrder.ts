import { Controller, Post, Inject, Body, Res, HttpStatus } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";

import { ProductDTO } from "src/payment/application/dtos/ProductDTO";

import { lastValueFrom } from "rxjs";

@Controller("/payments")
export class CreateOrderController {
    constructor(
        @Inject("PAYMENT_TRANSPORT") private readonly client: ClientProxy,
    ){}

    @Post("/create-order")
    public async createContact(@Body() product: ProductDTO , @Res() res: Response) {
        try {
            const result = await lastValueFrom(this.client.send('create-order', product));
            res.status(HttpStatus.OK).json({ message: result });
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).json({ message: error })
        }
    }
}