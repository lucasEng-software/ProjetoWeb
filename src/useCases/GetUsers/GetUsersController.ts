import {Request, Response} from "express";
import {GetUsersCase} from "./GetUsersCase";
import { Usuario } from "../../entities/Usuario";

export class GetUsersController {

    constructor (
        private getUsersCase: GetUsersCase,
    ){}
       
    
    async handle ( request: Request, response: Response): Promise <Response>{


        try{
            const retorno = await this.getUsersCase.execute();
            if(retorno.status === 1){
                return response.status(200).json(retorno); 
            }else if(retorno.status === 4){
                return response.status(404).json(retorno);
            }
        } catch (err){
            return response.status(400).json({            
                message:err.message  || 'Erro Inesperado'
            })
        }   
    }

}