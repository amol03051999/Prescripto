import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {
  
  const {doctors,aToken,getAllDoctors} = useContext(AdminContext)

  useEffect(()=>{

  },[aToken])
  return (
    <div>

    </div>
  )
}

export default DoctorList