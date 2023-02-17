import { Customer } from "../domain/Customer";
import { ICustomersRepository } from "../repositories/ICustomersRepository";

export class FindAllCustomersUseCase {
    private customerRepository: ICustomersRepository

    constructor(customerRepository: ICustomersRepository) {
        this.customerRepository = customerRepository
    }

    public async handle(): Promise<Customer[]> {
        const customers = await this.customerRepository.findAll()

        return customers
    }
}
