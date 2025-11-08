import React from 'react'
import { useContext } from 'react'

const AllAppointment = () => {

  const {aToken, appointments,getAllAppointments} = useContext(AdminContext);
  return (
    <div>AllAppointment</div>
  )
}

export default AllAppointment