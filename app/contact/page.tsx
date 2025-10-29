import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "راه‌های ارتباط با شیکالا: فرم تماس، تلفن، ایمیل و آدرس دفتر.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "تماس با ما",
    description:
      "با تیم شیکالا از طریق فرم تماس، تلفن یا ایمیل در ارتباط باشید.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "شیکالا" }],
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <section dir="rtl" className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            تماس با ما
          </h1>
          <p className="mt-3 text-sm sm:text-base text-foreground/80">
            خوشحال می‌شویم سوالات و پیشنهادات شما را دریافت کنیم.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* فرم تماس */}
          <div className="rounded-2xl ring-1 ring-primary/15 bg-background/70 backdrop-blur-sm p-6">
            <form
              action="mailto:support@shikala.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">
                  نام و نام خانوادگی
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-foreground/15 bg-background/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="مثلاً: علی رضایی"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold">
                  ایمیل
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-foreground/15 bg-background/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold">
                  موضوع
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-foreground/15 bg-background/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="عنوان پیام"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold">
                  پیام
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-foreground/15 bg-background/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="متن پیام شما..."
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-foreground/60">
                  با ارسال پیام، با شرایط استفاده و حریم خصوصی موافقم.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold bg-gradient-to-l from-primary to-primary/80 text-background shadow-sm hover:shadow-md transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  ارسال پیام
                </button>
              </div>
            </form>
          </div>

          {/* اطلاعات تماس */}
          <div className="rounded-2xl ring-1 ring-foreground/10 bg-background/70 backdrop-blur-sm p-6">
            <h2 className="text-lg font-bold mb-3">راه‌های ارتباطی</h2>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li>
                تلفن: <a href="tel:+982191000000" className="hover:text-primary">021-9100-0000</a>
              </li>
              <li>
                ایمیل: <a href="mailto:support@shikala.com" className="hover:text-primary">support@shikala.com</a>
              </li>
              <li>
                ساعات پاسخ‌گویی: ۹ تا ۱۸، روزهای کاری
              </li>
              <li>
                آدرس: تهران، خیابان مثال، پلاک ۱۲، واحد ۵
              </li>
            </ul>

            <div className="mt-6">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-primary/[0.10] via-transparent to-primary/[0.06] ring-1 ring-foreground/10 flex items-center justify-center">
                <span className="text-xs text-foreground/60">نقشه و موقعیت دفتر (به‌زودی)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}