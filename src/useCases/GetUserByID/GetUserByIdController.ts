import { Request, Response } from "express";
import { GetUserByIdCase } from "./GetUserByIdCase";

export class GetUserByIdController{

    constructor(
        private getUserByIdCase: GetUserByIdCase,
    ){}

    async handle(request: Request, response: Response): Promise <Response>{
        const {id} = request.params;

        try {
            const retorno = await this.getUserByIdCase.execute(id);
            if(retorno.status === 1){
                return response.status(201).json(retorno);
            } else if (retorno.status === 2){
                return response.status(404).json(retorno);
            }
        } catch (err) {
            return response.status(400).json({
                message:err.message || 'Erro inesperado'
            })
        }
    }
    

}