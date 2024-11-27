type Route = {
    origin_name: string;
    origin_coord: [string, string];
    time_visit: Number;
    cost_visit: Number;
    target_name: string;
    target_coord: [string, string];
    transport: string;
};
export declare class CreateItineraryDTO {
    user_uuid: string;
    route: Route[];
    polyline: string;
    total_cost: Number;
    total_time: string;
    constructor(user_uuid: string, route: Route[], polyline: string, total_cost: Number, total_time: string);
}
export {};
