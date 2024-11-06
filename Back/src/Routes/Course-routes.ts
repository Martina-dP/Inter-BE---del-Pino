import { Router, Request, Response } from "express";
import { getCourses, getCoursesID } from "../Services/courseService";

const router = Router();

router.get("/", async (_req, res) => {
    try {
        const courses = await getCourses();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses HOLA' });
    }
});

router.get("/:courseID", async (req: Request, res: Response) => {
    try {
        const validateID = parseInt(req.params.courseID, 10);

        const courseById = await getCoursesID(validateID);
        
        if (!courseById) {
            return res.status(404).json({ error: 'Course not found' });
        }
        
        res.json(courseById);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses HOLA' });
    }
});

router.post("/", async (_req, res) => {
    res.send("POSTEAR CURSOS");
});

router.put("/:courseID", async (_req, res) => {
    res.send("MODIFICAR UN CURSO");
});

router.delete("/:courseID", async (_req, res) => {
    res.send("ELIMINAR CURSOS");
});

export default router;