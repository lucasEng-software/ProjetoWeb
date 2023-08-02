import { UsersRespository } from "../../repositories/Implementations/UsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const userRepository = new UsersRespository();

const deleteUserUseCase = new DeleteUserUseCase(
    userRepository,
)

const deleteUserController = new DeleteUserController (
    deleteUserUseCase,
)

export {deleteUserController, deleteUserUseCase}