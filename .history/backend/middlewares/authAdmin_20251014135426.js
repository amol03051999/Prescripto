import jwt from 'jsonwebtoken'

//admin authentication middleware

const authAdmin = async (req,res) => {
    try{

        const {atoken} = req.headers
        if(!atoken){
            return res.json({sucess:false,message:'Not Authorized '})
        }

    }catch(error){
    console.log(error);
    res.json({ success: false, message: error.message });
    }
}

export default authAdmin