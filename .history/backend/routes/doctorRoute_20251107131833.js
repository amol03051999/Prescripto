import express from 'express';
import { doctorList, loginDoctor, appointmentsDoctor } from '../controllers/doctorController.js';
import auth

const doctorRouter = express.Router();

doctorRouter.get('/list',doctorList);
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',auth)





export default doctorRouter;