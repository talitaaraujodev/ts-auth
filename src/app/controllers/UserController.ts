import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
/*getRepository() repositóri especifico da entidade,  Em outras palavras, 
 * cada entidade terá seu próprio repositório embutido e pode ser acessado 
 * usando o método getRepository()
 */
class UserController {
    index(req: Request, res: Response) {
        return res.send({userID: req.userID});
    }
    async store(req: Request, res: Response) {
        const repository = getRepository(User)
        const { id, email, password } = req.body;
        console.log(req.body);

        const userExists = await repository.findOne({ where: { email } });
        if (userExists) {
            res.status(409);
        }
        const user = repository.create({ id, email, password });
        await repository.save(user)
        return res.status(201).json(user);
    }
}
export default new UserController();