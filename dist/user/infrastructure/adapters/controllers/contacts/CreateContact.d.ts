import { ClientProxy } from "@nestjs/microservices";
import { ContactRequestDTO } from "src/user/application/dtos/request/ContactRequestDTO";
import { Response } from "express";
export declare class CreateContactController {
    private readonly client;
    private circuitBreaker;
    constructor(client: ClientProxy);
    createContact(contact: ContactRequestDTO, res: Response): Promise<void>;
}
