import Footer from "@/components/Footer";
import Header from "@/components/Header";

const page = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className=
                " relative w-full max-w-[1240px] mx-auto flex flex-col  md:p-4 md:pb-10 md:mt-10 mb-28 md:mb-20 md:border border-white/10 md:rounded-[17px]">
                <Header />
                <main className="px-3 md:px-0 pt-10">
                    <p>نمونه کار های ما</p>
                    <div></div>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default page;