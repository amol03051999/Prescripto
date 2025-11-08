import jwt from 'jsonwebtoken'

//doctor authentication middleware

const authDoctor = async (req,res,next) => {
    try{

        const {dtoken} = req.headers
        if(!dtoken){
            return res.json({success:false,message:'Not Authorized Login Again'})
        }

          if (!req.body) {
            req.body = {}
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()

    }catch(error){
    console.log(error);
   return res.json({ success: false, message: error.message });
    }
}

export default authDoctor