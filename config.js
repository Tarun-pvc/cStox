import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 6969
export const DB_URL = process.env.DB_URL || ""