import { Customer } from "../domain/Customer";

export interface ICustomersRepository {
    save: (customer: Customer) => Promise<void>
    findByCPF: (cpf: string) => Promise<Customer | null>
    findAndCountAll: (page: number, limit: number) => Promise<{
        count: number
        results: Customer[]
    }>
}
