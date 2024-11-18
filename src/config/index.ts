import { config } from "dotenv";

config();

export const PORT = Number(process.env.PORT);
export const NATS_SERVER = process.env.NATS_SERVER;
export const API_VERSION = process.env.API_VERSION;