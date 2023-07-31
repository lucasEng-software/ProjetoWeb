import { Usuario } from "../entities/Usuario";

export interface IUsersRepository {
    findByEmail(email:string): Promise<Usuario>;
    save(usuario:Usuario): Promise<void>;
    list():Promise<Usuario[]>;
}