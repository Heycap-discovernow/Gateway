import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
import { UpdateUserRequest } from "src/user/application/dtos/request/UpdateUserRequest";
export declare class UpdateUserController {
    private readonly client;
    constructor(client: ClientProxy);
    updateUser(fields: UpdateUserRequest, accessToken: string, res: Response): Promise<void>;
}
