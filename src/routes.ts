import { Router } from "express"
import { createUserControler } from "./useCases/CreateUser/Index";


const router = Router()

router.post('/usuario', (request, response) =>{
    return createUserControler.handle(request, response)
});

export{ router }