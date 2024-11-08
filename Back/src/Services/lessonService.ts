import { readData, writeData } from "../app";
import { Course, Module, Lesson } from "../interfaces";
import path from 'path';

const dataC = path.join(__dirname, "../Data-models/Courses.json");
const dataM = path.join(__dirname, "../Data-models/Module.json");
const dataL = path.join(__dirname, "../Data-models/Lesson.json");

export async function getLessons(courseID: number, moduleID: number) : Promise<Lesson[]> {
    try {
        const courses= await readData(dataC);
        const modules= await readData(dataM);
        const lessons= await readData(dataL);

        const currentCourse = courses.find((c: Course) => c.id === courseID);

        if (!currentCourse) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        const currentM = modules.find((m: Module) => m.courseId === courseID && m.id === moduleID);
        if (!currentM) {
            throw new Error(`Módulo con ID ${moduleID} no encontrado en el curso con ID ${courseID}`);
        }

        const lessonsList = lessons.filter((l: Lesson) => l.moduleId === moduleID);
        
        return lessonsList;
    } catch (error) {
        throw new Error('Failed to fetch lessons');
    }
}

export async function getLessonByID(courseID: number, moduleID: number, lessonID: number) : Promise<Lesson> {
    try {
        const courses= await readData(dataC);
        const modules= await readData(dataM);
        const lessons= await readData(dataL);

        const currentCourse = courses.find((c: Course) => c.id === courseID);
        if (!currentCourse) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        const currentM = modules.find((m: Module) => m.courseId === courseID && m.id === moduleID);
        if (!currentM) {
            throw new Error(`Módulo con ID ${moduleID} no encontrado en el curso con ID ${courseID}`);
        }

        const currentL = lessons.find((l: Lesson) => l.moduleId === moduleID && l.id === lessonID);

        return currentL;
    } catch (error) {
        throw new Error('Failed to fetch lessons');
    }
}

export async function postLesson(courseID: number, moduleID: number, newLesson: Lesson) : Promise<Lesson> {
    try {
        const courses= await readData(dataC);
        const modules= await readData(dataM);
        const lessons= await readData(dataL);

        const currentCourse = courses.find((c: Course) => c.id === courseID);
        if (!currentCourse) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        const currentM = modules.find((m: Module) => m.courseId === courseID && m.id === moduleID);
        if (!currentM) {
            throw new Error(`Módulo con ID ${moduleID} no encontrado en el curso con ID ${courseID}`);
        }

        newLesson.id = lessons.length + 1; 
        lessons.push(newLesson);
        await writeData(dataL, lessons);
        return newLesson;
    } catch (error) {
        throw new Error('Failed to fetch lessons');
    }
}

export async function modifyLesson(courseID: number, moduleID: number, lessonID: number, updateLesson: Lesson) : Promise<Lesson> {
    try {
        const courses= await readData(dataC);
        const modules= await readData(dataM);
        const lessons= await readData(dataL);

        const currentCourse = courses.find((c: Course) => c.id === courseID);
        if (!currentCourse) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        const currentM = modules.find((m: Module) => m.courseId === courseID && m.id === moduleID);
        if (!currentM) {
            throw new Error(`Módulo con ID ${moduleID} no encontrado en el curso con ID ${courseID}`);
        }

        const lessonIndex = lessons.find((l: Lesson) => l.moduleId === moduleID && l.id === lessonID);

        const currentL = lessons[lessonIndex] 
        const modifiedL = {...currentL, updateLesson}
        lessons[lessonIndex] = modifiedL

        await writeData(dataL, lessons);

        return modifiedL
    } catch (error) {
        throw new Error('Failed to fetch lessons');
    }
}

export async function deleteLesson(courseID: number, moduleID: number, lessonID: number) {
    try {
        const courses= await readData(dataC);
        const modules= await readData(dataM);
        const lessons= await readData(dataL);

        const currentCourse = courses.find((c: Course) => c.id === courseID);
        if (!currentCourse) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        const currentModule = modules.find((m: Module) => m.courseId === courseID && m.id == moduleID);
        if (!currentModule) {
            throw new Error(`No modules found for Course ID ${courseID}`);
        }

        const lessonExist = lessons.find((l: Lesson) => l.id === lessonID && l.moduleId === moduleID)
        if (!lessonExist) {
            throw new Error(`Lesson with ID ${lessonID} not found in module with ID ${moduleID}`);
        }

        const deleted = lessons.filter((l: Lesson) => l.id !== lessonID);

        await writeData(dataL, deleted);
        return null
    } catch (error) {
        throw new Error('Failed to fetch modules');
    }
}