import {Request, Response} from "express";
import {GetUsersCase} from "./GetUsersCase";
import { Usuario } from "../../entities/Usuario";

export class GetUsersController {

    constructor (
        private getUsersCase: GetUsersCase,
    ){}
       
    
    async handle ( request: Request, response: Response): Promise <Response>{


        try{
            const lista = await this.getUsersCase.execute();
            return response.status(201).json(lista); // alterar retorno para lista
        } catch (err){
            return response.status(400).json({            
                message:err.message  || 'Erro Inesperado'
            })
        }   
    }

}