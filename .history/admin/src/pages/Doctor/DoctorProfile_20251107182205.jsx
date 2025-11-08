import React from 'react'
import { useContext } from 'react'

const DoctorProfile = () => {

  const {dToken,profileData, setProfileData, getProfileData} = useContext(Doct)
  return (
    <div>DoctorProfile</div>
  )
}

export default DoctorProfile