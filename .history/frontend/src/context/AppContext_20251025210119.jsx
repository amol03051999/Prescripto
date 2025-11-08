import { createContext } from 'react';
import {doctors} from '../assets/assets';
import axios from 'axios';


export const AppContext = createContext();

const AppContextProvider = (props) => {
    
  const currencySymbol = '$'
  const backendUrl = import.meta.env.VITE_BACKEND_URL
    const value={
       doctors ,currencySymbol
    }

    const getDoctorsData = async () => {
      try{
        const {data} = await axios.get(backendUrl + '/api/doctors/get-doctors')
        if(data.success){
          return data.doctors
        }
        }catch(error){
            console.log("Error while fetching doctors data",error)  
        }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;