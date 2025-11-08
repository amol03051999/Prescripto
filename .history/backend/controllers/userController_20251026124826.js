import validator from 'validator';
import bcrypt from 'bcrypt';



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

        if(password.length < 8){
            return res.json({success:false,message:'Password must be at least 8 characters long'})
        }

       //hashing user password
       const salt




    }catch(error){

    }
}