import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'

const Dashboard = () => {

  const {aToken, getDashData, dashData} = useContext(AdminContext);
  return (
    <div>

    </div>
  )
}

export default Dashboard