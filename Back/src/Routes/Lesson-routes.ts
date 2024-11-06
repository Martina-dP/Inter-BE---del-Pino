import { Router } from "express";
const router = Router();

router.get("/", async (_req, res) => {
    res.send("SOY LESSON");
});

router.get("/:lessonID", async (_req, res) => {
    res.send("SOY LESSON POR ID");
});

router.post("/", async (_req, res) => {
    res.send("POSTEAR LESSON");
});

router.put("/:lessonID", async (_req, res) => {
    res.send("MODIFICAR LESSON");
});

router.delete("/:lessonID", async (_req, res) => {
    res.send("ELIMINAR LESSON");
});

export default router;