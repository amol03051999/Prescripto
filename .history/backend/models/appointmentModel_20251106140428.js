import monggose from 'mongoose';

const appointmentSchema = new monggose.Schema({
    userId : {type:String, required:true},
    doctorId : {type:String, required:true},
    slotDate : {type:String, required:true},
})