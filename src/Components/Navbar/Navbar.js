import React,{useState} from "react";
import { Link } from 'react-scroll/modules';
import {MenuIcon} from "@heroicons/react/outline";
const Navbar = () => {
  const [menuList,setMenuList] = useState(false)
  return (
    <div className="w-screen ">
      <div className="z-40 fixed top-0 w-full flex items-center py-4 px-1 shadow-lg bg-zinc-200 sm:bg-white">
        <div className="logo text-3xl font-bold sm:capitalize uppercase sm:pl-0 pl-2">Brand.</div>
        <nav className="flex justify-between mr-2 w-[100%] ">
          <ul className="sm:flex  items-center hidden">
            <Link spy={true} smooth={true} activeClass="activeClass" to='home'><li className="ml-5 text-base font-medium">Home</li></Link>
            <Link spy={true} smooth={true} to='about'><li className="ml-5 text-base font-medium">About</li></Link>
            <Link spy={true} smooth={true} to='testamonials'><li className="ml-5 text-base font-medium">Support</li></Link>
            <Link spy={true} smooth={true} to='allinone'><li className="ml-5 text-base font-medium">Platforms</li></Link>
            <Link spy={true} smooth={true} to='pricing'><li className="ml-5 text-base font-medium">Pricing</li></Link>
          </ul>
          <div className="sm:flex list-none items-center  hidden">
            <li className="ml-4 font-medium ">Sign in</li>
            <li className="font-medium rounded-lg px-3 py-2 ml-4 bg-blue-700 text-white">
              Sign up
            </li>
          </div>
        </nav>
        <div className="mr-2 sm:hidden" onClick={()=>setMenuList(!menuList)}>
          {!menuList?<MenuIcon className="w-10"/>:<XIcon className="w-10"/>}
          
        </div>
      </div>
      <div className="sm:hidden visible">
      <ul className={menuList?"bg-zinc-200 py-2":"hidden"}>
       <div className="w-[80%] mx-auto my-0">
       <li className="px-10 py-2 border-b-2 border-zinc-400  text-base font-medium">Home</li>
        <li className="px-10 py-2 border-b-2 border-zinc-400  text-base font-medium">About</li>
        <li className="px-10 py-2 border-b-2 border-zinc-400  text-base font-medium">Support</li>
        <li className="px-10 py-2 border-b-2 border-zinc-400  text-base font-medium">Platforms</li>
        <li className="px-10 py-2 border-b-2 border-zinc-400  text-base font-medium">Pricing</li>
       </div>
        <div className="text-center w-[80%] mx-auto my-0">
            <li className="mt-2  py-2 font-medium rounded-lg border-2 border-blue-700 text-blue-700">Sign in</li>
            <li className="mt-2 border-b-2 font-medium rounded-lg px-3 py-2  bg-blue-700 text-white">
              Sign up
            </li>
          </div>
      </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
