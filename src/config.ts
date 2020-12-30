import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const PORT = process.env.PORT ?? "";
export const ACCESS_TOKEN = process.env.ACCESS_TOKEN ?? "";
export const CONFIRMATION = process.env.CONFIRMATION ?? "";
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

console.log({ PORT, ACCESS_TOKEN, CONFIRMATION, IS_PRODUCTION });
