import express from 'express';
import { doctorList, login } from '../controllers/doctorController.js';


const doctorRouter = express.Router();

doctorRouter.get('/list',doctorList);





export default doctorRouter;