import express from "express";
import * as dotenv from "dotenv";
import Routes from "./routes/routes";
import mongoose from "mongoose";

dotenv.config();
mongoose.connect("mongodb://127.0.0.1/my_database");

const app: express.Application = express();
const port: string = process.env.LOCAL_PORT || "8080";

app.use(express.json());
app.use("/", Routes);

app.listen(port, () => {
    console.log("Servidor rodando com sucesso na porta " + port);
});
