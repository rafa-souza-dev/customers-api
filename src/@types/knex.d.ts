import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    customers: {
      id: string
      name: string
      cpf: string
      birth_date: Date
    }
  }
}
