import * as dotenv from "dotenv";
import { z } from "zod";
dotenv.config();

const envSchema = z.object({
    PORT: z.union([
        z.undefined(),
        z
            .string()
            .regex(/^[0-9]+$/)
            .transform((value) => parseInt(value)),
    ]),
    MONGODB_URI: z.string()
});

const env = envSchema.parse({
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI
});

export default env;