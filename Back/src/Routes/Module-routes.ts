import { Router } from "express";
const router = Router();

router.get("/", async (_req, res) => {
    res.send("SOY MODULE");
});

router.get("/:moduleID", async (_req, res) => {
    res.send("SOY MODULE POR ID");
});

router.post("/", async (_req, res) => {
    res.send("POSTEAR MODULE");
});

router.put("/:moduleID", async (_req, res) => {
    res.send("MODIFICAR MODULE");
});

router.delete("/:moduleID", async (_req, res) => {
    res.send("ELIMINAR MODULE");
});

export default router;