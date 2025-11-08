import express from 'express';
import DoctorList from '../../admin/src/pages/Admin/DoctorList';

const doctorRouter = express.Router();

doctorRouter.get('/list')