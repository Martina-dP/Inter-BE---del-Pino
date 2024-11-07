import { Request, Response } from 'express';
import { getModule } from '../Services/moduleService';

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