import express from 'express';
import 


const doctorRouter = express.Router();

doctorRouter.get('/list',DoctorList)