import { Controller, Post, Inject, Body, Res, HttpStatus } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { ContactRequestDTO } from "src/user/application/dtos/ContactRequestDTO";

import { lastValueFrom } from "rxjs";
import { Response } from "express";

@Controller("/contacts")
export class CreateContactController {
    constructor(
        @Inject("USERS_TRANSPORT") private readonly client: ClientProxy,
    ){}

    @Post("/create-contact")
    public async createContact(@Body() contact: ContactRequestDTO, @Res() res: Response) {
        try {
            const result = await lastValueFrom(this.client.send('create-contact', contact));
            res.status(HttpStatus.OK).json({ message: result });
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).json({ message: error })
        }
    }
}