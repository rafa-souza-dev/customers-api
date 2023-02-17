import 'dotenv/config'
import { envSchema } from '../validation/env-schemas'

export const env = envSchema.parse(process.env)
