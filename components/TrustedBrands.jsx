// components/TrustedBrands.jsx
import BrandIcon from './BrandIcon';

export default function TrustedBrands() {
    const brands = [
        { src: "/images/safari.5dd7e022.svg", alt: "Safari", href: "/undefined" },
        { src: "/images/edge.d38f23e6.svg", alt: "Edge", href: "https://microsoftedge.microsoft.com/addons/detail/dastyar/ommapdmjcackmiphnbhjnhpfpdfehpfl" },
        { src: "/images/chrome.ceb8631f.svg", alt: "Google Chrome", href: "https://chrome.google.com/webstore/detail/%F0%9F%96%90%EF%B8%8F-dastyar-personal-assi/ebilacdhmebcihmbjgibcbeaihbecapj" },
        { src: "/images/firefox.95190b74.svg", alt: "Firefox", href: "https://addons.mozilla.org/en-US/firefox/addon/dastyar-personal-assistant" },
        { src: "/images/brave.d63c1a91.svg", alt: "Brave", href: "/undefined" }
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-16 md:mt-28">
            <h4 className="text-white/30 uppercase text-[10px] md:text-base">
                برند هایی که به ما اعتماد کرده اند :
            </h4>
            <div className="flex items-center gap-5 mt-2.5 md:mt-5 rounded-[14px] bg-white/5 px-2 md:px-4 md:gap-10">
                {brands.map((brand, index) => (
                    <BrandIcon key={index} src={"/brkh" + brand.src} alt={brand.alt} href={brand.href} />
                ))}
            </div>
        </div>
    );
}
