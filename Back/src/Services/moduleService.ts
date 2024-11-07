import { readData, writeData } from "../app";
import { Course, Module } from "../interfaces";
import path from 'path';

const dataC = path.join(__dirname, "../Data-models/Courses.json");
const dataM = path.join(__dirname, "../Data-models/Module.json");

export async function getModule(courseID: number) : Promise<Module[]> {
    try {
        const courses= await readData(dataC);
        const modules= await readData(dataM);

        const currentCourse = courses.find((c: Course) => c.id === courseID);

        if (!currentCourse) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        const modulesList = modules.filter((m: Module) => m.courseId === courseID);
        if (modulesList.length === 0) {
            throw new Error(`No modules found for Course ID ${courseID}`);
        }
        
        return modulesList;
    } catch (error) {
        throw new Error('Failed to fetch courses');
    }
}

export async function getModuleID(courseID: number, moduleID: number): Promise<Module> {
    try {
        const courses= await readData(dataC);
        const modules= await readData(dataM);

        const currentCourse = courses.find((c: Course) => c.id === courseID);

        if (!currentCourse) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        const modulesList = modules.filter((m: Module) => m.courseId === courseID);
        if (modulesList.length === 0) {
            throw new Error(`No modules found for Course ID ${courseID}`);
        }

        const currentModule = modulesList.find((m: Module) => m.id === moduleID);


        return currentModule;
    } catch (error) {
        throw new Error(`Failed to fetch courses : ${error}`);
    }
}

// export async function postCourse(newCourse: Module) {
//     try {
//         const courses = await readData(dataM);
//         newCourse.id = courses.length + 1; 
//         courses.push(newCourse);
//         await writeData(dataM, courses);
//         return newCourse;
//     } catch (error) {
//         throw new Error('Failed to fetch courses');
//     }
// }

// export async function modifiedCourse(courseID: number, updateCourse: Module) {
//     try {
//         const courses = await readData(dataM);
//         const indexC = courses.find((c: Module) => c.id === courseID || undefined)

//         const modifiedC = { ...courses[indexC], updateCourse}
//         courses[indexC] = modifiedC
//         await writeData(dataM, courses);

//         return modifiedC
//     } catch (error) {
//         throw new Error('Failed to fetch courses');
//     }
// }

export async function deleteModule(courseID: number, moduleID: number) {
    try {
        const courses= await readData(dataC);
        const modules= await readData(dataM);

        const currentCourse = courses.find((c: Course) => c.id === courseID);
        if (!currentCourse) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        const modulesList = modules.filter((m: Module) => m.courseId === courseID);
        if (modulesList.length === 0) {
            throw new Error(`No modules found for Course ID ${courseID}`);
        }

        const deleted = modulesList.filter((m: Module) => m.id !== moduleID);

        await writeData(dataC, deleted);
        return null
    } catch (error) {
        throw new Error('Failed to fetch courses');
    }
}