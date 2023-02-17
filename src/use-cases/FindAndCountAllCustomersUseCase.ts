import { Customer } from "../domain/Customer";
import { ICustomersRepository } from "../repositories/ICustomersRepository";

export class FindAndCountAllCustomersUseCase {
    private customerRepository: ICustomersRepository

    constructor(customerRepository: ICustomersRepository) {
        this.customerRepository = customerRepository
    }

    public async handle(page: number = 1, limit: number = 10): Promise<{
        count: number
        results: Customer[]
    }> {
        const { count, results } = await this.customerRepository.findAndCountAll(page, limit)

        return {
            count, 
            results
        }
    }
}
