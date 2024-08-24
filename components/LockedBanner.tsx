import React from 'react';
import Link from 'next/link';

const LockedBanner: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[6rem] bg-blue-900 flex justify-center items-center z-50 px-4 sm:px-6 md:px-8">
      <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.75rem] mr-2 sm:mr-3 md:mr-4 lg:mr-[1rem]">
        신용등급에 관계없이 간편 조회
      </span>
      <Link href="/contact">
        <button className="bg-white text-blue-900 w-[8rem] sm:w-[9.5rem] md:w-[10.0625rem] h-[2.5rem] sm:h-[2.75rem] md:h-[3rem] text-sm sm:text-base md:text-lg lg:text-[1.125rem] rounded-xl">
          상담 신청
        </button>
      </Link>
    </div>
  );
};

export default LockedBanner;
