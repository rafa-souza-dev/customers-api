import { knex } from "../database/knex";
import { Customer } from "../domain/Customer";
import { ICustomersRepository } from "./ICustomersRepository";

export class CustomersSqliteRepository implements ICustomersRepository {
    public async save(customer: Customer): Promise<void> {
        await knex('customers').insert({
            id: customer.id,
            cpf: customer.getCPF(),
            name: customer.getName(),
            birth_date: new Date(customer.getBirthDate())
        })
    }

    public async findByCPF(cpf: string): Promise<Customer | null> {
        const findCustomer = await knex('customers').select('*')
            .where('cpf', cpf).first()

        

        if (findCustomer) {
            const date = new Date(findCustomer.birth_date)

            return new Customer(
                findCustomer.name,
                findCustomer.cpf,
                date,
                findCustomer.id
            )
        }

        return null
    }

    public async findAll(): Promise<Customer[]> {
        const customers = await knex('customers').select('*')

        return customers.map(customer => new Customer(
            customer.name,
            customer.cpf,
            new Date(customer.birth_date),
            customer.id
        ))
    }
}
