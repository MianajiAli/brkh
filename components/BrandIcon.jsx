// components/BrandIcon.jsx
export default function BrandIcon({ src, alt, href }) {
    return (
        <a className="relative flex flex-col items-center group" target="_blank" href={href}>
            <img src={src} alt={alt} className="w-9 md:w-18 h-auto opacity-80 group-hover:opacity-100 transition-transform duration-300 group-hover:-translate-y-1.5" />
            <p className="text-xl font-medium mt-3.5 text-white opacity-0 group-hover:opacity-100 absolute top-full whitespace-nowrap">{alt}</p>
        </a>
    );
}
