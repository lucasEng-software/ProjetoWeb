import { Usuario } from "../../entities/Usuario";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUserByIdCase{
    constructor(
        private usersRepository: IUsersRepository,
    ){}

    async execute (id:string): Promise <{status:number, mensagem: string, usuario: Usuario}>{
        let retornoBuscaPorId;

        const usuarioExiste = await this.usersRepository.findById(id);

        if(usuarioExiste){
            retornoBuscaPorId = {
                status:1,
                mensagem:'Usuário encontrado com sucesso',
                usuario: usuarioExiste
            }
            return retornoBuscaPorId;
        }else{
            retornoBuscaPorId = {
                status:2,
                mensagem:'Não existe usuário com o ID Informado',
                usuario: null
            }
            return retornoBuscaPorId;
        }
    }
}