import React from 'react';
import beach from '../Assets/beach.jpg';
import beach2 from '../Assets/beach2.jpg';
import beach3 from '../Assets/beach3.jpg';
import beach4 from '../Assets/beach4.jpg';
import beach5 from '../Assets/beach5.jpg';
import beach6 from '../Assets/beach6.jpg';
// import beach7 from '../Assets/beach7.jpg';


const Places = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
    <h1>PLACES</h1>
    
    <div className='grid grid-rows-2 md:grid-cols-3 py-4 gap-2 md:gap-4'>
        <img className='w-full h-40 object-cover' src={beach} alt="/"/>
        <img className='w-full h-40 object-cover' src={beach2} alt="/"/>
        <img className='w-full h-40 object-cover' src={beach3} alt="/"/>
        <img className='w-full h-40 object-cover' src={beach4} alt="/"/>
        <img className='w-full h-40 object-cover' src={beach5} alt="/"/>
        <img className='w-full h-40 object-cover' src={beach6} alt="/"/>


    </div>

  
</div>
  );
}

export default Places;
