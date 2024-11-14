import Image from "next/image";

const services = [
    {
        id: 1,
        title: "طراحی وبسایت",
        description: "طراحی وبسایت‌های حرفه‌ای و زیبا با رعایت استانداردهای روز.",
        icon: "/images/icons/dev.png"
    },
    {
        id: 2,
        title: "بهینه‌سازی برای موتورهای جستجو",
        description: "بهبود رتبه سایت شما در گوگل و سایر موتورهای جستجو برای دسترسی بیشتر.",
        icon: "/images/icons/search.png"
    },
    {
        id: 3,
        title: "راه‌حل‌های فروشگاهی",
        description: "راه‌اندازی وبسایت‌های فروشگاهی با سیستم‌های پرداخت امن و طراحی کاربرپسند.",
        icon: "/images/icons/cart.png"
    }
];

export default function WhatWeDo() {
    return (
        <div className="flex flex-col items-center mt-20 bg-gradient-to-b py-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-center text-white">ما چیکار میکنیم؟</h2>
            <p className="text-center text-sm md:text-base text-white/70 mt-8 max-w-3xl px-4 ">
                تیم برکه با ارائه خدمات طراحی وبسایت، راه‌حل‌های خلاقانه و بهینه برای کسب‌وکار شما فراهم می‌کند. ما
                به شما کمک می‌کنیم تا وبسایت‌هایی با طراحی جذاب، عملکرد سریع و تجربه کاربری عالی بسازید. از طراحی
                سایت‌های شرکتی و فروشگاهی تا سیستم‌های مدیریت محتوا، تیم برکه همیشه در کنار شماست.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-4">
                {services.map(service => (
                    <div key={service.id} className="transition-all duration-500 transform hover:scale-105 hover:bg-gray-900 hover:shadow-lg rounded-xl bg-gradient-to-b from-gray-800/30 to-black/0 p-6 flex flex-row justify-center items-center gap-3 h-full text-center text-white">
                        <Image
                            width={32}
                            height={32}
                            quality={75}
                            priority
                            src={"/brkh" + service.icon}
                            alt={service.title}
                            className="w-16 h-16  transform transition-all duration-300 hover:rotate-6"
                        />
                        <div>
                            <h4 className="text-xl font-semibold">{service.title}</h4>
                            <p className="text-center text-sm text-white/80 mt-2">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
