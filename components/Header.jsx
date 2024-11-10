export default function Header() {
    // Array for navigation links with Persian text
    const navLinks = [
        { href: "#home", text: "خانه" },  // "Home" in Persian
        { href: "#about", text: "درباره" }, // "About" in Persian
        { href: "#services", text: "خدمات" } // "Services" in Persian
    ];

    // Array for buttons with Persian text
    const buttons = [
        { text: "کمک", className: "bg-gray-600" }, // "Help" in Persian
        { text: "تماس با ما", className: "bg-blue-600" },  // "Contact Us" in Persian
    ];

    return (
        <header className="sticky top-4 z-10">
            <div className="mx-auto w-full h-[3.8rem] rounded-xl bg-[#202124] bg-opacity-50 backdrop-blur-sm flex justify-between items-center px-4 border border-white/10">

                <div className="flex items-center gap-3">
                    <span className="text-3xl px-5 font-bold -translate-y-1">برکه</span> {/* "Baraka" in Persian */}
                    {/* Dynamically render nav links */}
                    <nav className="flex gap-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-white font-semibold hover:underline"
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex gap-3">
                    {/* Dynamically render buttons */}
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={`btn ${button.className} px-3 py-2.5 rounded-[9px] flex items-center gap-1.5 text-sm font-bold`}
                            aria-label={button.text}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}
