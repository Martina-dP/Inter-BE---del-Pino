import { readData } from "../app";
import { Course } from "../interfaces";
import path from 'path';

const dataC = path.join(__dirname, "../Data-models/Courses.json");

export async function getCourses(): Promise<Course[]> {
    try {
        const courses = await readData(dataC);
        return courses
    } catch (error) {
        throw new Error('Failed to fetch courses');
    }
}

export async function getCoursesID(courseID: number): Promise<Course[] | null> {
    try {
        const courses = await readData(dataC);
        return courses.find((c: Course) => c.id === courseID || null)
    } catch (error) {
        throw new Error('Failed to fetch courses');
    }
}