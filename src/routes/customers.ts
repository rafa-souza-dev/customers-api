import { FastifyInstance } from "fastify";
import { createCustomerController, findAndCountAllCustomersController, findCustomerByCPFController } from "../use-cases";
import { customersPostSwaggerSchema } from '../docs/swagger/customers-post-swagger-schema'
import { customersGetByCPFSwaggerSchema } from "../docs/swagger/customers-get-by-cpf-swagger-schema";
import { customersGetSwaggerSchema } from "../docs/swagger/customers-get-swagger-schema";
import { checkDataCreationCustomerIsValid } from "../middlewares/check-data-creation-customer-is-valid";
import { checkParamsFindCustomerByCPFIsValid } from "../middlewares/check-params-find-customer-by-cpf-is-valid";

export async function customersRoutes(app: FastifyInstance) {
    app.post('/', {
        schema: customersPostSwaggerSchema,
        preHandler: [checkDataCreationCustomerIsValid]
    }, async (req, res) => {
        return createCustomerController.handle(req, res)
    })

    app.get('/', {
        schema: customersGetSwaggerSchema
    }, async (req, res) => {
        return findAndCountAllCustomersController.handle(req, res)
    })

    app.get('/:cpf', {
        schema: customersGetByCPFSwaggerSchema,
        preHandler: [checkParamsFindCustomerByCPFIsValid]
    }, async (req, res) => {
        return findCustomerByCPFController.handle(req, res)
    })
}
