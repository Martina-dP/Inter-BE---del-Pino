import { Request, Response } from 'express';
import { deleteCourse, getCourses, getCoursesID, modifiedCourse } from "../Services/courseService";

export const getAllCourses = async (_req: Request, res: Response) => {
    try {
        const courses = await getCourses();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
};

export const getCourseID = async (req: Request, res: Response): Promise<void> => {
    try {
        const validateID = parseInt(req.params.courseID);
        const courseById = await getCoursesID(validateID);
        if (!courseById) {
        res.status(404).json({ error: 'Course not found' });
        }
        res.json(courseById);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
};

export const newCourse = async (req: Request, res: Response) => {
    try {
        const newCourse = req.body;  
        res.status(201).json(newCourse);  
    } catch (error) {
        res.status(500).json({ error: "Error al crear el curso" });
    }
};

export const putCourseID = async (req: Request, res: Response) => {
    try {
        const searchID = parseInt(req.params.courseID);
        const newData = req.body

        const course = modifiedCourse(searchID, newData)

        res.json(course);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
};

export const deleteCourseID = async (req: Request, res: Response) => {
    try {
        const validateID = parseInt(req.params.courseID);
        const deletedById = await deleteCourse(validateID);
        if (!deletedById) {
            res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
};