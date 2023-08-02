import { Router } from "express"
import { createUserController } from "./useCases/CreateUser/Index";
import { getUsersController } from "./useCases/GetUsers/Index";
import {getUserByNameController} from "./useCases/GetUserByName";

const router = Router()

router.post('/usuarios', (request, response) =>{
    return createUserController.handle(request, response)
});

router.get('/usuarios/buscaPorNome/:nome', (request, response) =>{
    return getUserByNameController.handle(request, response)
});

router.get('/usuarios', (request, response) =>{
    return getUsersController.handle(request, response)
});



export{ router }