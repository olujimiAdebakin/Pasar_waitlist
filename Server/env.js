import { config } from "dotenv";

config({ path: ".env.development.local" });

export const { DB_URI, PORT, EMAIL_USER, EMAIL_PASS } = process.env;
