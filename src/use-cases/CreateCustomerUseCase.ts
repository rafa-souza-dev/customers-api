import { Customer } from "../domain/Customer";
import { ICustomersRepository } from "../repositories/ICustomersRepository";
import { ICreateCustomerDTO } from "./ICreateCustomerDTO";

export class CreateCustomerUseCase {
    private customerRepository: ICustomersRepository

    constructor(customerRepository: ICustomersRepository) {
        this.customerRepository = customerRepository
    }

    public async execute({ cpf, name, birth_date }: ICreateCustomerDTO) {
        const customerAlreadyExists = await this.customerRepository.findByCPF(cpf)
        
        if (customerAlreadyExists) {
            throw new Error('A customer with this CPF already exists.')
        }

        const customer = new Customer(name, cpf, new Date(birth_date))

        await this.customerRepository.save(customer)
    }
}
