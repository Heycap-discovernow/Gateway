import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class MultiFactorAuthenticationController {
    private readonly client;
    constructor(client: ClientProxy);
    mfaLogin(code: string, user_uuid: string, type: string, accessToken: string, res: Response): Promise<void>;
}
