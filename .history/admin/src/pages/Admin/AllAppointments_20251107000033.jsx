import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'

const AllAppointment = () => {

  const {aToken, appointments,getAllAppointments} = useContext(AdminContext);
  return (
    <div>AllAppointment</div>
  )
}

export default AllAppointment