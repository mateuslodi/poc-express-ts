interface IMailTo {
    name : string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachments?: string[];
}

interface IMailDTO {
    to: IMailTo;
    message: IMailMessage;
}

class EmailService {
    sendEmail({to, message}: IMailDTO) {
        console.log(`Email enviado para ${to.email}`);
    }
}

export default EmailService