import { Customer } from "../domain/Customer";
import { ICustomersRepository } from "../repositories/ICustomersRepository";
import { IFindByCPFCustomerDTO } from "./IFindByCPFCustomerDTO";

export class FindByCPFCustomerUseCase {
    private customerRepository: ICustomersRepository

    constructor(customerRepository: ICustomersRepository) {
        this.customerRepository = customerRepository
    }

    public async handle({ cpf }: IFindByCPFCustomerDTO): Promise<Customer | null> {
        const customer = await this.customerRepository.findByCPF(cpf)

        return customer
    }
}
