import { Router } from "express";
import client from "../configs/database";

const router = Router();

const db = client.db("api-ranking");
const collection = db.collection("avaliacoes");

router.get("/avaliacao", (req, res) => {
    try {
        collection
            .find({})
            .sort({
                avaliacao: -1,
            })
            .toArray()
            .then((results) => {
                res.status(200).json({
                    message: "Documentos da coleção retornados com sucesso.",
                    results: results,
                });
            })
            .catch((err) => {
                throw new Error(err);
            });
    } catch (error) {
        res.status(400).json({
            message: "Erro ao retornar documentos da coleção",
        });
    }
});

router.post("/avaliacao", async (req, res) => {
    try {
        const nome: string = req.body.nome;
        const avaliacao: number = req.body.avaliacao;

        collection
            .insertOne({
                nomeUsuario: nome,
                avaliacao: avaliacao,
            })
            .then(() => {
                res.status(200).json({
                    message: "Documentos adicionados com sucesso à coleção.",
                    nomeUsuario: nome,
                    avaliacao: avaliacao,
                });
            })
            .catch((err) => {
                throw new Error(err);
            });
    } catch (error) {
        res.status(400).json({
            message: "Erro ao adicionar documentos à coleção.",
        });
    }
});

export default router;
