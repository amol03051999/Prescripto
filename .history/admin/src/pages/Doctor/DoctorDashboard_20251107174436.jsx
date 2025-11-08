import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorDashboard = () => {

  const {dTdashData,setDashData,getDashData,} = useContext(DoctorContext);

  useEffect(()=>{
    if(dToken){
      getDashData()
    }
  },[dToken])



  return (
    <div>DoctorDashboard</div>
  )
}

export default DoctorDashboard