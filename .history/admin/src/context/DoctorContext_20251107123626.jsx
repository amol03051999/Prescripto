import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) =>{

  const backendUrl =import.meta.env.

    const value = {

    }
    return(
        <DoctorContext.Provider value={value}>
          {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider