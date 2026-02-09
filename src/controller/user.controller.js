import "../model/db.js"
import UserModel from "../model/user.model.js";

class UserController {
    async createUser(req, res) {
        try {
            let createUser = await UserModel.createUser(req.body);
            if(!createUser) {
                return res.status(404).send("Failed to create user.");
            }
            return res.status(201).send("User created successfully.");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async login (req, res) {
        
    }

    async signin (req, res) {

    }

    async logout (req, res) {

    }
}

export default new UserController();