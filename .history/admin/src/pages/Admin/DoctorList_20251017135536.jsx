import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {
  
  const {doctors,aToken,getAllDoctors} = useContext(AdminContext)

  useEffect(()=>{
    if(aToken){
      getAllDoctors();
    }

  },[aToken])
  return (
    <div>
    <h1>All Doctors</h1>
    <div>
      {
        doctors.map((item,index)=>(
          <div>
            <img src={item.image} />
          </div>
        ))
      }
    </div>

    </div>
  )
}

export default DoctorList