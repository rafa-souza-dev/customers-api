import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { env } from "./env";
import { customersRoutes } from "./routes/customers";

const envToLogger = {
    development: {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      },
    },
    production: true,
    test: false,
  }

export const app = fastify({
    logger: envToLogger[env.NODE_ENV] ?? true
})

app.register(fastifySwagger, {
    swagger: {
        info: {
          title: 'Customers API',
          description: 'Customer api documentation with swagger',
          version: '1.0.0'
        },
        externalDocs: {
          url: 'https://swagger.io',
          description: 'Find more info here'
        },
    }
})

app.register(fastifySwaggerUi)

app.register(customersRoutes, {
    prefix: '/customers'
})
