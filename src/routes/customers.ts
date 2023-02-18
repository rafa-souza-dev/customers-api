import { FastifyInstance } from "fastify";
import { createCustomerController, findAndCountAllCustomersController, findCustomerByCPFController } from "../use-cases";
import { customersPostSwaggerSchema } from '../docs/swagger/customers-post-swagger-schema'
import { customersGetByCPFSwaggerSchema } from "../docs/swagger/customers-get-by-cpf-swagger-schema";

export async function customersRoutes(app: FastifyInstance) {
    app.post('/', customersPostSwaggerSchema, async (req, res) => {
        return createCustomerController.handle(req, res)
    })

    app.get('/', customersGetByCPFSwaggerSchema, async (req, res) => {
        return findAndCountAllCustomersController.handle(req, res)
    })

    app.get('/:cpf', async (req, res) => {
        return findCustomerByCPFController.handle(req, res)
    })
}
