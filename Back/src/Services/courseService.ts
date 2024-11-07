import { readData, writeData } from "../app";
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

export async function getCoursesID(courseID: number): Promise<Course | undefined> {
    try {
        const courses = await readData(dataC);
        return courses.find((c: Course) => c.id === courseID || undefined)
    } catch (error) {
        throw new Error('Failed to fetch courses');
    }
}

export async function postCourse(newCourse: Course) {
    try {
        const courses = await readData(dataC);
        newCourse.id = courses.length + 1; 
        courses.push(newCourse);
        await writeData(dataC, courses);
        return newCourse;
    } catch (error) {
        throw new Error('Failed to fetch courses');
    }
}

export async function modifiedCourse(courseID: number, updateCourse: Course) {
    try {
        const courses = await readData(dataC);
        const indexC = courses.find((c: Course) => c.id === courseID || undefined)

        const modifiedC = { ...courses[indexC], updateCourse}
        courses[indexC] = modifiedC
        await writeData(dataC, courses);

        return modifiedC
    } catch (error) {
        throw new Error('Failed to fetch courses');
    }
}

export async function deleteCourse(courseID: number) {
    try {
        const courses = await readData(dataC);
        const deleted = courses.filter((c: Course) => c.id !== courseID)

        await writeData(dataC, deleted);
        return null
    } catch (error) {
        throw new Error('Failed to fetch courses');
    }
}