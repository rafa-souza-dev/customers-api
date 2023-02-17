import { FastifyInstance } from "fastify";
import { createCustomerController, findAndCountAllCustomersController, findCustomerByCPFController } from "../use-cases";

export async function customersRoutes(app: FastifyInstance) {
    app.post('/', async (req, res) => {
        return createCustomerController.handle(req, res)
    })

    app.get('/', async (req, res) => {
        return findAndCountAllCustomersController.handle(req, res)
    })

    app.get('/:cpf', async (req, res) => {
        return findCustomerByCPFController.handle(req, res)
    })
}
