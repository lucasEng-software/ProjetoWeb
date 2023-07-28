import { Usuario } from '../../entities/Usuario';
import { IUsersRepository } from './../IUsersRepository';
export class UsersRespository implements IUsersRepository{
    private usuarios: Usuario[] = [];

    async findByEmail(email: string): Promise<Usuario> {
        const usuario = this.usuarios.find(usuario => usuario.email === email);

        return usuario;

    }

    async save (usuario: Usuario): Promise<void>{
        this.usuarios.push(usuario);
    }}