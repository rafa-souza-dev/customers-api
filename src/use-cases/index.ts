import { CreateCustomerController } from "../controllers/CreateCustomerController";
import { FindAndCountAllCustomersController } from "../controllers/FindAndCountAllCustomersController";
import { FindCustomerByCPFController } from "../controllers/FindCustomerByCPFController";
import { CustomersSqliteRepository } from "../repositories/CustomersSqliteRepository";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";
import { FindAndCountAllCustomersUseCase } from "./FindAndCountAllCustomersUseCase";
import { FindByCPFCustomerUseCase } from "./FindByCPFCustomerUseCase";

const customersSqliteRepository = new CustomersSqliteRepository()

const createCustomerUseCase = new CreateCustomerUseCase(
    customersSqliteRepository
)
const findCustomerByCPFUseCase = new FindByCPFCustomerUseCase(
    customersSqliteRepository
)

const findAndCountAllCustomersUseCase = new FindAndCountAllCustomersUseCase(
    customersSqliteRepository
)

export const createCustomerController = new CreateCustomerController(
    createCustomerUseCase
) 

export const findCustomerByCPFController = new FindCustomerByCPFController(
    findCustomerByCPFUseCase
)

export const findAndCountAllCustomersController = new FindAndCountAllCustomersController(
    findAndCountAllCustomersUseCase
)
