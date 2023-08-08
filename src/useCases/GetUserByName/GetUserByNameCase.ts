import { Usuario } from "../../entities/Usuario";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUserByNameCase {
    constructor (
        private usersRepository: IUsersRepository,
    ){}

    async execute (nome: string) : Promise <{ status: number; mensagem: string; usuario: Usuario }>{
        
        let retornoBuscaPorNome;
        const usuarioEncontrado = await this.usersRepository.findByName(nome);
        if (usuarioEncontrado){
            retornoBuscaPorNome = {
                status:1,
                mensagem: 'Usuário encontrado com sucesso',
                usuario:usuarioEncontrado,
            };
        return retornoBuscaPorNome;
        }else{
            retornoBuscaPorNome  = {
                status:4,
                mensagem: 'Usuário não cadastrado',
                usuario:usuarioEncontrado,
            };
            return retornoBuscaPorNome;
        }    
    }
}