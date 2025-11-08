import validator from 'validator';


//API to register user
const registerUser = async (req,res) =>{
    try{

        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.json({success:false,message:'Missing Details'})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:'Invalid Email'})
        }

        if(password.lemgth < 8){
            return re
        }



    }catch(error){

    }
}