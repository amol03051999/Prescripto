import jwt from 'jsonwebtoken'

//admin authentication middleware

const authAdmin = async (req,res) => {
    try{

        const {atoken} = req.heaf

    }catch(error){
    console.log(error);
    res.json({ success: false, message: error.message });
    }
}

export default authAdmin