import { FastifyReply, FastifyRequest } from "fastify";
import { FindByCPFCustomerUseCase } from "../use-cases/FindByCPFCustomerUseCase";
import { findCustomerByCPFParamsSchema } from "../validation/http-schemas";

export class FindCustomerByCPFController {
    private findCustomerByCPFUseCase: FindByCPFCustomerUseCase

    constructor(findCustomerByCPFUseCase: FindByCPFCustomerUseCase) {
        this.findCustomerByCPFUseCase = findCustomerByCPFUseCase
    }

    async handle(req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> {
        const { cpf } = findCustomerByCPFParamsSchema.parse(req.params)

        const customer = await this.findCustomerByCPFUseCase.handle({ cpf })

        if (customer) return res.status(200).send({ customer })

        return res.status(404).send({
            message: 'Customer not found.'
        })
    }
}
