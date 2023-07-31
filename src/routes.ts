import { Router } from "express"
import { createUserControler } from "./useCases/CreateUser/Index";
import { getUsersControler } from "./useCases/GetUsers/Index";


const router = Router()

router.post('/usuario', (request, response) =>{
    return createUserControler.handle(request, response)
});


router.get('/usuario', (request, response) =>{
    return getUsersControler.handle(request, response) // Funcionando!! Implementar agora o retorno JSON, e posteriormente o banco de dados e tratamento de excessões
});

export{ router }