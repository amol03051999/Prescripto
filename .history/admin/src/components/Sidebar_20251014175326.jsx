import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

    const {aToken} = useContext(AdminContext)


  return (
    <div>
      {
        aToken && <ul>
            <NavLink>
                <img src={assets.home_icon} />
            </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar