import React, { useContext } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

    const {aToken} = useContext
  return (
    <div>
       <div>
        <img src={assets.admin_logo} alt='admin'/>
        <p></p>
       </div>
    </div>
  )
}

export default Navbar