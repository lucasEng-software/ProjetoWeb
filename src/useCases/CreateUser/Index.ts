import { UsersRespository } from '../../repositories/Implementations/UsersRepository';
import { MailtrapMailProvider } from './../../providers/Implementations/MailtrapMailProvider';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
const mailtrapMailProvider = new MailtrapMailProvider();
const userRepository = new UsersRespository();

const createUserUseCase = new CreateUserUseCase(
    userRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase,  
)

export { createUserUseCase, createUserController}