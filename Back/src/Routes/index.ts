const { Router } = require('express');

import getData from "./get";

const router = Router();

router.use('/', getData);

export default router;