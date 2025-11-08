import React, { useContext } from 'react'

const DoctorAppointments = () => {
  const {dToken, appointments, getAppointments} = useContext(Doctor)
  return (
    <div>DoctorAppointments</div>
  )
}

export default DoctorAppointments