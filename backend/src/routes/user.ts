import express from 'express';
import { getMe } from '../controllers/user';
import { protect } from '../middleware/auth';

const router = express.Router();

router.get('/me', protect, getMe);

export default router;