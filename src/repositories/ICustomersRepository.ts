import { Customer } from "../domain/Customer";

export interface ICustomersRepository {
    save: (customer: Customer) => Promise<void>
    findByCPF: (cpf: string) => Promise<Customer | null>
    findAll: () => Promise<Customer[]>
}
