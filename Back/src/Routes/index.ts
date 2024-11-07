import { Router } from 'express';

import courseRoutes from './Course-routes';
import moduleRoutes from './Module-routes';
import lessonRoutes from './Lesson-routes';

const router = Router();

router.use('/courses', courseRoutes);           
router.use('/courses', moduleRoutes);           
router.use('/courses', lessonRoutes);  

export default router;