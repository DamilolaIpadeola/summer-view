import React from 'react'
import SelectCard from './SelectCard';
import beach from '../Assets/beach.jpg';
import tarkwa from '../Assets/tarkwa.jpg';
import atican from '../Assets/atican.jpg';
import eleko from '../Assets/eleko.jpg';
import landmark from '../Assets/landmark.jpg';
import ibeno from '../Assets/ibeno.jpg';
// import beach5 from '../Assets/beach5.jpg';

const Selects = () => {
  return (
    <div>
      <h1 className='text-center mt-24'>Top 6 Beaches in Nigeria</h1>
    <div className='max-w-[1240px] mx-auto grid px-4 py-4 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      
       <SelectCard bg={tarkwa}  text='Takwa Bay Beach'/>
       <SelectCard bg={atican}  text='Atican Beach'/>
       <SelectCard bg={eleko}  text='Eleko Beach'/>
       <SelectCard bg={landmark}  text='Landmark Beach'/>
       <SelectCard bg={ibeno}  text='Ibeno Beach'/>
       <SelectCard bg={beach}  text='Elegushi'/>
   
      
    </div>
    </div>
  )
}

export default Selects;
