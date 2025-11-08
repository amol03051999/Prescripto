import { createContext } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) =>{

    const value = {

    }
    return(
        <AdminContextProvider value={value}>
          {props.children}
        </AppContextProvider>
    )
}

export default ApContextProvider