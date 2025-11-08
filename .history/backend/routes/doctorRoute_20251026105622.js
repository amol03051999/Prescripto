import express from 'express';
import do from '../../admin/src/pages/Admin/DoctorList';


const doctorRouter = express.Router();

doctorRouter.get('/list',DoctorList)