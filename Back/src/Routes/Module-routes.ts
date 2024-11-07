import { Router } from "express";
import { getAllModules } from "../Middleware/moduleM";

const router = Router();

router.get("/", getAllModules);
/**
 * @swagger
 * /course/{courseID}/modules:
 *   get:
 *     summary: Get all modules
 *     tags: 
 *       - Modules
 *     parameters:
 *       - in: path
 *         name: courseID
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
 *                $ref: '#/components/schemas/Module'  
 *       404:
 *         description: Course not found
 *       500:
 *         description: Failed to fetch courses
 */

router.get("/:moduleID" );
/**
 * @swagger
 * /course/{courseID}/modules/{moduleID}:
 *   get:
 *     summary: Get module by Id
 *     tags: 
 *       - Modules
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *         schema:
 *           type: number
 *       - in: path
 *         name: moduleID
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
 *                $ref: '#/components/schemas/Module'  
 *       404:
 *         description: " Course not found "
 *       500:
 *         description: " Failed to fetch courses "
 */

router.post("/" );
/**
 * @swagger
 * /course/{courseID}/modules:
 *   post:
 *     summary: Add module
 *     tags: 
 *       - Modules
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Module' 
 *     responses:
 *       200:
 *         description: " Added successfully "
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                $ref: '#/components/schemas/Module'  
 *       404:
 *         description: Course not found
 *       500:
 *         description:  " Failed to fetch courses "
 */

router.put("/:moduleID" );
/**
 * @swagger
 * /course/{courseID}/modules/{moduleID}:
 *   put:
 *     summary: Modify module
 *     tags: 
 *       - Modules
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *         schema:
 *           type: number
 *       - in: path
 *         name: moduleID
 *         required: true
 *         schema:
 *           type: number
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Module' 
 *     responses:
 *       200:
 *         description: " Modified successfully "
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                $ref: '#/components/schemas/Module'  
 *       404:
 *         description: " Course not found "
 *       500:
 *         description: " Failed to fetch courses "
 */

router.delete("/:moduleID" );
/**
 * @swagger
 * /course/{courseID}/modules/{moduleID}:
 *   delete:
 *     summary: Delete module
 *     tags: 
 *       - Modules
 *     parameters:
 *       - in: path
 *         name: courseID
 *         required: true
 *       - in: path
 *         name: moduleID
 *         required: true
 *         schema:
 *           type: number
 *         description: ID del modulo que quiere borrar 
 *     responses:
 *       201:
 *         description: "Successfully removed"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Module'  
 *       500:
 *         description: "Error al borrar el curso"
 */

export default router;