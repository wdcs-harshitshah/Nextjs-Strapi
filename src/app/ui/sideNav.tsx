'use client'

import React, { useState } from 'react';
import { IoIosSettings } from "react-icons/io"; 
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Link from 'next/link';

const SideNav = (data:any) => {
 const [isOpen, setIsOpen] = useState(false);
 const [activeFAQ, setActiveFAQ] = useState(null); 

 const toggleAccordion = () => {
    setIsOpen(!isOpen);
 };

 const handleFAQClick = (index:any) => {
    setActiveFAQ(index);
 };
console.log(data)
 return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md rounded-md">
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
          <div className="flex items-center">
            <IoIosSettings className="text-2xl text-gray-500" />
            <h2 className="ml-2 text-lg font-semibold text-gray-700">Settings </h2>
          </div>
          <button
            onClick={toggleAccordion}
            className="focus:outline-none"
          >
            {isOpen ? <FaChevronUp/> : <FaChevronDown/>}
          </button>
        </div>
        {isOpen && (
          <div className="p-4 bg-white shadow-md rounded-md">
            {data.data.map((module:any, index:any) => (
             <Link href={`${module.attributes.url}`}> <li key={index} onClick={() => handleFAQClick(index)} className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
             {module.attributes.title}
           </li></Link>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 p-4">
        {activeFAQ !== null && (
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Edit {}</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="faq-question" className="block text-sm font-medium text-gray-700">Question:</label>
                <input type="text" id="faq-question" name="faq-question" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="faq-answer" className="block text-sm font-medium text-gray-700">Answer:</label>
                <textarea id="faq-answer" name="faq-answer" className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
 );
};

export default SideNav;