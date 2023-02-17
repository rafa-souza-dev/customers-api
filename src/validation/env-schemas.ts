import { z } from "zod";

export const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    DATABASE_URL: z.string().default("app.db"),
    PORT: z.string().transform(port => Number(port)).default('8000')
})
