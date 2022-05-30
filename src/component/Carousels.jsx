import React, {useState} from 'react';
import {  BsArrowLeftSquareFill
  , BsArrowRightSquareFill} from 'react-icons/bs'

const sliderData =[
  {
    url: 'https://images.unsplash.com/photo-1611043714658-af3e56bc5299?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    url: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    url: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  }

  
  
];

const Carousels = () => {
const [slide, setSlide] = useState(0)
const lenght = sliderData.length


const prevSlide = () => {
  setSlide(slide === lenght - 1 ? 0 : slide + 1)
}

const nextSlide = () => {
  setSlide( slide ===  0 ? lenght - 1 : slide - 1)
}

  return (
    <div className='max-w-[1240px] mx-auto md:hidden px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-12'/>
      <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-12'/>
      {sliderData.map((item, index)=> 
      <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
        {index === slide && <img className='w-full rounded-md' src={item.url} />}
        </div>)}
    </div>
  );
}

export default Carousels;
