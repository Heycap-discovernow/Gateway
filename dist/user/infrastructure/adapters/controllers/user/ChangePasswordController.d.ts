import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class ChangePasswordController {
    private readonly client;
    constructor(client: ClientProxy);
    changePassword(password: string, accessToken: string, res: Response): Promise<void>;
}
