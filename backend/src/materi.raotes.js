import { Router } from 'express';
import * as repo from './materi.repository.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.status(200).json(await repo.semua());
  } catch (err) {
    next(err);a
  }
});

export default router;