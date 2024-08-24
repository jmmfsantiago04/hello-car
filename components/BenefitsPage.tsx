// File: components/BenefitsPage.tsx

import React from 'react';
import Card from './Card';
import ASCard from './ASCard';
import FinanceCard from './FinanceCard';

const BenefitsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="bg-blue-50 w-full h-[10rem] flex items-end justify-center pb-[3.125rem] pr-[3.125rem]">
        <div className="w-full max-w-6xl flex items-start">
          <div className="flex flex-col flex-shrink-0">
            <h1 className="text-[3.5rem] font-bold mt-[15.9375rem] mr-[3.125rem] ml-[-4.5rem] text-blue-800 leading-tight">
              헬로썸만의<br /> 특별한 혜택
            </h1>
            <div className="w-[6.25rem] h-[0.25rem] bg-blue-800 mt-4 ml-[-2rem]"></div>
          </div>
          <div className="flex space-x-[3.125rem] ml-[-2rem]">
            <Card />
            <ASCard />
            <FinanceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;
