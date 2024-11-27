import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class GetItinerariesController {
    private readonly client;
    constructor(client: ClientProxy);
    GetItineraries(user_uuid: string, res: Response): Promise<void>;
}
