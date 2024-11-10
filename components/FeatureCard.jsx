// components/FeatureCard.jsx
import Image from "next/image";

export default function FeatureCard({ icon, title, description, previewImage }) {
    return (
        <div className="rounded-xl bg-gradient-to-b from-black to-black/60 flex flex-col py-8 md:pt-14 md:pb-0 flex-1">
            <div className="self-center p-[18px] bg-white/5 rounded-2xl border border-gray-400/10">
                <Image src={icon} alt={title} width={35} height={36} priority />
            </div>
            <h5 className="text-xl md:text-[32px] font-semibold text-white/90 mt-5 text-center">{title}</h5>
            <p className="mt-2.5 text-[13px] md:text-sm text-white/50 text-center self-center px-9">{description}</p>

            {previewImage && (
                <div className="hidden md:flex flex-col brightness-75 opacity-90 px-6 mt-6">
                    <Image
                        alt="widgets"
                        src={previewImage}
                        width={786}
                        height={453}
                        quality={75}
                        priority
                        className="object-cover"
                    />
                </div>
            )}
        </div>
    );
}
