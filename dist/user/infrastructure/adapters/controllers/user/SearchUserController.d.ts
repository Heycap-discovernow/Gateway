import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class SearchUserController {
    private readonly client;
    constructor(client: ClientProxy);
    searchUser(text: string, res: Response): Promise<void>;
}
