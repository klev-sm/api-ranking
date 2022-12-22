import dotenv from "dotenv";
dotenv.config();
import express from "express";
import Routes from "./routes/routes";

const app: express.Application = express();
const port: string = process.env.PORT || "8080";

console.log(process.env.MONGO_URI);

app.use(express.json());
app.use(express.urlencoded());
app.use("/", Routes);

app.listen(port, () => {
    console.log("Servidor rodando com sucesso na porta " + port);
});
