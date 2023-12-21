import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: "Mateus", email: "mateus718@gmail.com" },
  { name: "Jorge", email: "jorge@gmail.com" },
];

export default {
  async index(req: Request, res: Response) {
    res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendEmail({
      to: {
        name: users[0].name,
        email: users[0].email,
      },
      message: {
        subject: "Seja bem-vindo",
        body: `Seja bem-vindo ${users[0].name}`,
      },
    });
    res.json({ success: true });
  },
};
