import React, { useContext } from 'react'

const DoctorAppointments = () => {
  const {dToken, appointments, getAppointments} = useContext(D)
  return (
    <div>DoctorAppointments</div>
  )
}

export default DoctorAppointments