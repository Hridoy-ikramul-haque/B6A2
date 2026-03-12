import express from 'express';
import { Router } from 'express';
import { authController } from './auth.controller';
import auth from '../../middleware/auth';

const router = Router();

router.post('/signin', auth(), authController.login)

export const authRoutes = router; 