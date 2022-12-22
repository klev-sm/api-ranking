import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Olá, mundo!");
});

export default router;
