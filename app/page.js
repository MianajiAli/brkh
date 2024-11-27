// pages/index.js
import Header from '@/components/Header';
import Hero from '@/components/{{Home}}/Hero';
import TrustedBrands from '@/components/{{Home}}/TrustedBrands';
import Features from '@/components/{{Home}}/Features';
import Feedback from '@/components/{{Home}}/Feedback';
import Servises from '@/components/{{Home}}/Servises';
import Footer from '@/components/Footer';
import Google from '@/components/{{Home}}/Google';

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className=
        " relative w-full max-w-[1240px] mx-auto flex flex-col  md:p-4 md:pb-10 md:mt-10 mb-28 md:mb-20 md:border border-white/10 md:rounded-[17px]">
        <Header />
        <main className="px-3 md:px-0">
          <Hero />

          <Servises />
          <TrustedBrands />
          <Features />
          <Google />
          <Feedback />
          <Footer />
        </main>
      </div>
    </div>
  );
}
