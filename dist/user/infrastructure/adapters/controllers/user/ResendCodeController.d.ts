import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class ResendCodeController {
    private readonly client;
    constructor(client: ClientProxy);
    resendCode(email: string, res: Response): Promise<void>;
}
