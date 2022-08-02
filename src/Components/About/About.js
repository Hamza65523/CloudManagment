import React from 'react'

const About = () => {
  return (
    <div className='my-20' id='about'>
       <div className="w-[80%] mx-auto my-0">
       <div className="text-center flex flex-col  gap-y-3">
            <h1 className='text-4xl font-bold'>Trusted by developers across the world</h1>
            <p>Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui at adipisicing elit. Qui at harum nulla officiis ipsam atque.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 ">
            <span className='sm:w-[200px] w-full mt-2 text-center text-4xl font-bold text-blue-700 shadow-xl rounded py-4 px-2'>100% <p className='font-normal text-base'>Completion</p></span>
            <span className='sm:w-[200px] w-full mt-2 text-center text-4xl font-bold text-blue-700 shadow-xl rounded py-4 px-2'>24/7 <p className='font-normal text-base'>Delivery</p></span>
            <span className='sm:w-[200px] w-full mt-2 text-center text-4xl font-bold text-blue-700 shadow-xl rounded py-4 px-2'>100K <p className='font-normal text-base'>Transactions</p></span>
        </div>
       </div>
    </div>
  )
}

export default About