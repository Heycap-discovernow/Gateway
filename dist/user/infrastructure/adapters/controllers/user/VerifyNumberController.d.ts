import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class VerifyNumberController {
    private readonly client;
    constructor(client: ClientProxy);
    verifyNumber(code: string, accessToken: string, res: Response): Promise<void>;
}
