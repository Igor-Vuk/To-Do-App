'use strict';

import { Router } from 'express';
import todos from './routes/todos';

const router = Router();

router.use('/todos', todos);

export default router;
