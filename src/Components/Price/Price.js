import React from "react";
import {CheckIcon} from '@heroicons/react/outline'
const Price = () => {
  let data = [
    {
      standard:"Basix",
      price:69,
      title:"Lorem ipsum dolor sit amet consectetur adip",
      text:"Lorem ipsum dolor sit amet."
    },
    {
      standard:"Standard",
      price:79,
      title:"Lorem ipsum dolor sit amet consectetur adip",
      text:"Lorem ipsum dolor sit amet."
    },
    {
      standard:"Premium",
      price:89,
      title:"Lorem ipsum dolor sit amet consectetur adip",
      text:"Lorem ipsum dolor sit amet."
    },
    
  ]
  return (
    <div className="relative mt-[5rem]" id="pricing">
      <div className=" h-72 space-y-2 py-4 px-2 text-white bg-blue-900 text-center my-8">
        <h2 className="">PRICING</h2>
        <h1 className="text-2xl font-bold">The right price for research.</h1>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          officiis quos hic adipisci ut dignissimos at? Facere repellendus
          voluptate eius.
        </p>
      </div>
      <div className="absolute top-40 w-full grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((items,index)=>(
          <div key={index} className="mt-8 bg-white rounded-lg shadow-[-2px_13px_20px_2px_rgba(0,0,0,0.75);] w-[95%] px-4 py-4 mx-auto my-0">
          <div className="">
            <p className="text-center w-24 bg-blue-300 text-blue-700 py-1 px-1 rounded-2xl">STANDARD</p>
            <span className="flex items-end gap-1 mt-1 mb-4">
              <h1 className="text-4xl font-bold">${items.price}</h1> <p className="">/mo</p>
            </span>
            <p className="mb-4 font-bold">{items.title}</p>
          </div>
          <div className="space-y-2">
            <p className="flex"><CheckIcon width={30} className="text-green-400" />{items.text}</p>
            <p className="flex"><CheckIcon width={30} className="text-green-400" />{items.text}</p>
            <p className="flex"><CheckIcon width={30} className="text-green-400" />{items.text}</p>
            <p className="flex"><CheckIcon width={30} className="text-green-400" />{items.text}</p>
            
          </div>
          <button className="mt-4 w-full rounded py-2 px-2 text-white bg-black">Get Started</button>
        </div>
        ))}
       
      </div>
    </div>
  );
};

export default Price;
