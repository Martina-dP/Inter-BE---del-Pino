import { Request, Response } from 'express';
import { deleteModule, getModule, getModuleID, modifiedModule, postModule } from '../Services/moduleService';

export const getAllModules = async (req: Request, res: Response) => {
    try {
        const courseId = parseInt(req.params.courseId);
        if (isNaN(courseId)) {
            res.status(400).json({ error: 'Invalid course ID' });
        }
        const modules = await getModule(courseId);

        res.json(modules);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Module' });
    }
};

export const getCourseID = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseID = parseInt(req.params.courseId);
        const moduleID = parseInt(req.params.moduleId);
        const moduleById = await getModuleID(courseID, moduleID);
        if (!moduleById) {
        res.status(404).json({ error: 'Not found' });
        }
        res.json(moduleById);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Module' });
    }
};

export const addModule = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseID = parseInt(req.params.courseId);

        if (isNaN(courseID)) {
            res.status(400).json({ error: 'El ID del curso no es válido' });
        }

        const { title, lessons } = req.body;

        if (!title || !Array.isArray(lessons)) {
            res.status(400).json({ error: 'Datos del módulo incompletos' });
        }

        const newModule = await postModule(courseID, req.body);
        res.status(200).json(newModule);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Module' });
    }
};

export const updateModule = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseID = parseInt(req.params.courseId);
        const moduleID = parseInt(req.params.moduleId);
        const newData = req.body

        const moduleModified = await modifiedModule(courseID, moduleID, newData);

        res.json(moduleModified);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Module' });
    }
};

export const deleteModuleId = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseID = parseInt(req.params.courseId);
        const moduleID = parseInt(req.params.moduleId);
        const deletedById = await deleteModule(courseID, moduleID);
        if (!deletedById) {
            res.status(404).json({ error: 'Not found' });
        }
        res.status(200).json({ message: 'Module deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Module' });
    }
};