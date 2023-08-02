import { Usuario } from './../entities/Usuario';



export interface IUsersRepository {
    findByEmail(email:string): Promise<Usuario>;
    save(usuario:Usuario): Promise<Usuario>;
    list():Promise<Usuario[]>;
    findByName(nome:string): Promise <Usuario>;
}