import { Response } from 'express';
import { Usuario } from "../../entities/Usuario";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ){}
    
    
    async execute (data: ICreateUserRequestDTO) : Promise<{ status: number; mensagem: string, usuario:Usuario }> {
        
        let retornoCadastro;
        const usuarioExiste = await this.usersRepository.findByEmail(data.email);
        

        if(usuarioExiste){
            retornoCadastro = {
                status:3,
                mensagem: 'Usuário já cadastrado com esse e-mail',
                usuario: null
            };
            return retornoCadastro
        }

        const usuario = new Usuario(data);
        
        await this.mailProvider.sendMail({
            to:{
                nome:data.nome,
                email: data.email,
            },
            from: {
                email: 'suporte@lagcompany.com',
                nome: 'Suporte Lag Company',
                
            },
            subject: 'Bem-vindo ao aplicativo',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        })

        const usuarioCadastrado = await this.usersRepository.save(usuario);
        retornoCadastro = {
            status:1,
            mensagem: 'Usuário cadastrado com sucesso',
            usuario: usuarioCadastrado
        };
        return retornoCadastro;
    }
}