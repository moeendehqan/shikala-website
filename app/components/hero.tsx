import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-foreground/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-l from-foreground to-foreground/70">
                با شیکالا، فروش آنلاین
              </span>
              <br />
              <span className="text-foreground">ساده، سریع و حرفه‌ای</span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/80 leading-8">
              فروشگاهت را در چند دقیقه بساز، محصولات را مدیریت کن و از پرداخت تا ارسال
              همه‌چیز را خودکار کن. مناسب برای کسب‌وکارهای کوچک تا برندهای بزرگ.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://panel.shikala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold bg-gradient-to-l from-foreground to-foreground/80 text-background shadow-sm hover:shadow-md transition-all hover:opacity-95"
              >
                <Image src="/window.svg" alt="شروع" width={18} height={18} />
                شروع رایگان
              </a>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold border border-foreground/15 text-foreground hover:bg-foreground/10 transition-colors"
              >
                مشاهده امکانات
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-background/60 border-foreground/10">
                <Image src="/globe.svg" alt="بازدید" width={16} height={16} />
                ۴۵۰۰+ فروشنده خوشحال
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-background/60 border-foreground/10">
                <Image src="/file.svg" alt="فاکتور" width={16} height={16} />
                فاکتور و پرداخت آنلاین
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-background/60 border-foreground/10">
                <Image src="/next.svg" alt="سریع" width={16} height={16} />
                سرعت و امنیت بالا
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl ring-1 ring-foreground/10 bg-background/70 backdrop-blur-xl p-5 shadow-sm">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-foreground/[0.08] via-transparent to-foreground/[0.08] flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/globe.svg" alt="گلوب" width={32} height={32} />
                  </div>
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/file.svg" alt="فایل" width={32} height={32} />
                  </div>
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/window.svg" alt="پنجره" width={32} height={32} />
                  </div>
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/vercel.svg" alt="ورسل" width={32} height={32} />
                  </div>
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/next.svg" alt="نکست" width={32} height={32} />
                  </div>
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/globe.svg" alt="گلوب" width={32} height={32} />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-10 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-full bg-foreground/[0.06] blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}