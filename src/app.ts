import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
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

app.register(fastifySwagger)

app.register(fastifySwaggerUi)

app.register(customersRoutes, {
    prefix: '/customers'
})
