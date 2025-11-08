import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react';

const AllAppointment = () => {

  const {aToken, appointments,getAllAppointments} = useContext(AdminContext);

  useEffect(() => {
  return (
    <div>AllAppointment</div>
  )
}

export default AllAppointment