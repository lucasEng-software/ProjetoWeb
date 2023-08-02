import { UsersRespository } from './../../repositories/Implementations/UsersRepository';
import { GetUserByIdCase } from './GetUserByIdCase';
import { GetUserByIdController } from './GetUserByIdController';
const userRepository = new UsersRespository();

const getUserByIdCase = new GetUserByIdCase(
    userRepository,
)

const getUserByIdController = new GetUserByIdController(
    getUserByIdCase,
)

export {getUserByIdController, getUserByIdCase}