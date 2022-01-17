import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User";

/*getRepository() repositóri especifico da entidade,  Em outras palavras, 
 * cada entidade terá seu próprio repositório embutido e pode ser acessado 
 * usando o método getRepository()
 */
class AuthController {
    async authenticate(req: Request, res: Response) {
        const repository = getRepository(User)
        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email } });
        if (!user) {
            return res.sendStatus(401)
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.sendStatus(401)
        }
        const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
        

        return res.json({
        
           token : token
        })
    }
}
export default new AuthController();