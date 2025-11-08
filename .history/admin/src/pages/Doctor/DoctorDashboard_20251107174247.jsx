import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorDashboard = () => {

  const {dashData,setDashData,getDashData,} = useContext(DoctorContext);
  



  return (
    <div>DoctorDashboard</div>
  )
}

export default DoctorDashboard