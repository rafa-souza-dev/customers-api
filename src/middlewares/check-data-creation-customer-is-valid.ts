import { FastifyReply, FastifyRequest } from "fastify";
import { createCustomerBodySchema } from "../validation/http-schemas";

export async function checkDataCreationCustomerIsValid(
    req: FastifyRequest, 
    res: FastifyReply
) {
    const safeParse = createCustomerBodySchema.safeParse(req.body)

    const isInvalidBody = !safeParse.success

    if (isInvalidBody) {
        return res.status(422).send({ errors: safeParse.error.issues })
    }
}
