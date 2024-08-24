"use client"
import LockedBanner from "@/components/LockedBanner";
import Footer from "@/components/Footer";
import BannerFooter from "@/components/BannerFooter";
import QuickConsultationForm from "@/components/QuickConsultationForm";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
  <div className="bg-white">
  <Navbar />
<main className='flex-grow pb-24'> 
  <QuickConsultationForm />
    <BannerFooter/>
    <Footer/>
  </main>
  <LockedBanner/>
</div>
  );
};
export default ContactPage;
