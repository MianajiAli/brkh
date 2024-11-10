// components/Hero.jsx
import Image from 'next/image';
import Button from './Button';

export default function Hero() {
    return (
        <>
            <div className="flex flex-col items-center mt-10 md:mt-36 relative">
                <div
                    style={{
                        background: 'linear-gradient(45deg, #171B2C 13.98%, #000000 89.53%)',
                        filter: 'blur(96.5796px)'
                    }}
                    className="absolute -top-96 -bottom-96 md:-bottom-10 right-0 left-0 -z-[1000]"
                ></div>

                <h1 className="text-[24px] md:text-5xl font-semibold tracking-tight text-center">
                    مهم‌ترین ابزاری که برای رشد کسب و کارت نیاز داری
                </h1>
                <p className="text-white/60 text-xs text-center md:text-lg mt-2.5 md:mt-3.5 px-16">
                    سایت شما با طراحی جذاب و بهینه‌شده، بازدیدکنندگان را به مشتریان وفادار تبدیل می‌کند.
                </p>
                <Button text="دریافت مشاوره" />
            </div>

            <div className="flex justify-center items-center ">
                <Image
                    alt="widgets"
                    src={"/brkh" + "/images/site.png"}
                    width={1000}
                    height={500}
                    quality={75}
                    priority
                    className="object-cover w-full scale-125 "
                />
            </div>

        </>
    );
}
