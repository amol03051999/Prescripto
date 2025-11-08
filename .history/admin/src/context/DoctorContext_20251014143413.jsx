import { createContext } from "react";

export const DoctorContext = createContext();

const AppContextProvider = (props) =>{

    const value = {

    }
    return(
        <AppContextProvider value={value}>
          {props.children}
        </AppContextProvider>
    )
}

export default AppContextProvider