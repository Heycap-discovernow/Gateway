type Place = {
    name: string;
    lat: string;
    lon: string;
    cost: string;
};
export declare class GeneratePlanDTO {
    hours: string;
    quote: string;
    places: Place[];
    constructor(hours: string, quote: string, places: Place[]);
}
export {};
