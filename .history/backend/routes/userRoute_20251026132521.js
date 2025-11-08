import express from 'express';
import { registerUser,logi } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser);





export default userRouter;