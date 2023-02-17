import { z } from 'zod'
import { validateCPF } from '../utils/cpf'
import { validateBirthDate } from '../utils/date'

export const createCustomerBodySchema = z.object({
    cpf: z.string().refine(validateCPF, { message: 'The CPF entered is invalid.' }),
    name: z.string().min(2),
    birth_date: z.string().refine(validateBirthDate, { message: 'The date must have year, month and day mandatory' })
})
