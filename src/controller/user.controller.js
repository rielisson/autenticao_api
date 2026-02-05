import "../model/db.js"
import UserModel from "../model/user.model.js";

class UserController {
    async create(req, res) {
        try {
            let createUser = await UserModel.createUser(req.body);
            console.log(createUser);
            return res.status(201).send("Usuario criado com sucesso.");
        } catch (error) {
            return error.message; 
        }
    }
}

export default new UserController();