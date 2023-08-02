import { Usuario } from "../../entities/Usuario";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class DeleteUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
    ){}
    
    async execute(id: string): Promise<{ status: number; mensagem: string; usuario:Usuario }>{

        let retornoDelete;
        const usuarioExiste = await this.usersRepository.findById(id);

        if(!usuarioExiste){
            retornoDelete = {
                status:2,
                mensagem:'Não existe usuário com o ID Informado',
                usuario: null
            }
            return retornoDelete;
        }

        await this.usersRepository.deleteUserById(id);

        retornoDelete = {
            status:1,
            mensagem:'Usuário deletado com sucesso',
            usuario: usuarioExiste
        }
        return retornoDelete;
    }
}