import { Usuario } from '../../entities/Usuario';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class GetUsersCase {

    constructor (
        private usersRespository: IUsersRepository,
    ){}
    
    async execute() : Promise<Usuario[]> {
        const listaDeUsuarios = await this.usersRespository.list();
        
        if (!listaDeUsuarios){
            throw new Error ('Não existem usuários cadastrados');
        }
        
        return listaDeUsuarios;
    }
}