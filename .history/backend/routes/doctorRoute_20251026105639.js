import express from 'express';
import doc


const doctorRouter = express.Router();

doctorRouter.get('/list',DoctorList)