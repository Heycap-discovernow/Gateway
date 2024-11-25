import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class ForgotPasswordController {
    private readonly client;
    constructor(client: ClientProxy);
    forgotPassword(email: string, res: Response): Promise<void>;
}
