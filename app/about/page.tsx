import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "درباره شیکالا",
  description:
    "شیکالا پلتفرمی برای ساده‌سازی فروش آنلاین؛ تمرکز بر سرعت، تجربه کاربری و سئوی عالی.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "/about",
    title: "درباره شیکالا",
    description:
      "با شیکالا، فروش آنلاین را سریع‌تر و هوشمندتر تجربه کنید.",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "شیکالا",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <section dir="rtl" className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              درباره شیکالا
            </h2>
            <p className="text-sm sm:text-base leading-7 text-foreground/80">
              شیکالا پلتفرمی برای ساده‌سازی فروش آنلاین است؛ با تمرکز بر سرعت،
              تجربه کاربری و سئوی عالی تا کسب‌وکارها بتوانند سریع‌تر رشد کنند.
            </p>
            <p className="text-sm sm:text-base leading-7 text-foreground/80">
              ما با ارائه ابزارهای حرفه‌ای مدیریت موجودی، انتشار خودکار آگهی‌ها،
              و تحلیل بازار، فرایند فروش را کوتاه‌تر و هوشمندتر می‌کنیم.
            </p>

            {/* Key points */}
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center size-8 rounded-lg bg-foreground/[0.06] ring-1 ring-foreground/10">
                  <Image src="/next.svg" alt="سرعت و عملکرد" width={18} height={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">سرعت و عملکرد بالا</h3>
                  <p className="text-sm text-foreground/70">
                    زیرساخت مدرن و بهینه برای بارگذاری سریع و تجربه روان.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center size-8 rounded-lg bg-foreground/[0.06] ring-1 ring-foreground/10">
                  <Image src="/globe.svg" alt="سئو و دسترسی‌پذیری" width={18} height={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">سئو و دسترسی‌پذیری</h3>
                  <p className="text-sm text-foreground/70">
                    ساختار استاندارد، متادیتا کامل و پشتیبانی از محتوای فارسی.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center size-8 rounded-lg bg-foreground/[0.06] ring-1 ring-foreground/10">
                  <Image src="/file.svg" alt="ابزارهای مدیریت فروش" width={18} height={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">ابزارهای مدیریت فروش</h3>
                  <p className="text-sm text-foreground/70">
                    مدیریت موجودی، قیمت‌گذاری، و انتشار خودکار در پلتفرم‌ها.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center size-8 rounded-lg bg-foreground/[0.06] ring-1 ring-foreground/10">
                  <Image src="/window.svg" alt="پشتیبانی و امنیت" width={18} height={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">پشتیبانی و امنیت</h3>
                  <p className="text-sm text-foreground/70">
                    راه‌اندازی آسان، بروزرسانی سریع و امنیت در سطح تولید.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl ring-1 ring-foreground/10 bg-background/70 backdrop-blur-xl p-5 shadow-sm">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-foreground/[0.08] via-transparent to-foreground/[0.08] flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/globe.svg" alt="شبکه" width={32} height={32} />
                  </div>
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/file.svg" alt="فایل" width={32} height={32} />
                  </div>
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/next.svg" alt="نکست" width={32} height={32} />
                  </div>
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/window.svg" alt="پنجره" width={32} height={32} />
                  </div>
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/vercel.svg" alt="ورسل" width={32} height={32} />
                  </div>
                  <div className="flex items-center justify-center rounded-xl bg-background/80 ring-1 ring-foreground/10 p-4">
                    <Image src="/globe.svg" alt="شبکه" width={32} height={32} />
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