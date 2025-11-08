import React from 'react'
import { useContext } from 'react'

const DoctorProfile = () => {

  const {dToken,profileData, setProfileData, getProfileData} = useContext()
  return (
    <div>DoctorProfile</div>
  )
}

export default DoctorProfile