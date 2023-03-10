import { FastifyReply, FastifyRequest } from "fastify";
import { SERVER_HOST } from "../server";
import { FindAndCountAllCustomersUseCase } from "../use-cases/FindAndCountAllCustomersUseCase";
import { findAndCountAllCustomersQueryParamsSchema } from "../validation/http-schemas";

export class FindAndCountAllCustomersController {
    private findAndCountAllCustomersUseCase: FindAndCountAllCustomersUseCase

    constructor(findAndCountAllCustomersUseCase: FindAndCountAllCustomersUseCase) {
        this.findAndCountAllCustomersUseCase = findAndCountAllCustomersUseCase
    }

    async handle(req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> {
        const { page=1, limit=10 } = findAndCountAllCustomersQueryParamsSchema.parse(req.query)

        const { count, results } = await this.findAndCountAllCustomersUseCase.handle(page, limit)
        
        const previous = this.previousPageUrlGenerator(page, limit)
        const next = this.nextPageUrlGenerator(page, limit, count)

        const data = {
            count,
            page,
            limit,
            previous,
            next,
            results
        }

        return res.status(200).send(data)
    }

    private previousPageUrlGenerator(page: number, limit: number) {
        const customersBaseHasPreviousPage = page > 1

        return customersBaseHasPreviousPage ?
            `${SERVER_HOST}/customers?page=${page - 1}&limit=${limit}` :
            null
    }

    private nextPageUrlGenerator(page: number, limit: number, count: number) {
        const resultsCount = page * limit
        const customersBaseHasNextPage = resultsCount < count

        return customersBaseHasNextPage ?
            `${SERVER_HOST}/customers?page=${page + 1}&limit=${limit}` :
            null
    }
}
