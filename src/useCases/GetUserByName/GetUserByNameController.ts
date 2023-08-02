import { Request, Response } from "express";
import { GetUserByNameCase } from "./GetUserByNameCase";

export class GetUserByNameController {

    constructor (
        private getUserByNameCase: GetUserByNameCase,
    ){}
        
    async handle(request:Request, response: Response): Promise <Response>{
        
        const {nome} = request.params;

        try {
            const retorno  = await this.getUserByNameCase.execute(nome);
            if(retorno.status === 1){
                return response.status(201).json(retorno);
            }else if(retorno.status ===2){
                return response.status(404).json(retorno);
            }
        }catch (err){
            return response.status(400).json({
                message:err.message || 'Erro inesperado'
            })
        }
        
    }
}