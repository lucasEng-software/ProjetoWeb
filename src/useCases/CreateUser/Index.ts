import { UsersRespository } from '../../repositories/Implementations/UsersRepository';
import { MailtrapMailProvider } from './../../providers/Implementations/MailtrapMailProvider';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
const mailtrapMailProvider = new MailtrapMailProvider();
const userRespository = new UsersRespository();

const createUserUseCase = new CreateUserUseCase(
    userRespository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase,  
)

export { createUserUseCase, createUserController}