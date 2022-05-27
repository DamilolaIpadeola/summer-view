import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaInstagram, FaPinterest, FaYoutube,FaTwitter} from 'react-icons/fa';




const Navbar = () =>  {
  const [nav, setNav] = useState(false);

  const [logo, setLogo] = useState(false)

    const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
    };

   return (
      <div className='flex justify-between items-center h-20 px-4 absolute z-10 text-white w-full'>
          <div >
              <h1 onClick={handleNav}  className={logo ? 'hidden' : 'block'}>SUMMER </h1>
          </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Vacation</li>
            <li>Booking</li>
        </ul>
        <div className='hidden md:flex '>
            <BiSearch className='mr-2' size={20}/>
            <BsPerson size={20}/>
        </div>

        {/* hamburger */}
        <div onClick ={handleNav} className='md:hidden z-10'>
          {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
        </div>

        {/* mobile menu dropdown */}
        <div  onClick ={handleNav} className={nav ? ' text-black absolute left-0 top-0 w-full bg-gray-100/80 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1>SUMMER</h1>
          <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Vacation</li>
            <li>Booking</li>
            <div className='flex flex-col'>
            <button className='my-6'>search</button>
            <button>Account</button>
            </div>
            <div className='flex justify-between mt-8'>
              <FaFacebook className='icon'/>
              <FaTwitter className='icon'/>
              <FaYoutube className='icon'/>
              <FaPinterest className='icon'/>
              <FaInstagram className='icon'/>
            </div>
          </ul>
        </div>
      </div>
    )
  
}

export default Navbar
