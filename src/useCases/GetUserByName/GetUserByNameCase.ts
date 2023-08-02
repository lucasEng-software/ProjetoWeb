import { Usuario } from "../../entities/Usuario";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUserByNameCase {
    constructor (
        private usersRepository: IUsersRepository,
    ){}

    async execute (nome: string) : Promise <{ status: number; mensagem: string }>{
        
        const usuarioEncontrado = await this.usersRepository.findByName(nome);
        if (usuarioEncontrado){
            const retornoSucesso = {
                status:1,
                mensagem: 'Usuário encontrado com sucesso',
                usuario:usuarioEncontrado,
            };
        return retornoSucesso;
        }else{
            const retornoNaoEncontrado  = {
                status:2,
                mensagem: 'Usuário não cadastrado',
                usuario:usuarioEncontrado,
            };
            return retornoNaoEncontrado;
        }    
    }
}