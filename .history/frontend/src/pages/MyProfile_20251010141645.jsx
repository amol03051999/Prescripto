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
    dob:'2000-01-21'
  });

   const [isEdit,setIsEdit] = useState(false);

  return (
    <div>
        <img src={userData.image}/>

        {
          isEdit 
          ? <input type='text' onChange={e => setUseData(prev => ({...prev}))}/>
          :<p>{userData.name}</p>
        }
    </div>
  )
}

export default MyProfile