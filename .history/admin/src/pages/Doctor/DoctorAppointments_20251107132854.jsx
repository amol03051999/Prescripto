import React, { useContext } from 'react'

const DoctorAppointments = () => {
  const {dToken, appointments, getAppointments} = useContext(Doct)
  return (
    <div>DoctorAppointments</div>
  )
}

export default DoctorAppointments