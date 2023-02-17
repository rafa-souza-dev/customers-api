import fastify from "fastify";
import { env } from "./env";
import { customersRoutes } from "./routes/customers";

const envToLogger = {
    development: true,
    production: true,
    test: false,
}

export const app = fastify({
    logger: envToLogger[env.NODE_ENV] ?? true
})

app.register(customersRoutes, {
    prefix: '/customers'
})
