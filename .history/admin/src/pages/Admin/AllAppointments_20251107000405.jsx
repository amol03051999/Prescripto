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
    <div className='w-full max-w-6xl m-5'>
      <p >All Appointments</p>
      <div>

        <div>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>
      </div>
    </div>
  )
}

export default AllAppointment