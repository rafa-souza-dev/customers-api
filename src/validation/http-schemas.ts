import { z } from 'zod'
import { validateCPF } from '../utils/cpf'
import { validateBirthDate } from '../utils/date'
import { validateIntNumberQueryParam } from '../utils/validate'

export const createCustomerBodySchema = z.object({
    cpf: z.string().refine(validateCPF, { message: 'The CPF entered is invalid.' }),
    name: z.string().min(2),
    birth_date: z.string().refine(validateBirthDate, { message: 'The date must have year, month and day mandatory' })
})

export const findCustomerByCPFParamsSchema = z.object({
    cpf: z.string().refine(validateCPF, { message: 'The CPF entered is invalid.' }),
})

export const findAndCountAllCustomersQueryParamsSchema = z.object({
    page: z.string().refine(validateIntNumberQueryParam, { message: 'Enter only whole and positive numbers' }).transform(page => Number(page)).optional(),
    limit: z.string().refine(validateIntNumberQueryParam, { message: 'Enter only whole and positive numbers' }).transform(limit => Number(limit)).optional(),
})
