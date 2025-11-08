import express from 'express';
import doctorsList       from '../../admin/src/pages/Admin/DoctorList';


const doctorRouter = express.Router();

doctorRouter.get('/list',DoctorList)