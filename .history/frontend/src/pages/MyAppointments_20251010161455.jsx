import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const MyAppointments = () => {

  const {doctors} = useContext(AppContext);
  return (
    <div>
    <p>My Appointment</p>
    <div>
    {
      
    }

    </div>
        
    </div>
  )
}

export default MyAppointments