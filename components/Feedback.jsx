// components/Feedback.jsx

export default function Feedback() {
    const feedbacks = [
        {
            image: "/images/user1.jpg",
            name: "علی رضایی",
            comment: "تیم برکه با طراحی‌های عالی و بهینه، واقعا کسب و کار ما رو ارتقا داد. پیشنهاد می‌کنم از خدماتشون استفاده کنید."
        },
        {
            image: "/images/user2.jpg",
            name: "مریم عباسی",
            comment: "پشتیبانی تیم برکه بی‌نظیر بود. هر سوالی داشتیم، در سریع‌ترین زمان ممکن پاسخ می‌دادن."
        },
        {
            image: "/images/user3.jpg",
            name: "حسین کاظمی",
            comment: "کیفیت کدنویسی و طراحی برکه عالیه. همه‌چیز دقیقاً همونطوری که نیاز داشتیم تحویل داده شد."
        }
    ];

    return (
        <div className="flex flex-col items-center mt-20">
            <h2 className="text-2xl md:text-4xl font-semibold text-center">از کاربران ما بشنوید</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {feedbacks.map((feedback, index) => (
                    <div key={index} className="rounded-xl bg-gradient-to-b from-black to-black/60 p-6 flex flex-col items-center text-center">
                        <img
                            src={feedback.image}
                            alt={feedback.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-white/20 mb-4"
                        />
                        <h4 className="text-lg font-semibold text-white/90 mt-2">{feedback.name}</h4>
                        <p className="text-white/50 mt-3 text-sm">{feedback.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
