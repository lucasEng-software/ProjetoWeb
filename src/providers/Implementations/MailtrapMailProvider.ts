import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
                user:'64184fea10086a',
                pass:'90807376d0859a'
            }
        })
    }
    
    async sendMail(message: IMessage): Promise<void>{
        await this.transporter.sendMail({
            to:{
                name:message.to.nome,
                address:message.to.email
            }, 
            from:{
                name: message.from.nome,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}