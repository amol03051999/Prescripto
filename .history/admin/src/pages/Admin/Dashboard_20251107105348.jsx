import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react';

const Dashboard = () => {

  const {aToken, getDashData, dashData} = useContext(AdminContext);

  useEffect(() => {
    if(aToken){
      getDashData();
    }
  },[aToken])

  return dashData && (
    <div className='m-5'>
<div>
  <div>
    <img src/>
  </div>
</div>
    </div>
  )
}

export default Dashboard