// /components/Banner.tsx

import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative w-full h-[50vw] max-h-[40rem] bg-black text-white mx-auto">
      <Image 
        src="/CarBanner1.png" 
        alt="Car" 
        layout="fill" 
        objectFit="cover" 
        className="opacity-60" 
      />
      <div 
        className="absolute top-[1rem] left-[0.5rem] right-[0.5rem] md:top-[8.875rem] md:left-[7.5rem] md:right-[37.5rem] md:bottom-[21.875rem]"
      >
        <h1 className="text-[4.5rem] md:text-[3.5rem] font-bold leading-tight">
          저신용으로 인한 중고차 구매가 힘드신가요?
        </h1>
      </div>
      <div className="absolute top-[20rem] left-[0.5rem] md:top-[19.9375rem] md:left-[7.5rem]">
        <p className="text-[0.875rem] md:text-[1.125rem] lg:text-[1.25rem] mb-[6.25rem] md:mb-[4.5625rem]">
          파산/면책/회생/신용불량/한도 부족 ok
        </p>
        <Link href="/contact">
          <button 
            className="bg-gray-600 text-white w-[25rem] md:w-[12.5rem] h-[2.5rem] md:h-[3rem] flex items-center justify-center hover:bg-gray-700"
          >
            상담 신청 하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
