import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class LoginController {
    private readonly client;
    constructor(client: ClientProxy);
    login(email: string, password: string, res: Response): Promise<void>;
}
