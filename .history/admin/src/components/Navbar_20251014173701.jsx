import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'

const Navbar = () => {

    const {aToken} = useContext(AdminContext)
  return (
    <div className='flex j'>
       <div>
        <img src={assets.admin_logo} alt='admin'/>
        <p>{aToken ? 'Admin' : 'Doctor'}</p>
       </div>
       <button>Logout</button>
    </div>
  )
}

export default Navbar