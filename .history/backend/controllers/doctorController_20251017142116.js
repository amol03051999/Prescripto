
const changeAvailability = async (req,res) => {
  try{

    const {docId} = r


  }catch(error){
      console.log(error);
    res.json({ success: false, message: error.message });

  }
}

export {changeAvailability}