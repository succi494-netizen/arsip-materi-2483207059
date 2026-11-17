import { Router } from 'express';
import { semua } from './materi.repository.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await semua();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;