import { Usuario } from './../../entities/Usuario';
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

    async save (usuario: Usuario): Promise<Usuario>{
        try{
            const usuarioCriado = await bd.create(usuario);
            
            return usuarioCriado;
        } catch {
            throw  new Error('Erro ao cadastrar usuário');
        }
    }

    async list(): Promise<Usuario[]>{
        return bd.findAll();
    }

    async findByName(nome: string):Promise<Usuario>{
        const usuario = bd.findOne({
            where: {
              nome: nome
            }
          });
        
        return usuario;  
    }

    async findById(id: string): Promise<Usuario> {
      const usuario = await bd.findByPk(id);

      return usuario;
    }

    async deleteUserById(id: string): Promise<Usuario> {
      const usuario = bd.destroy({
        where: {
          id: id
        }
      });    
      return usuario;
    }
}

    