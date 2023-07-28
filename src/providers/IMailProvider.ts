interface IAdress{
    email:string;
    name:string;
}
export interface IMessage{
    to : IAdress,
    from: string,
    subject: string,
    body: string;
}

export interface ImailProvider{
    sendMail(message: IMessage): Promise<void>;
}