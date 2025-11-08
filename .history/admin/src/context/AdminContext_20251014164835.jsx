import { createContext } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) =>{

  const [a]

    const value = {

    }
    return(
        <AdminContext.Provider value={value}>
          {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider