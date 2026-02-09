import "../model/db.js"
import UserModel from "../model/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class UserController {
    async createUser(req, res) {
        try {
            const {email, senha} = req.body;
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(senha, saltRounds);

            let createUser = await UserModel.createUser({email, senha: hashedPassword});
            if(createUser.affectedRows < 1) {
                return res.status(404).send("Failed to create user.");
            }
            return res.status(201).send("User created successfully.");
        } catch (error) {
            return res.status(500).json({msg: "Internal server error"});
        }
    }

    async login (req, res) {
        try {
            const { email, senha} = req.body;
            const users = await UserModel.findUserByEmail(email); // Busca no banco se o email existe.

            if(users.length === 0) { // verifica se o email existe.
                return res.status(404).send("User not found.");
            } 

            const user = users[0]; // pega o primeiro usuario do array.[]

            const senhaValida = await bcrypt.compare(senha, user.senha);

            if(!senhaValida) {
                return res.status(401).send("Invalid email or password.");
            }
            const token = jwt.sign( // gerar o token pra retorna pro usuario.
                {id: user.id},
                process.env.JWT_SECRET,
                { expiresIn: '1d'}
            )

            res.cookie('token', token, { // guarda o token no cookies do navegador.
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 86400000
            }) 

            return res.status(201).json({message: "Login successful."});
        } catch (err) {
            return res.status(500).send(err.message);
        }
    }


    async logout (req, res) {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        })

        return res.status(200).json({message: "Logged out successfully."});
    }

    async getUserProfile (req, res) {
        return res.send("Você acessou seu perfil.");
    }
}

export default new UserController();