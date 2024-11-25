import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
import { ProductDTO } from "src/payment/application/dtos/ProductDTO";
export declare class CreateOrderController {
    private readonly client;
    constructor(client: ClientProxy);
    createContact(product: ProductDTO, res: Response): Promise<void>;
}
