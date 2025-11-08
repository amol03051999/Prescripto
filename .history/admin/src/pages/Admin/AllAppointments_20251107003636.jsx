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
      <p className='mb-3 text-lg font-medium'>All Appointments</p>
      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>

        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>
       {appointments.map((item, index) => (
          <div 
            key={item._id || index}
            className={`
              sm:grid ${gridColumns} items-center
              flex flex-wrap gap-2 sm:gap-0
              py-3 px-6 border-b
              hover:bg-gray-50 transition-colors
              text-gray-600
            '}
          >
            <p className='max-sm:hidden'>{index + 1}</p>
            <div className='flex items-center gap-2 min-w-[200px] sm:min-w-0'>
              <img 
                className='w-8 h-8 rounded-full object-cover'
                src={item.userData.image} 
                alt={`${item.userData.name}'s profile`} 
              />
              <p>{item.userData.name}</p>
            </div>
            {/* Add other appointment details here */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointment