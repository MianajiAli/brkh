// pages/index.js
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBrands from '@/components/TrustedBrands';
import Features from '@/components/Features';
import Feedback from '@/components/Feedback';

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[1240px] flex flex-col md:p-4 md:pb-10 md:mt-10 mb-28 md:mb-20 md:border border-white/10 md:rounded-[17px]">
        <Header />
        <main>
          <Hero />
          <TrustedBrands />
          <Features />
          <Feedback />
        </main>
      </div>
    </div>
  );
}
