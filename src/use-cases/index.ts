import { CreateCustomerController } from "../controllers/CreateCustomerController";
import { FindCustomerByCPFController } from "../controllers/FindCustomerByCPFController";
import { CustomersSqliteRepository } from "../repositories/CustomersSqliteRepository";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";
import { FindByCPFCustomerUseCase } from "./FindByCPFCustomerUseCase";

const customersSqliteRepository = new CustomersSqliteRepository()

const createCustomerUseCase = new CreateCustomerUseCase(
    customersSqliteRepository
)
const findCustomerByCPFUseCase = new FindByCPFCustomerUseCase(
    customersSqliteRepository
)

export const createCustomerController = new CreateCustomerController(
    createCustomerUseCase
) 

export const findCustomerByCPFController = new FindCustomerByCPFController(
    findCustomerByCPFUseCase
)
