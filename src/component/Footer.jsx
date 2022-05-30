import React from 'react';
import {FaFacebook, FaInstagram, FaPinterest, FaYoutube,FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
      <div className='w-full bg-gray-100 py-16'>
    <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
            <h1>SUMMER VIEW</h1>
           
            <div className='flex justify-between w-full sm:max-w-[200px] my-4'>
            <FaFacebook className='icon'/>
              <FaTwitter className='icon'/>
              <FaYoutube className='icon'/>
              <FaPinterest className='icon'/>
              <FaInstagram className='icon'/>
            </div>
        </div>
      <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Vacation</li>
            <li>Booking</li> 
          </ul>

          <ul className='lg:flex text-right'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Vacation</li>
            <li>Booking</li> 
          </ul>
      </div>
    </div>
    </div>
  );
}

export default Footer;
