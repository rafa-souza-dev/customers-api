import { FastifyReply, FastifyRequest } from "fastify";
import { FindAndCountAllCustomersUseCase } from "../use-cases/FindAndCountAllCustomersUseCase";

export class FindAndCountAllCustomersController {
    private findAndCountAllCustomersUseCase: FindAndCountAllCustomersUseCase

    constructor(findAndCountAllCustomersUseCase: FindAndCountAllCustomersUseCase) {
        this.findAndCountAllCustomersUseCase = findAndCountAllCustomersUseCase
    }

    async handle(req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> {
        const { count, results } = await this.findAndCountAllCustomersUseCase.handle()

        return res.status(200).send({ count, results })
    }
}
