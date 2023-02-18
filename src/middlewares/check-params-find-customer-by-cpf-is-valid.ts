import { FastifyReply, FastifyRequest } from "fastify";
import { findCustomerByCPFParamsSchema } from "../validation/http-schemas";

export async function checkParamsFindCustomerByCPFIsValid(
    req: FastifyRequest, 
    res: FastifyReply
) {
    const safeParse = findCustomerByCPFParamsSchema.safeParse(req.params)

    const isInvalidQueryParams = !safeParse.success

    if (isInvalidQueryParams) {
        return res.status(422).send(safeParse.error.issues)
    }
}
