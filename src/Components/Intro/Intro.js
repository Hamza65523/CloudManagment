import React from "react";
import Cyber from "../../img/cyber-bg.png";
import {
  CloudUploadIcon,
  DatabaseIcon,
  ServerIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

const Intro = () => {

  return (
    <div className="bg-zinc-200 py-10" id="home">
      <div className="grid sm:grid-cols-2 sm:w-[80%] sm:gap-0 gap-10 mx-auto py-28 justify-between w-[90%]">
        <div className="flex flex-col justify-center items-start max-w-[1200px]">
          <span className=" font-medium">Uniqure Sequencing & Production</span>
          <span className=" font-bold text-5xl">
            Cloud <br /> Management
          </span>
          <span className="mt-2 font-medium">This is our tech brand.</span>
          <button className="mt-2 w-60 rounded py-1 bg-blue-700 text-white">
            Get Started
          </button>
        </div>
        <div className="">
          <img src={Cyber} alt="this is img" />
        </div>
      </div>
      <div className=" transition-all  bg-zinc-100 sm:hover:-translate-x-14 sm:hover:-translate-y-14  sm:transition rounded-md px-10 py-5 gap-y-4 flex flex-col w-[70%] mx-auto my-0 py-  shadow-lg">
        <div className=" text-center font-bold text-xl">
          <h1>Data Services</h1>
        </div>
        <div className="flex gap-x-10 flex-wrap sm:justify-between justify-center gap-y-4">
          <span className="gap-2 flex justify-center items-center  w-[8.6rem]">
            <CloudUploadIcon className="w-10 text-blue-700" />App Security
          </span>
          <span className="gap-2 flex justify-center items-center leading-[20px] w-[8.6rem]">
            <DatabaseIcon className="w-10 text-blue-700" />
            Dashboard Design
          </span>
          <span className="gap-2 flex justify-center items-center leading-[20px] w-[8rem]">
            <ServerIcon className="w-10 text-blue-700" />
            Cloud Data
          </span>
          <span className="gap-2 flex justify-center items-center leading-[20px] w-[8.6rem]">
            <PaperAirplaneIcon className="w-10 text-blue-700" />
            API Services
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
