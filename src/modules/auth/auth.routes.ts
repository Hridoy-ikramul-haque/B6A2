import express from 'express';
import { Router } from 'express';
import { authController } from './auth.controller';

const router = Router();

router.post('/signin', authController.login)

export const authRoutes = router; 