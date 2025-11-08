import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorProfile = () => {

  const {dToken,profileData, setProfileData, getProfileData} = useContext(DoctorContext)
  return (
    <div>DoctorProfile</div>
  )
}

export default DoctorProfile