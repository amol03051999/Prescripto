import express from 'express';
import do


const doctorRouter = express.Router();

doctorRouter.get('/list',doctorList);





export default doctorRouter;