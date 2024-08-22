"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import InfiniteCarousel from '../components/InfiniteCarousel';
import QuickConsultationForm from '@/components/QuickConsultationForm';
import LockedBanner from '@/components/LockedBanner';
import SpecialBenefits from '@/components/SpecialBenefits';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />
    <main className='flex-grow pb-24'>  
      <InfiniteCarousel />
      <div className="text-center py-16">
        <h2 className="text-[32px] font-bold text-black">
          업계최저금리
        </h2>
        <p className="text-[32px] text-blue-600 mt-4">
          저신용 전액할부 견적 받기
        </p>
        <div className="border-b-2 border-blue-600 mx-auto mt-2 w-[80px]"></div>
      </div>
      <QuickConsultationForm />     
      <SpecialBenefits/>
      </main>
      <LockedBanner/>
    </div>
  );
};

export default HomePage;
