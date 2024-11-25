import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class DeleteUserController {
    private readonly client;
    constructor(client: ClientProxy);
    deleteUser(accessToken: string, res: Response): Promise<void>;
}
