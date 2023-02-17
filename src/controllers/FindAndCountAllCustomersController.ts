import { FastifyReply, FastifyRequest } from "fastify";
import { FindAndCountAllCustomersUseCase } from "../use-cases/FindAndCountAllCustomersUseCase";
import { findAndCountAllCustomersQueryParamsSchema } from "../validation/http-schemas";

export class FindAndCountAllCustomersController {
    private findAndCountAllCustomersUseCase: FindAndCountAllCustomersUseCase

    constructor(findAndCountAllCustomersUseCase: FindAndCountAllCustomersUseCase) {
        this.findAndCountAllCustomersUseCase = findAndCountAllCustomersUseCase
    }

    async handle(req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> {
        const safeParse = findAndCountAllCustomersQueryParamsSchema.safeParse(req.query)

        const isInvalidBody = !safeParse.success

        if (isInvalidBody) {
            return res.status(422).send(safeParse.error.issues)
        }

        const { page=1, limit=10 } = findAndCountAllCustomersQueryParamsSchema.parse(req.query)

        const { count, results } = await this.findAndCountAllCustomersUseCase.handle(page, limit)

        const resultsCount = page * limit
        const customersBaseHasNextPage = resultsCount < count

        const data = {
            count,
            page,
            limit,
            previous: page > 1 ?
            `http://localhost:8000/customers?page=${page - 1}&limit=${limit}` :
            null,
            next: customersBaseHasNextPage ?
                `http://localhost:8000/customers?page=${page + 1}&limit=${limit}` :
                null,
            results
        }

        return res.status(200).send(data)
    }
}
