import { Usuario } from "../entities/Usuario";


export interface IUsersRepository {
    findByEmail(email:string): Promise<Usuario>;
    save(usuario:Usuario): Promise<{ status: string; mensagem: string }>;
    list():Promise<Usuario[]>;
}