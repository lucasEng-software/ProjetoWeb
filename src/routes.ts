import { Router, request } from "express"
import { createUserController } from "./useCases/CreateUser/Index";
import { getUsersController } from "./useCases/GetUsers/Index";
import {getUserByNameController} from "./useCases/GetUserByName/index";
import {deleteUserController} from "./useCases/DeleteUser/Index"
import {getUserByIdController} from "./useCases/GetUserByID/Index"
const router = Router()

router.post('/usuarios', (request, response) =>{
    return createUserController.handle(request, response)
});

router.get('/usuarios/nome/:nome', (request, response) =>{
    return getUserByNameController.handle(request, response)
});

router.get('/usuarios/:id', (request, response) =>{
    return getUserByIdController.handle(request, response)
});



router.get('/usuarios', (request, response) =>{
    return getUsersController.handle(request, response)
});

router.delete('/usuarios/:id', (request, response) =>{
    return deleteUserController.handle(request, response)
})

export{ router }