import { Router } from "express";
import UserController from "../controller/user.controller.js";

const router = Router();

router.post('/sign-in', UserController.create);

export default router;