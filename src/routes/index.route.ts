import { Router } from 'express';

const router = Router();

import authRouter from './auth/index'

router.get('/api', (_req, res) => {
  res.json({ message: '/api funcionando s' });
});

router.use('/auth', authRouter);

export default router;
