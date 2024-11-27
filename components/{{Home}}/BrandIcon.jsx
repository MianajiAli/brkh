import Image from "next/image";

// components/BrandIcon.jsx
export default function BrandIcon({ src, alt, href }) {
    return (
        <>
            <a className="relative flex flex-col items-center group" target="_blank" href={'#'}>
                <div className="w-12 h-12 bg-white flex justify-center items-center rounded-md bg-opacity-20  group-hover:scale-125 group-hover:bg-opacity-90 opacity-70 group-hover:opacity-100 transition-transform duration-300 group-hover:-translate-y-4">
                    <Image src={src} alt={alt} width={32}
                        height={32}
                        quality={75}
                        priority
                        className="w-10 md:w-18 h-auto " />
                </div>
                <p className="text-xl font-medium mt-3.5 text-white opacity-0 group-hover:opacity-100 absolute top-full whitespace-nowrap">{alt}</p>
            </a>
        </>
    );
}
