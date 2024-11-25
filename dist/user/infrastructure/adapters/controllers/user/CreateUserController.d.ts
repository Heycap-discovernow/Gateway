import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
import { UserRequest } from "src/user/application/dtos/request/UserRequest";
export declare class CreateUserController {
    private readonly client;
    constructor(client: ClientProxy);
    createUser(user: UserRequest, res: Response): Promise<void>;
}
