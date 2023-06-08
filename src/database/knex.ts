import { knex as setupKnex, Knex } from 'knex'
import { env } from '../env'

export const config: Knex.Config = {
  client: env.NODE_ENV === 'test' ? 'sqlite' : 'mysql',
  connection: env.NODE_ENV === 'test' ? {
    filename: env.DATABASE_URL,
  } : {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
}

export const knex = setupKnex(config)
