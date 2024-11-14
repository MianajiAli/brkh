// components/Feedback.jsx

export default function Feedback() {
    const feedbacks = [
        {
            image: "/images/persons/person1.png",
            name: "Ali Rezaei",
            role: "Entrepreneur",
            comment: "تیم برکه به ما کمک کرد تا وبسایت کسب و کار خود را به شکل حرفه‌ای طراحی کنیم. طراحی زیبا و عملکرد عالی باعث شد تا تجربه مشتریان ما بهبود پیدا کنه. از خدماتشون کاملاً راضی هستیم و به همه توصیه می‌کنم."
        },
        {
            image: "/images/persons/person2.png",
            name: "Maryam Abbasi",
            role: "E-commerce Business Owner",
            comment: "پس از همکاری با تیم برکه، وبسایت فروشگاهی‌ام خیلی بیشتر از قبل فروش داشت. تیم برکه نه تنها طراحی زیبا و کاربرپسند ایجاد کرد، بلکه به طور مداوم از من پشتیبانی می‌کنه. عالیه!"
        },
        {
            image: "/images/persons/person3.png",
            name: "Hossein Kazemi",
            role: "Startup Founder",
            comment: "ما با تیم برکه برای طراحی وبسایتمان همکاری کردیم و نتیجه فراتر از انتظاراتمون بود. تیم با دقت به نیازهای ما گوش داد و یک وبسایت مدرن و سریع برای ما ساخت. تمام تیم از کار با این پروژه راضی بودن."
        },
        {
            image: "/images/persons/person4.png",
            name: "Sima Mohammad",
            role: "Freelancer",
            comment: "به عنوان یک فریلنسر، برای اولین بار تصمیم گرفتم که یک وبسایت حرفه‌ای داشته باشم. تیم برکه به من کمک کرد که به راحتی وبسایت رو بسازم و به بهترین شکل آن را راه‌اندازی کنم. حالا من و مشتریانم تجربه فوق‌العاده‌ای از کار با وبسایت دارم!"
        }
    ];

    return (
        <div className="flex flex-col items-center mt-20">
            <h2 className="text-2xl md:text-4xl font-semibold text-center">از کاربران ما بشنوید</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
                {feedbacks.map((feedback, index) => (
                    <div key={index} className="rounded-xl bg-gradient-to-b from-gray-800/30 to-black/0 border border-white/10 p-3 md:p-6 flex flex-col items-center text-center justify-between ">
                        <p className="text-white/50 text-sm">{feedback.comment}</p>
                        <div className="w-full flex flex-row-reverse justify-between items-center mt-8">
                            <div className="flex flex-row-reverse items-center gap-3">
                                <img
                                    src={"/brkh" + feedback.image}
                                    alt={feedback.name}
                                    className="w-10 text-xs flex justify-center items-center aspect-square rounded-full object-cover border-2 border-white/20"
                                />
                                <div className="text-left">
                                    <h4 className="text-sm font-medium text-white/90">{feedback.name}</h4>
                                    <p className="text-xs text-white/40 mt-1">{feedback.role}</p> {/* Display role */}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
