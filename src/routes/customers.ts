import { FastifyInstance } from "fastify";
import { createCustomerController, findAndCountAllCustomersController, findCustomerByCPFController } from "../use-cases";
import { customersPostSwaggerSchema } from '../docs/swagger/customers-post-swagger-schema'
import { customersGetByCPFSwaggerSchema } from "../docs/swagger/customers-get-by-cpf-swagger-schema";
import { customersGetSwaggerSchema } from "../docs/swagger/customers-get-swagger-schema";

export async function customersRoutes(app: FastifyInstance) {
    app.post('/', {
        schema: customersPostSwaggerSchema
    }, async (req, res) => {
        return createCustomerController.handle(req, res)
    })

    app.get('/', {
        schema: customersGetSwaggerSchema
    }, async (req, res) => {
        return findAndCountAllCustomersController.handle(req, res)
    })

    app.get('/:cpf', {
        schema: customersGetByCPFSwaggerSchema
    }, async (req, res) => {
        return findCustomerByCPFController.handle(req, res)
    })
}
