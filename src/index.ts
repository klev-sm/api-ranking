import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app: express.Application = express();
const port: string = process.env.LOCAL_PORT || "8080";

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá, mundo!");
});

app.listen(port, () => {
    console.log("Servidor rodando com sucesso na porta " + port);
});
