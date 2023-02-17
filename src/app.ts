import fastify from "fastify";
import { env } from "./env";
import { customersRoutes } from "./routes/customers";

export const app = fastify()

app.register(customersRoutes, {
    prefix: '/customers'
})
