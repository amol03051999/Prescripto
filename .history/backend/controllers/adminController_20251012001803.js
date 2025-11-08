import validator from 'validator'


// API for adding doctor
const addDoctor = async (req,res) => {

    try{
         const {name, email, password, speciality, degree, experience, about, fees, address} = req.body;
         const imageFile = req.file

//checking for all data to add doctor 
if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){ 
    return res.json({success:false,message:'Missing Details'})
 } 
 // validating email format
 if(!validator.isEmail(email)){
    return res.json({success:false,message:'Please enter a valid email'})
 }

 //validating password
 if()


   }catch (error){

    }
}

export {addDoctor}