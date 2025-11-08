import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorAppointments = () => {
  
  const {dToken, appointments, getAppointment} = useContext(DoctorContext);

  useEffect(()=>{
    if(dToken){
      getAppointment()
    }
  },[dToken])

  return (
    <div>
      <p>All Appointments</p>
    </div>
  )
}

export default DoctorAppointments