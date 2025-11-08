import { useState } from "react";
import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) =>{

  const backendUrl =import.meta.env.VITE_BACKEND_URL

  const [dToken, setDToken] = useState(localStorage.getItem('dToken')? localStorage.getItem('dToken'):'' )

  const [appointments,seAppointments] = useState([]);

  const getAppointment = async () => {
    try{

      const {data} = await axios.get(backendUrl + '/api')

    }catch(error){

    }
  }
    const value = {
      dToken,setDToken,
      backendUrl,

    }
    return(
        <DoctorContext.Provider value={value}>
          {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider