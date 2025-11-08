import React from 'react'
import { useuseContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorDashboard = () => {

  const {dToken,dashData,setDashData,getDashData,} = useContext(DoctorContext);

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