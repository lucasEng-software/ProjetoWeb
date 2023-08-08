import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
    constructor(
        private deleteUserUseCase:DeleteUserUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise <Response>{
        const {id} = request.params;
        try {

            const retorno = await this.deleteUserUseCase.execute(id);
            if(retorno.status === 1){
                return response.status(200).json(retorno);
            } else if (retorno.status === 4){
                return response.status(404).json(retorno);
            }
            
        } catch (err) {
            return response.status(400).json({
                message:err.message || 'Erro inesperado'
            }  
            )
        }
    }
}