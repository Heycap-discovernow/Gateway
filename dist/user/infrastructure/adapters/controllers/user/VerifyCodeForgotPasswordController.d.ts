import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class VerifyCodeForgotPasswordController {
    private readonly client;
    constructor(client: ClientProxy);
    verifyCode(code: string, token: string, res: Response): Promise<void>;
}
