import fastify from "fastify";
import { customersRoutes } from "./routes/customers";

const app = fastify()

app.register(customersRoutes, {
    prefix: '/customers'
})

app.listen({
    port: 8000
}).then(() => {
    console.log("HTTP Server running...")
})
