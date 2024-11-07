import { Router } from "express";

const router = Router();

router.get("/", );
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
 *         description: " Lessons not found "
 *       500:
 *         description: " Failed to fetch Lessons "
 */

router.get("/:lessonID" );
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

router.post("/" );
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
 *       500:
 *         description: " Failed to fetch Lesson "
 */

router.put("/:lessonID" );
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
 *       500:
 *         description: " Failed to fetch Lesson "
 */

router.delete("/:lessonID" );
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
 *       500:
 *         description: "Error deleting lesson"
 */

export default router;