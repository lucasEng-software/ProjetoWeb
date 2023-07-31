import { Usuario } from "../../entities/Usuario";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ){}
    
    
    async execute (data: ICreateUserRequestDTO) : Promise<Usuario[]> {

        const usuarioExiste = await this.usersRepository.findByEmail(data.email);
        
        if(usuarioExiste){
            throw  new Error('Usuário já cadastrado');
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

        return await this.usersRepository.save(usuario);
    }
}