import { Usuario } from '../../entities/Usuario';
import { Request, Response } from "express";
import { IUsersRepository } from './../IUsersRepository';
const bd = require('../Implementations/ConexaoBD')
export class UsersRespository implements IUsersRepository{

    async findByEmail(email: string): Promise<Usuario> {
        const usuario = bd.findOne({
            where: {
              email: email
            }
          });
        return usuario;
    }

    async save (usuario: Usuario): Promise<{ status: string; mensagem: string }>{
        try{
            await bd.create(usuario);
            const retornoSucesso = {
                status:'sucesso',
                mensagem: 'Usuário cadastrado com sucesso!',
            };
            return retornoSucesso;
        } catch (error) {
            const retornoError = {
                status:'error',
                mensagem: 'Usuário não cadastrado com sucesso!',
            };
            return retornoError;
        }    
    }

    async list(): Promise<Usuario[]>{
        return bd.findAll();
    }
}

    