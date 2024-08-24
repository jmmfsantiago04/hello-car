// File: components/CarCard.tsx

import React from 'react';

const CarCard: React.FC = () => {
  return (
    <div className="w-full max-w-[18.22rem] h-auto bg-white rounded-lg shadow-md flex flex-col items-center p-4">
      <img
        src="/silvercar.png"
        alt="Genesis G80"
        className="w-full h-auto object-cover"
      />
      <div className="w-full max-w-[18.06rem] h-0 border-t border-gray-300 mt-[2.16rem]"></div>
      <h2 className="text-lg font-semibold mt-[1.69rem] mb-[1.99rem] text-center">제네시스 G80</h2>
      <div className="flex flex-col sm:flex-row items-center gap-[1.06rem] text-center sm:text-left">
        <p className="text-sm text-gray-500">월 할부 금액</p>
        <p className="text-sm text-gray-500">
          <span className="text-blue-500">59만원</span> / 최장 72개월
        </p>
      </div>
      <div className="w-full max-w-[18.06rem] h-0 border-t border-gray-300 mt-[1.95rem] mb-[0.94rem]"></div>
      <button className="w-full max-w-[18.06rem] h-[2.25rem] bg-blue-600 text-white rounded-md">
        견적 문의
      </button>
    </div>
  );
};

export default CarCard;
