import express from "express";
import '../src/model/db.js';
import authRouter from "../src/routes/user.router.js";

const app = express();
app.use(express.json())

app.use('/auth', authRouter);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
})