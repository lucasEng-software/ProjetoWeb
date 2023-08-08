import { Usuario } from '../../entities/Usuario';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class GetUsersCase {

    constructor (
        private usersRespository: IUsersRepository,
    ){}
    
    async execute() : Promise<{ status: number; mensagem: string, usuarios: Usuario[]} > {
        const listaDeUsuarios = await this.usersRespository.list();
        let retorno;
        if (!listaDeUsuarios){
            retorno = {
                status:4,
                mensagem: 'Não existem usuários cadastrados',
                usuarios: null
            }
            return retorno;
             
        }
        retorno ={
            status: 1,
            mensagem:'Lista de Usuário carregada com sucesso!',
            usuarios: listaDeUsuarios
        }
        return retorno
    }
}