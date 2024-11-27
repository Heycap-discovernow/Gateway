import { ClientProxy } from "@nestjs/microservices";
import { Response } from "express";
import { CreateItineraryDTO } from "src/itineraries/application/dtos/CreateItineraryDTO";
export declare class CreateItinieraryController {
    private readonly client;
    constructor(client: ClientProxy);
    createItinerary(itinerary: CreateItineraryDTO, res: Response): Promise<void>;
}
