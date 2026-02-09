import express from "express";
import '../src/model/db.js';
import authRouter from "../src/routes/user.router.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';

const app = express(); // framework express
app.use(express.json()); // pra receber dados Json
app.use(cookieParser()); // pra usar cookies na autenticação
dotenv.config(); // pra poder usar variaveis

app.use('/auth', authRouter);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
})