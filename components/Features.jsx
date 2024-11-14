// components/Features.jsx
import FeatureCard from './FeatureCard';

export default function Features() {
    const features = [
        {
            icon: "/svg/lock.ceeecd18.svg",
            title: "سایت بهینه و کدنویسی",
            description: "ما بهینه‌ترین و قدرتمندترین کدنویسی‌ها را برای سایت‌های شما ارائه می‌دهیم تا عملکرد بهتری داشته باشید و تجربه کاربری بی‌نظیری را فراهم کنید.",
            previewImage: "/images/ss.png" // Optional, can add or leave it out per feature
        },
        {
            icon: "/svg/widgetIcon.ab3acf9d.svg",
            title: "کیفیت عالی و پشتیبانی",
            description: "ما به کیفیت پروژه‌های خود اهمیت می‌دهیم و پس از تحویل سایت، پشتیبانی کامل برای رفع هر گونه مشکل یا ارتقاء فراهم می‌کنیم.",
            previewImage: "/images/team.webp" // Optional
        },
        {
            icon: "/svg/brush.02cfb5e2.svg",
            title: "متناسب با نیاز های شما",
            description: "خدمات ما به‌طور کامل متناسب با نیازهای شما سفارشی‌سازی می‌شود. هر پروژه را به دقت بررسی کرده و راه‌حل‌های خاصی برای آن ارائه می‌دهیم.",
            previewImage: "/images/widgets-preview.png" // Optional
        }
    ];

    return (
        <>
            <div className="text-2xl md:text-[43px] font-semibold mt-40 text-center">
                چرا تیم برکه رو انتخاب کنیم؟
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-5">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={"brkh" + feature.icon}
                        title={feature.title}
                        description={feature.description}
                        previewImage={"brkh" + feature.previewImage} // Pass as prop
                    />
                ))}
            </div>
        </>
    );
}
