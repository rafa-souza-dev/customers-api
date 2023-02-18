import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerUseCase } from "../use-cases/CreateCustomerUseCase";
import { createCustomerBodySchema } from "../validation/http-schemas";

export class CreateCustomerController {
    private createCustomerUseCase: CreateCustomerUseCase

    constructor(createCustomerUseCase: CreateCustomerUseCase) {
        this.createCustomerUseCase = createCustomerUseCase
    }

    async handle(req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> {
        const safeParse = createCustomerBodySchema.safeParse(req.body)

        const isInvalidBody = !safeParse.success

        if (isInvalidBody) {
            return res.status(422).send({ errors: safeParse.error.issues })
        }

        const { cpf, birth_date, name } = createCustomerBodySchema.parse(req.body)

        try {
            await this.createCustomerUseCase.execute({
                cpf,
                name,
                birth_date: birth_date
            })

            return res.status(201).send()
        } catch {
            return res.status(400).send({
                message: 'A customer with this CPF already exists.' 
            })
        }
    }
}
