import React, { useContext } from 'react'

const DoctorAppointments = () => {
  const {dToken, appointments, getAppointments} = useContext(DoctorC)
  return (
    <div>DoctorAppointments</div>
  )
}

export default DoctorAppointments