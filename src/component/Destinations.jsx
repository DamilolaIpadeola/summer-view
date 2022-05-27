import React from 'react'
import beach from '../Assets/beach.jpg';
import beach2 from '../Assets/beach2.jpg';
import beach3 from '../Assets/beach3.jpg';
import beach4 from '../Assets/beach4.jpg';
import beach5 from '../Assets/beach5.jpg';
// import beach6 from '../Assets/beach6.jpg';
// import beach7 from '../Assets/beach7.jpg';


const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All Inclusive Resort</h1>
        <p className='mt-2'>On the Nigeria's best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={beach} alt="/"/>
            <img className='w-full h-full object-cover' src={beach2} alt="/"/>
            <img className='w-full h-full object-cover' src={beach3} alt="/"/>
            <img className='w-full h-full object-cover' src={beach4} alt="/"/>
            <img className='w-full h-full object-cover' src={beach5} alt="/"/>


        </div>

      
    </div>
  )
}

export default Destinations
 
