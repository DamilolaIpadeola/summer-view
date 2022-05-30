import React from 'react'
import SelectCard from './SelectCard';
import beach from '../Assets/beach.jpg';
import beach2 from '../Assets/beach2.jpg';
// import beach3 from '../Assets/beach3.jpg';
// import beach4 from '../Assets/beach4.jpg';
// import beach5 from '../Assets/beach5.jpg';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid px-4 py-16 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
       <SelectCard bg={beach}  text='Elegushi'/>
       <SelectCard bg={beach}  text='Elegushi'/>
       <SelectCard bg={beach}  text='Elegushi'/>
       <SelectCard bg={beach}  text='Elegushi'/>
       <SelectCard bg={beach}  text='Elegushi'/>
       <SelectCard bg={beach}  text='Elegushi'/>
       <SelectCard bg={beach}  text='Elegushi'/>
       <SelectCard bg={beach}  text='Elegushi'/>
      
    </div>
  )
}

export default Selects;
