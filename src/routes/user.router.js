import { Router } from "express";
import UserController from "../controller/user.controller.js";

const router = Router();

router.get('/', (req, res) => {
    res.send("hellow");
})

router.post('/register', UserController.createUser); // registration route;
router.post('/login', UserController.login); // login route;
router.post('/signin', UserController.signin); // signing route;

router.post('/logout', UserController.logout); //falta descobri qual verbo http pra usar.




export default router;