// File: components/BenefitsPage.tsx

import React from 'react';
import Card from './Card';
import ASCard from './ASCard';
import FinanceCard from './FinanceCard';

const BenefitsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="bg-blue-50 w-full h-[160px] flex items-end justify-center pb-[50px] pr-[50px]">
        <div className="w-full max-w-6xl flex items-start">
          <div className="flex flex-col flex-shrink-0">
            <h1 className="text-[56px] font-bold mt-[255px] mr-[50px] ml-[-72px] text-blue-800 leading-tight">
              헬로썸만의<br /> 특별한 혜택
            </h1>
            <div className="w-[100px] h-[4px] bg-blue-800 mt-4 ml-[-32px]"></div>
          </div>
          <div className="flex space-x-[50px]  ml-[-32px]">
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
