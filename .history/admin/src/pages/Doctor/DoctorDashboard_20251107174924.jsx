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
    <div className='m-5'>

    </div>
  )
}

export default DoctorDashboard