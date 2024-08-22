// /components/Banner2.tsx

import Image from 'next/image';

const Banner2 = () => {
  return (
    <div className="relative w-[87.5rem] h-[40rem] bg-black text-white mx-auto">
      <Image 
        src="/CarBanner2.png" 
        alt="Car" 
        layout="fill" 
        objectFit="cover" 
        className="opacity-60" 
      />
      <div 
        className="absolute top-[8.875rem] left-[7.5rem] right-[55rem]"
      >
        <h1 className="text-[3.5rem] font-bold leading-tight">
          심사부터 출고까지 다이렉트!
        </h1>
      </div>
      <div className="absolute top-[19.9375rem] left-[7.5rem] right-[62.8125rem]">
        <p className="text-[0.9375rem] mb-[1.25rem]">
          한도 부족 타사 거절돼도<br/>연체 중이 아니고 소득증빙 가능하면 ok
        </p>
        <p className="text-[0.9375rem] mb-[4.625rem]">  {/* Updated margin-bottom to 74px */}
          개인회생 파산면책 인가 후 신용 회복은 회복 후 납부 1회 이상 즉시 가능
        </p>
      </div>
      <div className="absolute top-[30.4375rem] left-[7.5rem] right-[67.5rem]">
        <button 
          className="bg-gray-600 text-white w-[12.5rem] h-[3rem] flex items-center justify-center hover:bg-gray-700"
        >
          상담 신청 하기
        </button>
      </div>
    </div>
  );
};

export default Banner2;
