import { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = '$'
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [doctors, setDoctors] = useState([])

  const getDoctorsData = useCallback(async () => {
    if (!backendUrl) return;
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`)
      if (data.success) {
        setDoctors(data.doctors)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error('Error while fetching doctors data', error)
      toast.error(error.message)
    }
  }, [backendUrl])

  useEffect(() => {
    getDoctorsData()
  }, [getDoctorsData])

  const value = useMemo(() => ({
    doctors,
    setDoctors,
    currencySymbol,
    getDoctorsData,
    backendUrl
  }), [doctors, currencySymbol, getDoctorsData, backendUrl])

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;