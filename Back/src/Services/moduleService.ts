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
        throw new Error('Failed to fetch modules');
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
        throw new Error(`Failed to fetch modules : ${error}`);
    }
}

export async function postModule(courseID: number, newModule: Module) {
    try {
        const courses= await readData(dataC);
        const modules= await readData(dataM);

        const currentCourse = courses.find((c: Course) => c.id === courseID);

        if (!currentCourse) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        newModule.id = modules.length + 1; 
        modules.push(newModule);
        await writeData(dataM, modules);
        return modules;
    } catch (error) {
        throw new Error('Failed to fetch modules');
    }
}

export async function modifiedModule(courseID: number, moduleID: number, updateModule: Module) {
    try {
        const courses = await readData(dataC);
        const modules= await readData(dataM);

        const currentC = courses.find((c: Module) => c.id === courseID || undefined)
        if (!currentC) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        const currentM = modules.find((m: Module) => m.courseId === courseID && m.id === moduleID);

        const modifiedM = { ...modules[currentM], updateModule}
        modules[currentM] = modifiedM
        await writeData(dataM, modules);

        return modifiedM
    } catch (error) {
        throw new Error('Failed to fetch modules');
    }
}

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
        throw new Error('Failed to fetch modules');
    }
}