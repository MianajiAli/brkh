// components/FeatureCard.jsx
import Image from "next/image";

export default function FeatureCard({ icon, title, description, previewImage }) {
    return (
        <div className="rounded-xl bg-gradient-to-b from-black/30 via-black/90 to-black/30 flex flex-col  flex-1 justify-between p-5 md:pb-0 md:px-0 md:pt-10">
            <div className="flex flex-row md:flex-col ">

                <div className="self-center p-[18px] bg-white/5 rounded-2xl border border-gray-400/10">
                    <Image src={icon} alt={title} width={35} height={36} priority />
                </div>
                <div className="flex flex-col w-10/12 md:w-full">

                    <h5 className="text-xl md:text-[32px] font-semibold text-white/90 mt-5 text-center">{title}</h5>
                    <p className="mt-2.5 text-[13px] md:text-sm text-white/50 text-center self-center px-9">{description}</p>
                </div>
            </div>

            {previewImage && (
                <div className="hidden md:flex flex-col brightness-50 opacity-80  px-6 mt-6">
                    <Image
                        alt="widgets"
                        src={previewImage}
                        width={786}
                        height={453}
                        quality={75}
                        priority
                        className="object-cover aspect-video rounded-xl"
                    />
                </div>
            )}
        </div>
    );
}
