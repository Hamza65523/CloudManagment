import React from "react";
import Supports from "../../img/support.jpg";
import { PhoneIcon } from "@heroicons/react/outline";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { SupportIcon } from "@heroicons/react/outline";
import { ChipIcon } from "@heroicons/react/outline";
const Testamonials = () => {
  return (
    <div className="xxs:mt-[75rem] sm:mt-[50rem] lg:mt-[25rem] xs:mt-[70rem] text-center h-[740px] " >
      <div className="absolute bg-gray-900/90 mix-blend-overlay" >
        <img src={Supports} className='bg-cover  ' alt="" />
      </div>
      <div className="absolute text-white flex flex-col gap-y-2 mt-10 w-full px-2">
        <h4 className="text-lg"> SUPPORT</h4>
        <h1 className="text-4xl font-bold">Finding the right team</h1>
        <p className="xxs:hidden xs:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro
          quibusdam vero pariatur quasi explicabo, autem cumque labore veniam
          deserunt.
        </p>
      </div>
      <div className="relative">
        <div id="testamonials" className=" sm:left-[2rem] sm:top-[25rem] md:top-[33rem] lg:top-[45rem] xxs:top-[12rem] xxs:left-[1rem] xs:top-[12rem] xs:left-[1rem] absolute text-start grid  gap-5  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto my-0 ">      
          <div className="rounded bg-white z-10 shadow-[0px_10px_25px_0px_rgba(0,0,0,0.75)]">
            <div className=" relative  px-5 pt-5 drop-shadow-2xl">
            <PhoneIcon width={30} className='p-1 left-4 -top-4 absolute text-white rounded  bg-blue-700'/>
            <h1 className="mt-2 text-xl font-bold mb-3">Call US</h1>
            <p className="mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus nostrum accusamus libero, fuga aliquid minus. Necessitatibus corporis inventore minus.</p>
            </div>
            <div className="rounded-b bg-zinc-100 font-bold flex gap-x-2 py-2 px-2 text-blue-900">
            <button>Contact US </button>
            <ArrowRightIcon width={15}/>
            </div>
          </div>
          <div className="rounded bg-white z-10 shadow-[0px_10px_25px_0px_rgba(0,0,0,0.75)]">
            <div className=" relative  px-5 pt-5 drop-shadow-2xl">
            <ChipIcon width={30} className='p-1 left-4 -top-4 absolute text-white rounded  bg-blue-700'/>
            <h1 className="mt-2 text-xl font-bold mb-3">Sales</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus nostrum accusamus libero, fuga aliquid minus. Necessitatibus corporis inventore minus.</p>
            </div>
            <div className="rounded-b bg-zinc-100 font-bold flex gap-x-2 py-2 px-2 text-blue-900">
            <button>Contact US </button>
            <ArrowRightIcon width={15}/>
            </div>
          </div>
          <div className="rounded bg-white z-10 shadow-[0px_10px_25px_0px_rgba(0,0,0,0.75)]">
            <div className=" relative  px-5 pt-5 drop-shadow-2xl">
            <SupportIcon width={30} className='p-1 left-4 -top-4 absolute text-white rounded  bg-blue-700'/>
            <h1 className="mt-2 text-xl font-bold mb-3">Support</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus nostrum accusamus libero, fuga aliquid minus. Necessitatibus corporis inventore minus.</p>
            </div>
            <div className="rounded-b bg-zinc-100 font-bold flex gap-x-2 py-2 px-2 text-blue-900">
            <button>Contact US </button>
            <ArrowRightIcon width={15}/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Testamonials;
