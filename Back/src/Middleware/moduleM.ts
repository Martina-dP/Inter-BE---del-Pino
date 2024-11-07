import { Request, Response } from 'express';
import { deleteModule, getModule, getModuleID } from '../Services/moduleService';

export const getAllModules = async (req: Request, res: Response) => {
    try {
        const courseId = parseInt(req.params.courseId);
        if (isNaN(courseId)) {
            res.status(400).json({ error: 'Invalid course ID' });
        }
        const modules = await getModule(courseId);

        res.json(modules);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
};

export const getCourseID = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseID = parseInt(req.params.courseId);
        const moduleID = parseInt(req.params.moduleId);
        const moduleById = await getModuleID(courseID, moduleID);
        if (!moduleById) {
        res.status(404).json({ error: 'Course not found' });
        }
        res.json(moduleById);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
};

export const deleteModuleId = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseID = parseInt(req.params.courseId);
        const moduleID = parseInt(req.params.moduleId);
        const deletedById = await deleteModule(courseID, moduleID);
        if (!deletedById) {
            res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
};