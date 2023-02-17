import { config } from 'dotenv'
import { envSchema } from '../validation/env-schemas'

if (process.env.NODE_ENV === 'test') {
    config({ path: '.env.test' })
} else {
    config()
}

export const env = envSchema.parse(process.env)
