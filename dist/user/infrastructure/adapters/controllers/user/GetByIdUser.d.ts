import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class GetUserByIdController {
    private readonly client;
    constructor(client: ClientProxy);
    searchUser(uuid: string, res: Response): Promise<void>;
}
