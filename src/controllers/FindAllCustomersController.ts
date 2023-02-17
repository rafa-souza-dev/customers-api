import { FastifyReply, FastifyRequest } from "fastify";
import { FindAllCustomersUseCase } from "../use-cases/FindAllCustomersUseCase";

export class FindAllCustomersController {
    private findAllCustomersUseCase: FindAllCustomersUseCase

    constructor(findAllCustomersUseCase: FindAllCustomersUseCase) {
        this.findAllCustomersUseCase = findAllCustomersUseCase
    }

    async handle(req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> {
        const customers = await this.findAllCustomersUseCase.handle()

        return res.status(200).send({ customers })
    }
}
