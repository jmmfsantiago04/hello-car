"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import InfiniteCarousel from '../components/InfiniteCarousel';
import QuickConsultationForm from '@/components/QuickConsultationForm';
import LockedBanner from '@/components/LockedBanner';
import Card from '@/components/Card';
import ASCard from '@/components/ASCard';
import FinanceCard from '@/components/FinanceCard';
import CardsContainer from '@/components/BenefitsPage';
import BenefitsPage from '@/components/BenefitsPage';
import Reviews from '@/components/ReviewsPage';
import ReviewsPage from '@/components/ReviewsPage';
import Footer from '@/components/Footer';
import BannerFooter from '@/components/BannerFooter';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />
    <main className='flex-grow pb-24'>  
      <InfiniteCarousel />
      <div className="text-center py-16">
        <h2 className="text-[56px] font-bold text-black">
          업계최저금리
        </h2>
        <p className="text-[56px] text-blue-600 mt-4">
          저신용 전액할부 견적 받기
        </p>
        <div className="border-b-2 border-blue-600 mx-auto mt-2 w-[142px]"></div>
      </div>
      <QuickConsultationForm />
       <div className='mt-[180px]'>    
        <BenefitsPage />
        </div>
        <ReviewsPage/>
        <BannerFooter/>
        <Footer/>
      </main>
      <LockedBanner/>
    </div>

  );
};

export default HomePage;
