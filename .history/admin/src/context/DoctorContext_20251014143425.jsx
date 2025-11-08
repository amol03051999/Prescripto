import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) =>{

    const value = {

    }
    return(
        <AppContextProvider value={value}>
          {props.children}
        </AppContextProvider>
    )
}

export default DoctorContextProvider