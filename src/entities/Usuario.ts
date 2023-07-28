import { uuid } from "uuidv4";

export class Usuario{
    public readonly id: string;

    public nome: string;
    public email:string;
    public password: string;

    constructor(props: Omit<Usuario, 'id'>, id?: string){
        Object.assign(this, props);

        if (!id){
            this.id = uuid();
        }
    }
}