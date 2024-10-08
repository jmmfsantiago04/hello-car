import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 border-t-4 border-purple-700">
      <div className="container mx-auto relative p-4">
        <div className="absolute left-[-3.75rem] top-[3.75rem] w-[27rem] h-[2.5rem] text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center"> 
          HELLO썸카
        </div>
        <div 
          className="absolute left-[19.625rem] top-[1.125rem] w-[24.9375rem] h-[7.6875rem] flex flex-col justify-between text-xs sm:text-sm md:text-base">
          <p className="mb-1">대표자명 : 이온기</p>
          <p className="mb-1">상호 : (주) 국일산사</p>
          <p className="mb-1">사업자등록번호 : 401-86-01171</p>
          <p className="mb-1">연락처 : 1666-4855</p>
          <p className="mb-1">주소 : 인천광역시 서구 봉수대로 158, SO243호 (가좌동, 엠파크타워)</p>
        </div>
        <div className="absolute left-[45.25rem] top-[0.625rem] w-px bg-purple-300" style={{ borderRight: "2px dotted #D8BFD8", height: '8.75rem' }}></div> {/* No change here */}
        <div className="flex-1 px-4 ml-[46.5rem] text-xs sm:text-sm md:text-base">
          <p className="mb-1">자동차관리시설등록증</p>
          <p className="mb-1">대표자명 : 이온기</p>
          <p className="mb-1">상호 : (주) 국일산사</p>
          <p className="mb-1">사업자등록번호 : 401-86-01171</p>
          <p className="mb-1">연락처 : 1666-4855</p>
          <p className="mb-1">주소 : 인천광역시 서구 봉수대로 158, SO243호 (가좌동, 엠파크타워)</p>
        </div>
      </div>
      <div className="text-center text-[0.625rem] sm:text-xs md:text-sm mt-8">
        Copyright ⓒ 헬로썸카. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
