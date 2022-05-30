import React from 'react';

const SelectCard = (props) => {
  return (
    <div className='relative'>
            <img className='w-full h-full object-cover' src={props.bg} alt='/'/>
            <div className='bg-gray-90/30 absolute top-0 left-0 w-full h-full'>
              <p className=' text-1xl text-black absolute font-bold'>{props.text} </p>
            </div>

        </div>
  );
}

export default SelectCard;
