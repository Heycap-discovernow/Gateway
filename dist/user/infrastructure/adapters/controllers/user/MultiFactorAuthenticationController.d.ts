import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class MultiFactorAuthenticationController {
    private readonly client;
    constructor(client: ClientProxy);
    mfaLogin(code: string, accessToken: string, res: Response): Promise<void>;
}
