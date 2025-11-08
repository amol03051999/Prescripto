


// API for adding doctor
const addDoctor = async (req,res) => {

    try{
         const {name, email, password, speciality, degree, experience, about, fees, address} = req.body;
         const imageFile = req.file
,message
         //checking for all data to add doctor
         if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success:false})

         }
    }catch (error){

    }
}

export {addDoctor}