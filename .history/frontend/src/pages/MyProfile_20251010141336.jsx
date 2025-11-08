import React, { useState } from 'react'
import { assets } from '../assets/assets';

const MyProfile = () => {

  const [userData,setUseData] = useState({
    name:'Edward Vincet',
    image:assets.profile_pic,
    email:'edwardvincet@gmail.com',
    phone:'+1 234 567 890',
    address:{
      line1:'1234 Elm Street',
      line2:'Circle, Church Road, London'
    },
    gender:'Male',
    
  });
  return (
    <div>
        
    </div>
  )
}

export default MyProfile