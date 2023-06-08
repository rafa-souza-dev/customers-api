import { z } from "zod";

export const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    DATABASE_URL: z.string().default("app.db"),
    DB_HOST: z.string().default("localhost"),
    DB_PORT: z.coerce.number().default(3306),
    DB_USER: z.string().default("root"),
    DB_PASSWORD: z.string().default("root"),
    DB_NAME: z.string().default("myapp_test"),
    HOST: z.string().default('localhost'),
    PORT: z.coerce.number().default(8000)
})
