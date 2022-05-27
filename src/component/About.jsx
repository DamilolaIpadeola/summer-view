import React from 'react';
import {RiCustomerService2Fill } from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';

const About = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACATION FOR TWO PEOPLE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequatur aliquid esse dolores 
                    ipsum accusamus iusto ab ut omnis tempore. Quia cum quis quasi dolore possimus
                     sed quaerat sequi asperiores minus?
                     sed quaerat sequi asperiores minus?
                     sed quaerat sequi asperiores minus?
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'><button> 
                    <RiCustomerService2Fill size={50}/></button>
                <div>
                    <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL INCLUSIVE COMPANY FOR 20YEARS</p></div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><MdOutlineTravelExplore size={50}/> </button>
                    <div>
                    <h3 className='py-2 '>LEADING SERVICE</h3>
                <p className='py-1'>ALL INCLUSIVE COMPANY FOR 20YEARS</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='border text-center '>
                <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label>Desination</label>
                    <select className='border rounded-md p-2' >
                        <option>Grande Antigua</option>
                        <option>Grande Antigua</option>
                        <option>Grande Antigua</option>
                        <option>Grande Antigua</option>
                    </select>
                </div>

                <div  className='flex flex-col my-4'>
                    <label>check-in </label>
                    <input className='border rounded-md p-2' type="date"/>
                </div>
                <div  className='flex flex-col my-2'>
                    <label>check-out </label>
                    <input className='border rounded-md p-2' type="date"/>
                </div>
                <button className='w-full '>Rate & Availabilities</button>

            </form>
        </div>
      
    </div>
  );
}

export default About;
