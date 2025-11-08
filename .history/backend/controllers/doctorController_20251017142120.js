
const changeAvailability = async (req,res) => {
  try{

    const {docId} = req.body


  }catch(error){
      console.log(error);
    res.json({ success: false, message: error.message });

  }
}

export {changeAvailability}