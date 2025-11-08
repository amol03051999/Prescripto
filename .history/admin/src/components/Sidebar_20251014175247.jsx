import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {

    const {aToken} = useContext(AdminContext)


  return (
    <div>
      {
        aToken && <ul>
            <N
        </ul>
      }
    </div>
  )
}

export default Sidebar