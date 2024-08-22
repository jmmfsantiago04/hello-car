// /components/Navbar.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import talkIcon from '../public/talk.png'; // Adjust the path based on your project structure

const Navbar: React.FC = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-[87.5rem] mx-auto px-[1rem] py-[1.5rem] flex items-center justify-between">
        {/* Logo and Submenu Toggle Button */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="text-blue-800 font-bold text-[1.5rem] sm:text-[1.875rem] md:text-[2.5rem]">
            HELLO<span className="text-blue-500">썸카</span>
          </div>

          {/* Submenu Toggle Button (Only on mobile) */}
          <button 
            onClick={toggleSubmenu} 
            className="sm:hidden ml-auto text-gray-600 focus:outline-none"
          >
            <svg className="w-[2rem] h-[2rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`grid ${isSubmenuOpen ? 'grid-cols-2' : 'hidden'} sm:flex flex-row mt-[1rem] sm:mt-0 gap-[1rem] sm:gap-[1.5rem] text-gray-600 text-[1.125rem] sm:text-[1.25rem]`}>
          <a href="#" className="hover:text-black">회사 소개</a>
          <a href="#" className="hover:text-black">베스트 차량</a>
          <a href="#" className="hover:text-black">진행절차</a>
          <a href="#" className="hover:text-black">구매후기</a>
          <a href="#" className="hover:text-black">문의하기</a>
        </div>

        {/* Contact Info (Hidden on smaller screens) */}
        <div className="hidden sm:flex items-center space-x-[0.75rem] text-[1.125rem] sm:text-[1.25rem]">
          <span className="text-black font-bold">1666-4855</span>
          <Image src={talkIcon} alt="KakaoTalk Icon" width={2.5 * 16} height={2.5 * 16} className="w-[2.5rem] h-[2.5rem] rounded-md sm:w-[3rem] sm:h-[3rem]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
