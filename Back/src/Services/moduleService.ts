import { readData } from "../app";
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

// export async function getCoursesID(courseID: number): Promise<Module | undefined> {
//     try {
//         const modules = await readData(dataM);
//         return modules.find((m: Module) => m.id === courseID || undefined)
//     } catch (error) {
//         throw new Error('Failed to fetch courses');
//     }
// }

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

// export async function deleteCourse(courseID: number) {
//     try {
//         const courses = await readData(dataC);
//         const deleted = courses.filter((c: Course) => c.id !== courseID)

//         await writeData(dataC, deleted);
//         return null
//     } catch (error) {
//         throw new Error('Failed to fetch courses');
//     }
// }