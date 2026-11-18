import { Router } from 'express';
import { semua } from './materi.repository.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const materi = await semua();
res.json(materi);
  } catch (error) {
    next(error);
  }
});

export default router;