import React from 'react'
import { useContext } from 'react'

const DoctorDashboard = () => {

  const {dashData,setDashData,getDashData,} = useContext(Doctor)



  return (
    <div>DoctorDashboard</div>
  )
}

export default DoctorDashboard