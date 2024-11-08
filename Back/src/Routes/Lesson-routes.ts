import { Router } from "express";
import { getAllLessons, getOneLesson, newLesson, removeLesson, updateLesson } from "../Middleware/lessonsM";

const router = Router();

router.get("/:courseId/modules/:moduleId/lessons", getAllLessons);
/**
 * @swagger
 * /courses/{courseId}/modules/{moduleId}/lessons:
 *   get:
 *     summary: Get all lessons
 *     tags: 
 *       - Lesson
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *         schema:
 *           type: number
 *       - in: path
 *         name: moduleId
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: " Successful request "
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                $ref: '#/components/schemas/Lesson'  
 *       404:
 *         description: 'Not found' 
 *       500:
 *         description: " Failed to fetch Lessons "
 */

router.get("/:courseId/modules/:moduleId/lessons/:lessonId", getOneLesson);
/**
 * @swagger
 * /courses/{courseId}/modules/{moduleId}/lessons/{lessonID}:
 *   get:
 *     summary: Get lesson by Id
 *     tags: 
 *       - Lesson
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *         schema:
 *           type: number
 *       - in: path
 *         name: moduleId
 *         required: true
 *         schema:
 *           type: number
 *       - in: path
 *         name: lessonID
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: " Successful request "
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                $ref: '#/components/schemas/Lesson'  
 *       404:
 *         description: " Lesson not found "
 *       500:
 *         description: " Failed to fetch Lesson "
 */

router.post("/:courseId/modules/:moduleId/lessons", newLesson );
/**
 * @swagger
 * /courses/{courseId}/modules/{moduleId}/lessons:
 *   post:
 *     summary: Add lesson
 *     tags: 
 *       - Lesson
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *         schema:
 *           type: number
 *       - in: path
 *         name: moduleId
 *         required: true
 *         schema:
 *           type: number
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Lesson' 
 *     responses:
 *       200:
 *         description: " Added successfully "
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                $ref: '#/components/schemas/Lesson'
 *       404:
 *         description: 'Not found' 
 *       400:
 *         description: 'Incomplete data'
 *       500:
 *         description: " Failed to fetch Lesson "
 */

router.put("/:courseId/modules/:moduleId/lessons/:lessonId", updateLesson );
/**
 * @swagger
 * /courses/{courseId}/modules/{moduleId}/lessons/{lessonID}:
 *   put:
 *     summary: Modify lesson
 *     tags: 
 *       - Lesson
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *         schema:
 *           type: number
 *       - in: path
 *         name: moduleId
 *         required: true
 *         schema:
 *           type: number
 *       - in: path
 *         name: lessonID
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: " Modified successfully "
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                $ref: '#/components/schemas/Lesson'  
 *       404:
 *         description: 'Not found' 
 *       500:
 *         description: " Failed to fetch Lesson "
 */

router.delete("/:courseId/modules/:moduleId/lessons/:lessonId", removeLesson );
/**
 * @swagger
 * /course/{courseID}/modules/{moduleID}/lessons/{lessonID}:
 *   delete:
 *     summary: Delete lesson
 *     tags: 
 *       - Lesson
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *       - in: path
 *         name: moduleID
 *         required: true
 *         schema:
 *           type: number
 *       - in: path
 *         name: lessonID
 *         required: true
 *         schema:
 *           type: number 
 *     responses:
 *       201:
 *         description: "Successfully removed"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lesson'  
 *       404:
 *         description: 'Not found' 
 *       500:
 *         description: "Error deleting lesson"
 */

export default router;