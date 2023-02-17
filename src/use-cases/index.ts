import { CreateCustomerController } from "../controllers/CreateCustomerController";
import { FindAllCustomersController } from "../controllers/FindAllCustomersController";
import { FindCustomerByCPFController } from "../controllers/FindCustomerByCPFController";
import { CustomersSqliteRepository } from "../repositories/CustomersSqliteRepository";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";
import { FindAllCustomersUseCase } from "./FindAllCustomersUseCase";
import { FindByCPFCustomerUseCase } from "./FindByCPFCustomerUseCase";

const customersSqliteRepository = new CustomersSqliteRepository()

const createCustomerUseCase = new CreateCustomerUseCase(
    customersSqliteRepository
)
const findCustomerByCPFUseCase = new FindByCPFCustomerUseCase(
    customersSqliteRepository
)

const findAllCustomersUseCase = new FindAllCustomersUseCase(
    customersSqliteRepository
)

export const createCustomerController = new CreateCustomerController(
    createCustomerUseCase
) 

export const findCustomerByCPFController = new FindCustomerByCPFController(
    findCustomerByCPFUseCase
)

export const findAllCustomersController = new FindAllCustomersController(
    findAllCustomersUseCase
)
