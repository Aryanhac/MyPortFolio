import React,{useState} from 'react'
import Logo from '.././assets/logo.jpg'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Navbar = () => {
  const [nav,setNav]=useState(true);
  const clickNav=()=>{
    setNav(!nav);
  }
  return (
  
    <div className="fixed w-full flex justify-between h-[80px] items-center px-4 bg-[#0a192f] text-gray-50 ">
        <img src={Logo} alt="Logo" style={{width:'50px'}} />
        {/* menu */}
        <ul className='hidden md:flex  font-bold '>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        {/* Humburger */}
        <div onClick={clickNav} className='md:hidden z-20'>
          {nav?<FaBars></FaBars>:<FaTimes></FaTimes>}
        </div>
        {/* MobileMenu */}
        <ul className={!nav?"absolute top-0 left-0 w-full h-screen flex flex-col bg-[#0a192f] justify-center items-center":"hidden"}>
          <li className="py-4 text-5xl">Home</li>
          <li className="py-4 text-5xl">About</li>
          <li className="py-4 text-5xl">Skills</li>
          <li className="py-4 text-5xl">Work</li>
          <li className="py-4 text-5xl">Contact</li>
        </ul>
        {/* social icons */}
        <div className="hidden left-0 top-[35%] lg:flex flex-col fixed">
          <ul>
            <li className="ml-[-100px] hover:ml-[-10px] flex flex-col duration-300 justify-center items-center w-[160px] h-[60px] bg-blue-500 ">
              <a  className="flex justify-between w-full items-center" href="/">Linkedin <FaLinkedin size={30}/></a>
            </li>
            <li className="ml-[-100px] hover:ml-[-10px] flex flex-col duration-300 justify-center items-center w-[160px] h-[60px] bg-[#333333] ">
              <a  className="flex justify-between w-full items-center" href="/">GitHub <FaGithub size={30}/></a>
            </li>
            <li className="ml-[-100px] hover:ml-[-10px] flex flex-col duration-300 justify-center items-center w-[160px] h-[60px] bg-[#6fc2b0] ">
              <a  className="flex justify-between w-full items-center" href="/">Email <HiOutlineMail size={30}/></a>
            </li>
            <li className="ml-[-100px] hover:ml-[-10px] flex flex-col duration-300 justify-center items-center w-[160px] h-[60px] bg-[#565f69] ">
              <a  className="flex justify-between w-full items-center" href="/">Resume <BsFillPersonLinesFill size={30}/></a>
            </li>
          </ul>
        </div>
    </div>

  
  
  )
}

export default Navbar