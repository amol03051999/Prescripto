


//API to register user
const registerUser = async (req,res) =>{
    try{

        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.json({success:false,message:'Missing Details'})
        }

        

    }catch(error){

    }
}