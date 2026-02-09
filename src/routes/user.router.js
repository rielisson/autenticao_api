import { Router } from "express";
import UserController from "../controller/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.get('/', (req, res) => {
    res.send("hellow");
})

router.post('/register', UserController.createUser); // rota para criar sua conta
router.post('/login', UserController.login); // rota para logar

router.post('/logout', authMiddleware, UserController.logout); // sair da conta

router.post('/profile', authMiddleware, UserController.getUserProfile); // perfil do usuario, so passa se tiver token.



export default router;