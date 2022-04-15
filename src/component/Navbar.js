import React from 'react'
import Logo from '.././assets/logo.jpg'
import {FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-between h-[80px] items-center px-4 bg-[#0a192f] text-gray-3">
        <img src={Logo} alt="Logo" style={{width:'50px'}} />
    </div>
  )
}

export default Navbar