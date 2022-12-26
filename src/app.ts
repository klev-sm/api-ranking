import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createRoutes } from "./routes/routes";
import { DatabaseSingleton } from "./configs/database";
import cors, { CorsOptions } from "cors";

const app = express();
const port: string = process.env.PORT || "8080";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

async function setup() {
    const db = await DatabaseSingleton.getInstance();
    if (!db) {
        return;
    }
    app.use("/", createRoutes(db));
    app.listen(port, () => {
        console.log("Servidor rodando com sucesso na porta " + port);
    });
}

setup();
