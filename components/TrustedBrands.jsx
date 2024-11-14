// components/TrustedBrands.jsx
import BrandIcon from './BrandIcon';

export default function TrustedBrands() {
    const brands = [
        { src: "/images/brands/znu.png", alt: "دانشگاه زنجان", href: "/undefined" },
        { src: "/images/brands/thu.png", alt: "دانشگاه تهران", href: "https://microsoftedge.microsoft.com/addons/detail/dastyar/ommapdmjcackmiphnbhjnhpfpdfehpfl" },
        { src: "/images/brands/shakeri.png", alt: "برند شاکری", href: "https://chrome.google.com/webstore/detail/%F0%9F%96%90%EF%B8%8F-dastyar-personal-assi/ebilacdhmebcihmbjgibcbeaihbecapj" },
        { src: "/images/brands/dah.svg", alt: "برند ده", href: "https://addons.mozilla.org/en-US/firefox/addon/dastyar-personal-assistant" },
        { src: "/images/brands/bis.svg", alt: "برند زنبور", href: "https://addons.mozilla.org/en-US/firefox/addon/dastyar-personal-assistant" },
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-16 md:mt-28 scale-125">
            <h4 className="text-white/30 uppercase text-[10px] md:text-base">
                برند هایی که به ما اعتماد کرده اند :
            </h4>
            <div className="flex items-center gap-5 mt-2.5 md:mt-5 rounded-md bg-white/5 px-3 md:px-4 md:gap-10">
                {brands.map((brand, index) => (
                    <BrandIcon key={index} src={"/brkh" + brand.src} alt={brand.alt} href={brand.href} />
                ))}
            </div>
        </div>
    );
}
