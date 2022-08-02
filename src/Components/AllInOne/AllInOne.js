import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
const AllInOne = () => {
  let data = [
    {
      title:"Notifications",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem adomnis consequatur."
    },
    {
      title:"Notifications",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem adomnis consequatur."
    },
    {
      title:"Notifications",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem adomnis consequatur."
    },
    {
      title:"Notifications",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem adomnis consequatur."
    },
    {
      title:"Notifications",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem adomnis consequatur."
    },
    {
      title:"Notifications",
      text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem adomnis consequatur."
    },
  ]
  return (
    <div id="allinone">
      <div className="space-y-4 mt-64 w-[90%] mx-auto my-0">
        <h1 className="text-center text-4xl font-bold">All In one Platform</h1>
        <p className="text-center mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ad
          omnis consequatur.
        </p>
        <div className="px-8 mx-auto my-0 w-[90%] grid grid-cols-1  sm:grid-cols-2 gap-x-0 gap-y-4  sm:gap-x-10">
        {data.map((items,index)=>(<div key={index} className="relative ">
            <div className="absolute -left-10">
              <CheckIcon width={30} className="text-green-400" />
            </div>
            <h1 className="font-bold">{items.title}</h1>
            <p>{items.text}</p>
          </div>))}
   
       </div>
      </div>
    </div>
  );
};

export default AllInOne;
