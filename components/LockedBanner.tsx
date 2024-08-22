import React from 'react';

const LockedBanner: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[6rem] bg-blue-900 flex justify-center items-center z-50">
      <span className="text-white text-[1.75rem] mr-[1rem]">
        신용등급에 관계없이 간편 조회
      </span>
      <button className="bg-white text-blue-900 w-[10.0625rem] h-[3rem] text-[1.125rem] rounded-xl">
        상담 신청
      </button>
    </div>
  );
};

export default LockedBanner;
