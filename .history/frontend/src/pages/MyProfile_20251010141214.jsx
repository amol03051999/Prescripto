import React, { useState } from 'react'
import { assets } from '../assets/assets';

const MyProfile = () => {

  const [userData,setUseData] = useState({
    name:'Edward Vincet',
    image:assets.profile_pic,
    email:'edwardvincet@gmail.com',
    phone:'+1 234 567 890',
  });
  return (
    <div>
        
    </div>
  )
}

export default MyProfile