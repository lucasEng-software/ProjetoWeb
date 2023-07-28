import { Usuario } from "../../entities/Usuario";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{
    constructor(
        private usersRepository: IUsersRepository
    ){}
    
    
    async execute (data: ICreateUserRequestDTO) {

        const usuarioExiste = await this.usersRepository.findByEmail(data.email);
        
        if(usuarioExiste){
            throw  new Error('Usuário já cadastrado');
        }

        const usuario = new Usuario(data);

        await this.usersRepository.save(usuario);
    }
}