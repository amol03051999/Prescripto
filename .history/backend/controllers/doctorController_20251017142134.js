
const changeAvailability = async (req,res) => {
  try{

    const {docId} = req.body

    const docData = await do


  }catch(error){
      console.log(error);
    res.json({ success: false, message: error.message });

  }
}

export {changeAvailability}