const Footer = () => {
    return (
        <div className="w-full min-h-[400px] bg-[#151820] flex flex-col justify-between rounded-3xl mt-40">
            <div className="flex md:flex-row flex-col p-5 md:p-10 justify-around">
                {/* Social Media Links */}
                <ul className="text-white mb-3">
                    <li className="font-semibold text-lg">شبکه های اجتماعی</li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">اینستاگرام</a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">توئیتر</a></li>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">فیس‌بوک</a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">لینکدین</a></li>
                </ul>

                {/* Useful Links */}
                <ul className="text-white mb-3">
                    <li className="font-semibold text-lg">لینک های مفید</li>
                    <li><a href="/about" className="hover:underline">درباره ما</a></li>
                    <li><a href="/services" className="hover:underline">خدمات</a></li>
                    <li><a href="/contact" className="hover:underline">تماس با ما</a></li>
                    <li><a href="/privacy-policy" className="hover:underline">سیاست حفظ حریم خصوصی</a></li>
                </ul>
            </div>

            <div className="flex flex-col gap-10 mb-10 mx-10">
                <hr className="hidden md:block border-b border-white/10 mt-10" />
                <span className="text-3xl px-5 font-bold -translate-y-1 text-white">برکه</span>
            </div>

            <div className="rounded-b-[14px] md:rounded-b-[21px] bg-gradient-to-b from-white/5 to-transparent flex justify-center items-center p-3 text-[11px] md:text-sm text-white/30 shadow-[0_-15px_15px_0_rgba(0,0,0,0.07)]">
                <span>
                    {/* کپی رایت © تمام حقوق محفوظ است */}
                </span>
                <span dir="ltr">
                    ❤️ طراحی شده با
                </span>
                <pre> | </pre>
                <span>
                    نسخه بتا
                </span>
            </div>
        </div>
    );
}

export default Footer;
