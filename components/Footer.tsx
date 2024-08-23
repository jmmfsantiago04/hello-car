// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 border-t-4 border-purple-700">
      <div className="container mx-auto relative p-4">
        <div className="absolute left-[-60px] top-[60px] w-[432px] h-[40px] text-3xl font-bold flex items-center justify-center">
          HELLO썸카
        </div>
        <div 
          className="absolute left-[314px] top-[18px] w-[399px] h-[123px] flex flex-col justify-between text-xs"
        >
          <p className="mb-1">대표자명 : 이온기</p>
          <p className="mb-1">상호 : (주) 국일산사</p>
          <p className="mb-1">사업자등록번호 : 401-86-01171</p>
          <p className="mb-1">연락처 : 1666-4855</p>
          <p className="mb-1">주소 : 인천광역시 서구 봉수대로 158, SO243호 (가좌동, 엠파크타워)</p>
        </div>
        <div className="absolute left-[724px] top-[10px] w-px bg-purple-300" style={{ borderRight: "2px dotted #D8BFD8", height: '140px' }}></div>
        <div className="flex-1 px-4 ml-[744px] text-xs">
          <p className="mb-1">자동차관리시설등록증</p>
          <p className="mb-1">대표자명 : 이온기</p>
          <p className="mb-1">상호 : (주) 국일산사</p>
          <p className="mb-1">사업자등록번호 : 401-86-01171</p>
          <p className="mb-1">연락처 : 1666-4855</p>
          <p className="mb-1">주소 : 인천광역시 서구 봉수대로 158, SO243호 (가좌동, 엠파크타워)</p>
        </div>
      </div>
      <div className="text-center text-[10px] mt-8">
        Copyright ⓒ 헬로썸카. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
