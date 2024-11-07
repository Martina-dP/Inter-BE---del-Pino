import { Router } from 'express';

import getCourse from "./Course-routes";
import getCourseByID from "./Course-routes";
import postCourse from "./Course-routes";
import putCourse from "./Course-routes";
import deleteCourse from "./Course-routes";

import getModules from "./Module-routes";
import getModulesByID from "./Module-routes";
import postModules from "./Module-routes";
import putModules from "./Module-routes";
import deleteModules from "./Module-routes";

import getLessons from "./Lesson-routes";
import getLessonsByID from "./Lesson-routes";
import postLessons from "./Lesson-routes";
import putLessons from "./Lesson-routes";
import deleteLessons from "./Lesson-routes";

const router = Router();

router.use('/courses', getCourse);
router.use('/courses/:courseId', getCourseByID);
router.use('/courses', postCourse);
router.use('/courses/:courseId', putCourse);
router.use('/courses/:courseId', deleteCourse);

router.use('/courses/:courseId/modules', getModules);
router.use('/courses/:courseId/modules/:moduleId', getModulesByID);
router.use('/courses/:courseId/modules', postModules);
router.use('/courses/:courseId/modules/:moduleId', putModules);
router.use('/courses/:courseId/modules/:moduleId', deleteModules);

router.use('/courses/:courseId/modules/:moduleId/lessons', getLessons);
router.use('/courses/:courseId/modules/:moduleId/lessons/:lessonId', getLessonsByID);
router.use('/courses/:courseId/modules/:moduleId/lessons', postLessons);
router.use('/courses/:courseId/modules/:moduleId/lessons/:lessonId', putLessons);
router.use('/courses/:courseId/modules/:moduleId/lessons/:lessonId', deleteLessons);

export default router;