import React, { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorAppointments = () => {
  
  const {dToken, appointments, getAppointments} = useContext(DoctorContext);


  return (
    <div>DoctorAppointments</div>
  )
}

export default DoctorAppointments