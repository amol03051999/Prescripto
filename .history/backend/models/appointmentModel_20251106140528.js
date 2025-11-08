import monggose from 'mongoose';

const appointmentSchema = new monggose.Schema({
    userId : {type:String, required:true},
    doctorId : {type:String, required:true},
    slotDate : {type:String, required:true},
    slotTime : {type:String, required:true},
    userData : {type:Object, required:true},
    docData : {type:Object, required:true},
    amount : {}
     // Scheduled, Completed, Cancelled
}, {timestamps:true})
})