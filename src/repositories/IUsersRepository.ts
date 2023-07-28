import { Usuario } from "../entities/Usuario";

export interface IUsersRepository {
    findByEmail(email:string): Promise<Usuario>;
    //createUser({name, email}: Omit<Usuario,"id"> ):Promise<void>
    save(usuario:Usuario): Promise<void>;
}