import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('customers', (table) => {
        table.uuid('id').primary()
        table.text('name').notNullable()
        table.text('cpf').notNullable()
        table.date('birth_date').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('customers')
}
