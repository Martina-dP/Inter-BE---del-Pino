import { Router} from "express";
import { deleteCourseID, getAllCourses, getCourseID, newCourse, putCourseID } from "../Middleware/coursesM";

const router: Router = Router();

router.get("/", getAllCourses);
/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses
 *     tags: 
 *       - Course
 *     responses:
 *       200:
 *         description: " Successful request "
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
 * /courses/{courseID}:
 *   get:
 *     summary: Get course by Id
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
 *         description: " Successful request "
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                $ref: '#/components/schemas/Course'  
 *       404:
 *         description: Course not found
 *       500:
 *         description: Failed to fetch courses
 */

router.post("/", newCourse);
/**
 * @swagger
 * /newCourse:
 *   post:
 *     summary: Add course
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
 *         description: " Added successfully "
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'  
 *       500:
 *         description: "Error updating course"
 */

router.put("/:courseID", putCourseID);
/**
 * @swagger
 * /course/{courseID}:
 *   put:
 *     summary: Modify course
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
 *         description: " Modified successfully "
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
 * /course/{courseID}:
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
 *         description: "Successfully removed"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'  
 *       500:
 *         description: "Error deleting course"
 */

export default router;
