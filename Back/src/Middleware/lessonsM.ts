import { Request, Response } from 'express';
import { deleteLesson, getLessonByID, getLessons, modifyLesson, postLesson } from '../Services/lessonService';

export const getAllLessons = async (req: Request, res: Response) => {
    try {
        const courseId = parseInt(req.params.courseId);
        const moduleId = parseInt(req.params.moduleId);
        if (isNaN(courseId) || isNaN(moduleId)) {
            res.status(400).json({ error: 'Invalid ID' });
        }
        const lessons = await getLessons(courseId, moduleId);

        res.json(lessons);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Lesson' });
    }
};

export const getOneLesson = async (req: Request, res: Response) => {
    try {
        const courseId = parseInt(req.params.courseId);
        const moduleId = parseInt(req.params.moduleId);
        const lessonId = parseInt(req.params.lessonId);
        if (!courseId || !moduleId || lessonId) {
            res.status(404).json({ error: 'Not found' });
            }
        const lesson = await getLessonByID(courseId, moduleId, lessonId);

        res.json(lesson);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Lesson' });
    }
};

export const newLesson = async (req: Request, res: Response) => {
    try {
        const courseId = parseInt(req.params.courseId);
        const moduleId = parseInt(req.params.moduleId);

        if (!courseId || !moduleId ) {
            res.status(404).json({ error: 'Not found' });
            }

            const { title, description, topics, content } = req.body;

            if (!title || !description || !Array.isArray(topics) || !Array.isArray(content)) {
                res.status(400).json({ error: 'Datos del módulo incompletos' });
            }

        const lessonCreated = await postLesson(courseId, moduleId, req.body);

        res.json(lessonCreated);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Lesson' });
    }
};

export const updateLesson = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseID = parseInt(req.params.courseId);
        const moduleID = parseInt(req.params.moduleId);
        const lessonID = parseInt(req.params.lessonId);
        if (!courseID || !moduleID || lessonID) {
            res.status(404).json({ error: 'Not found' });
            }

        const newData = req.body

        const lessonModified = await modifyLesson(courseID, moduleID, lessonID, newData);

        res.json(lessonModified);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Lesson' });
    }
};

export const removeLesson = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseID = parseInt(req.params.courseId);
        const moduleID = parseInt(req.params.moduleId);
        const lessonID = parseInt(req.params.lessonId);
        if (!courseID || !moduleID || lessonID) {
            res.status(404).json({ error: 'Not found' });
            }

        const deletedById = await deleteLesson(courseID, moduleID, lessonID );
        if (!deletedById) {
            res.status(404).json({ error: 'Lesson not found' });
        }
        res.status(200).json({ message: 'Lesson deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Lesson' });
    }
};

