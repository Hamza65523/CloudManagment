import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="">
      <div className="py-4 px-2 text-white lg:grid-cols-5 sm:grid-cols-4 xs:grid-cols-4 xxs:grid-cols-2  lg:mt-80 md:mt-[20rem] sm:mt-[20rem] xs:mt-[10rem] xxs:mt-[25rem] grid  bg-blue-900">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-2 lg:text-2xl">Solutions</h1>
          <ul className="space-y-1">
            <li className="lg:text-2xl">Marketing</li>
            <li className="lg:text-2xl">Analutices</li>
            <li className="lg:text-2xl">Commerce</li>
            <li className="lg:text-2xl">Data</li>
            <li className="lg:text-2xl">Cloud</li>
          </ul>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold mb-2 lg:text-2xl">Company</h1>
          <ul className="space-y-1">
            <li className="lg:text-2xl">Marketing</li>
            <li className="lg:text-2xl">Analutices</li>
            <li className="lg:text-2xl">Commerce</li>
            <li className="lg:text-2xl">Data</li>
            <li className="lg:text-2xl">Cloud</li>
          </ul>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold mb-2 lg:text-2xl">Support</h1>
          <ul className="space-y-1">
            <li className="lg:text-2xl">Marketing</li>
            <li className="lg:text-2xl">Analutices</li>
            <li className="lg:text-2xl">Commerce</li>
            <li className="lg:text-2xl">Data</li>
            <li className="lg:text-2xl">Cloud</li>
          </ul>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold mb-2 lg:text-2xl">Legal</h1>
          <ul className="space-y-1 ">
            <li className="lg:text-2xl">Marketing</li>
            <li className="lg:text-2xl">Analutices</li>
            <li className="lg:text-2xl">Commerce</li>
            <li className="lg:text-2xl">Data</li>
            <li className="lg:text-2xl">Cloud</li>
          </ul>
        </div>
        <div className="lg:w-48 lg:my-0 sm:mx-auto sm:my-4 sm:text-center sm:w-[98vw] xs:mx-auto xs:my-2 xs:text-center xs:w-[95vw] xxs:mx-auto xxs:my-2 xxs:text-center xxs:w-[95vw]">
          <h1 className="text-lg font-bold mb-2 lg:text-2xl">
            SUBSCRIBE TO OUR NEWSLATTER
          </h1>
          <p className="lg:text-lg">
            Lorem veritatis aliquid quibusdam nesciunt.
          </p>
          <input
            className="mt-2 rounded w-full py-1"
            type="text"
            name=""
            id=""
          />
          <button className="bg-blue-700 w-full py-2 rounded mt-2">
            Subscribe
          </button>
        </div>
       
      </div>

      <hr />
      <div className="sm:flex sm:py-4 sm:px-8 sm:justify-between text-center w-[100vw] bg-blue-900 text-white">
          <p>2022 Workflow, LLC, All rights reserved</p>
          <div className=" flex gap-2 justify-center mt-2 text-[]">
            <FaFacebook className="grayscale-0 hover:grayscale" size={20} />
            <FaInstagram className="grayscale-0 hover:grayscale" size={20} />
            <FaTwitter className="grayscale-0 hover:grayscale" size={20} />
            <FaGithub className="grayscale-0 hover:grayscale" size={20} />
          </div>
        </div>
    </div>
  );
};

export default Footer;
