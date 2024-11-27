import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
import { GeneratePlanDTO } from "src/itineraries/application/dtos/GeneratePlanDTO";
export declare class GeneratePlanController {
    private readonly client;
    constructor(client: ClientProxy);
    generatePlan(Plan: GeneratePlanDTO, res: Response): Promise<void>;
}
