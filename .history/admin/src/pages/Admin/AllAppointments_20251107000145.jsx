import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react';

const AllAppointment = () => {

  const {aToken, appointments,getAllAppointments} = useContext(AdminContext);

  useEffect(() => {
    if(aToken){
      getAllAppointments();
    }
  }, [aToken]);
  return (
    <div>
      <p>All Appointments</p>
      <div>

        <div
      </div>
    </div>
  )
}

export default AllAppointment