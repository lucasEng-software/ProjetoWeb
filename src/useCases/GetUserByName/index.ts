import { UsersRespository } from "../../repositories/Implementations/UsersRepository"
import { GetUserByNameCase } from "./GetUserByNameCase";
import { GetUserByNameController } from "./GetUserByNameController";

const userRepository = new UsersRespository;

const getUserByNameCase = new GetUserByNameCase (
    userRepository,
)

const getUserByNameController = new GetUserByNameController (
    getUserByNameCase,
)


export { getUserByNameController, getUserByNameCase }