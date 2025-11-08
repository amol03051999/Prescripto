import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext';

const DoctorProfile = () => {

  const {dToken,profileData, setProfileData, getProfileData} = useContext(DoctorContext);
  const {currency,backendUrl} = useContext(AppContext);

  useEffect(())



  return (
    <div>DoctorProfile</div>
  )
}

export default DoctorProfile