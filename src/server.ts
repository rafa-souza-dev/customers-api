import fastify from "fastify";
import { env } from "./env";
import { customersRoutes } from "./routes/customers";

const app = fastify()

app.register(customersRoutes, {
    prefix: '/customers'
})

app.listen({
    port: env.PORT
}).then(() => {
    console.log("HTTP Server running...")
})
