export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[1240px] flex flex-col md:p-4 md:pb-10 md:mt-10 mb-28 md:mb-20 md:border border-white/10 md:rounded-[17px]">
        <header></header>

        <main className="flex flex-col items-center mt-10 md:mt-36">
          <h1 className="text-[24px] md:text-5xl font-semibold tracking-tight text-center">مهم‌ترین ابزاری که برای کسب و کارت نیاز داری</h1>
          <p className="text-white/60 text-xs text-center md:text-lg mt-2.5 md:mt-3.5 px-16"> سایت شما با طراحی جذاب و بهینه‌شده، بازدیدکنندگان را به مشتریان وفادار تبدیل می‌کند.</p>

        </main>

        {/* <footer className="flex flex-col mt-36 md:mt-0">
          <div className="mx-4 bg-[rgba(255,255,255,0.03)] flex flex-col rounded-[21px]">
            <div className="rounded-t-[14px] md:rounded-t-[21px] px-[18px] md:px-24 pt-[26px] md:pt-40 pb-8">
              <div className="grid md:grid-cols-3 gap-y-10 md:gap-y-0">فوتر</div>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
}