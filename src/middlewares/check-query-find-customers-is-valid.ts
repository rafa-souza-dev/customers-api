import { FastifyReply, FastifyRequest } from "fastify";
import { findAndCountAllCustomersQueryParamsSchema } from "../validation/http-schemas";

export async function checkQueryFindCustomersIsValid(
    req: FastifyRequest, 
    res: FastifyReply
) {
    const safeParse = findAndCountAllCustomersQueryParamsSchema.safeParse(req.query)

    const isInvalidBody = !safeParse.success

    if (isInvalidBody) {
        return res.status(422).send({ errors: safeParse.error.issues })
    }
}
