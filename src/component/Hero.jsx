import React from 'react'
import beachvideo from '../Assets/beachvideo.mp4';
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-ful h-screen relative'>
      <video className='w-full h-full object-cover' 
      autoPlay
      loop
      muted
      src={beachvideo}/>
      <div className='absolute w-full h-full top-0 left-0'></div>
      <div className='absolute top-0 w-full text-center h-full flex flex-col justify-center text-white p-4'>
        <h1>Holiday Special</h1>
        <h2 className='mt-3'>First Class beach in Lagos Nigeria</h2>
        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90 '>
          <div>
            <input className='bg-transparent w-[300px] sm:w-[400px] font-[Gabriela] focus:outline-none' type='text' placeholder='Search Bars & Restaurant'/>
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} className="icon" style={{color: '#ffffff'}}/>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero;
