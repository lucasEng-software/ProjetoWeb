import { Request, Response } from "express";
import {CreateUserUseCase } from "./CreateUserUseCase"
export class CreateUserController{

    constructor(
        private createUserUseCase: CreateUserUseCase,
    ){}

    async handle( request: Request, response: Response): Promise<Response> {
        const { nome, email, password } = request.body;

        try{
            const retorno = await this.createUserUseCase.execute({
            nome,
            email,
            password,  
            })
            if( retorno.status === 1 ){
                return response.status(201).json(retorno);   
            }else if( retorno.status === 3 ){
                return response.status(409).json(retorno);
            }
         
        } catch (err) {
            return response.status(400).json({
                message:err.message || 'Erro inesperado'
            })
        }
    }
}