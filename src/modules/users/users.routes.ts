import express from 'express';
import { userController } from './users.controller';


const router = express.Router();

router.post('/auth/signup', userController.signUp)
router.get('/users', userController.getAllUser)

export const userRoutes = router;