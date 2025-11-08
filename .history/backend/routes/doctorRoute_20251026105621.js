import express from 'express';
import d from '../../admin/src/pages/Admin/DoctorList';


const doctorRouter = express.Router();

doctorRouter.get('/list',DoctorList)