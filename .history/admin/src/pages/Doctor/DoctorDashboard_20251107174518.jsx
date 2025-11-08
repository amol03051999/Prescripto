import React from 'react'
import { useEffect,useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorDashboard = () => {

  const {dToken,dashData,setDashData,getDashData,} = useContext(DoctorContext);

  useEffect(()=>{
    if(dToken){
      getDashData()
    }
  },[dToken])



  return dashData && (
    <div>DoctorDashboard</div>
  )
}

export default DoctorDashboard