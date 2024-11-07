import { Router} from "express";
import { deleteCourseID, getAllCourses, getCourseID, newCourse, putCourseID } from "../Middel/coursesM";

const router: Router = Router();

router.get("/", getAllCourses);
/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtiene todos los cursos
 *     tags: 
 *       - Course
 *     responses:
 *       200:
 *         description: Lista de todos los cursos
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                $ref: '#/components/schemas/Course'  
 *       500:
 *         description: Failed to fetch courses
 */

router.get("/:courseID", getCourseID);
/**
 * @swagger
 * /{courseID}:
 *   get:
 *     summary: Obtiene un curso
 *     tags: 
 *       - Course
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *         description: ID del curso que quiere obtener
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Curso obtenido con exito
 *       404:
 *         description: Course not found
 *       500:
 *         description: Failed to fetch courses
 */

router.post("/", newCourse);
/**
 * @swagger
 * /:
 *   post:
 *     summary: Crear un nuevo curso
 *     tags: 
 *       - Course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Course' 
 *     responses:
 *       201:
 *         description: "Curso creado exitosamente"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'  
 *       500:
 *         description: "Error al crear el curso"
 */

router.put("/:courseID", putCourseID);
/**
 * @swagger
 * /{courseID}:
 *   put:
 *     summary: Crear un nuevo curso
 *     tags: 
 *       - Course
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *         description: ID del curso que quiere modificar
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Course' 
 *     responses:
 *       201:
 *         description: "Curso modificado exitosamente"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'  
 *       500:
 *         description: "Error al modificar el curso"
 */

router.delete("/:courseID", deleteCourseID);
/**
 * @swagger
 * /{courseID}:
 *   delete:
 *     summary: Delete course
 *     tags: 
 *       - Course
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *         description: ID del curso que quiere borrar 
 *     responses:
 *       201:
 *         description: "Curso borrado exitosamente"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'  
 *       500:
 *         description: "Error al borrar el curso"
 */

export default router;
