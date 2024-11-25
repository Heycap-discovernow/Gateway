import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class UpdatePasswordController {
    private readonly client;
    constructor(client: ClientProxy);
    updatePassword(password: string, accessToken: string, res: Response): Promise<void>;
}
