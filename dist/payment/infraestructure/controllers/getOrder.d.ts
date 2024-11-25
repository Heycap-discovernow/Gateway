import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
export declare class GetOrderController {
    private readonly client;
    constructor(client: ClientProxy);
    getProductOrder(order_uuid: string, res: Response): Promise<void>;
}
