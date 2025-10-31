import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "حریم خصوصی | شیکالا",
  description:
    "سیاست‌های حریم خصوصی شیکالا؛ چه داده‌هایی جمع‌آوری می‌شود، چگونه استفاده می‌شود و حقوق شما چیست.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    title: "حریم خصوصی | شیکالا",
    description:
      "سیاست‌های حریم خصوصی شیکالا؛ چه داده‌هایی جمع‌آوری می‌شود، چگونه استفاده می‌شود و حقوق شما چیست.",
    url: "/privacy",
    siteName: "شیکالا",
  },
};

export default function PrivacyPage() {
  return (
    <section dir="rtl" className="relative isolate bg-background py-14 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            سیاست‌های حریم خصوصی
          </h1>
          <p className="mt-3 text-sm sm:text-base text-foreground/80">
            آخرین به‌روزرسانی: <time dateTime="2025-10-31">۳۱ مهر ۱۴۰۴</time>
          </p>
        </header>

        <nav aria-label="فهرست" className="mb-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li><a href="#data-we-collect" className="underline underline-offset-4 hover:opacity-90">داده‌هایی که جمع‌آوری می‌کنیم</a></li>
            <li><a href="#how-we-use" className="underline underline-offset-4 hover:opacity-90">نحوه استفاده از داده‌ها</a></li>
            <li><a href="#sharing" className="underline underline-offset-4 hover:opacity-90">اشتراک‌گذاری با اشخاص ثالث</a></li>
            <li><a href="#cookies" className="underline underline-offset-4 hover:opacity-90">کوکی‌ها و فناوری‌های مشابه</a></li>
            <li><a href="#rights" className="underline underline-offset-4 hover:opacity-90">حقوق و انتخاب‌های شما</a></li>
            <li><a href="#security" className="underline underline-offset-4 hover:opacity-90">امنیت و نگه‌داری داده</a></li>
            <li><a href="#contact" className="underline underline-offset-4 hover:opacity-90">تماس با ما</a></li>
            <li><a href="#changes" className="underline underline-offset-4 hover:opacity-90">تغییرات این سیاست</a></li>
          </ul>
        </nav>

        <div className="space-y-8">
          <section id="data-we-collect" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold">داده‌هایی که جمع‌آوری می‌کنیم</h2>
            <p className="text-sm sm:text-base leading-7 text-foreground/80">
              هنگام استفاده از شیکالا (وب‌سایت و <a href="https://panel.shikala.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">پنل فروشندگان</a>) بسته به خدمات مورد استفاده، ممکن است داده‌های زیر جمع‌آوری شود:
            </p>
            <ul className="list-disc ps-6 text-sm sm:text-base leading-7 text-foreground/80">
              <li>اطلاعات هویتی و حقوقی فروشگاه (نام، شناسه ملی/ثبت، مدارک احراز).</li>
              <li>اطلاعات تماس (شماره تلفن، ایمیل، آدرس کسب‌وکار).</li>
              <li>داده‌های تراکنش و سفارش (مبالغ، وضعیت‌ها، رسیدها بدون جزئیات محرمانه کارت).</li>
              <li>موجودی و مشخصات محصولات ثبت‌شده و فعالیت‌های انتشار آگهی.</li>
              <li>داده‌های فنی و کاربردی (IP، نوع مرورگر، دستگاه، لاگ خطا و کاربری).</li>
            </ul>
          </section>

          <section id="how-we-use" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold">نحوه استفاده از داده‌ها</h2>
            <ul className="list-disc ps-6 text-sm sm:text-base leading-7 text-foreground/80">
              <li>ارائه خدمات هسته (مدیریت موجودی، انتشار آگهی، پردازش سفارش و تسویه).</li>
              <li>حفظ امنیت و اعتماد شبکه (احراز هویت، کشف تقلب، کنترل اعتبار).</li>
              <li>بهبود تجربه کاربری و عملکرد (تحلیل استفاده، رفع باگ‌ها، بهینه‌سازی).</li>
              <li>ارتباطات عملیاتی و اطلاع‌رسانی‌های ضروری مرتبط با حساب و سفارش‌ها.</li>
            </ul>
          </section>

          <section id="sharing" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold">اشتراک‌گذاری با اشخاص ثالث</h2>
            <p className="text-sm sm:text-base leading-7 text-foreground/80">
              داده‌ها صرفاً در موارد ضروری و مطابق قوانین با ارائه‌دهندگان خدمات (درگاه پرداخت، سرویس پیامک/تلگرام، میزبانی و تحلیل) به اشتراک گذاشته می‌شود. اطلاعات محرمانه پرداخت نزد درگاه بانکی باقی می‌ماند.
            </p>
          </section>

          <section id="cookies" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold">کوکی‌ها و فناوری‌های مشابه</h2>
            <p className="text-sm sm:text-base leading-7 text-foreground/80">
              ما از کوکی‌های ضروری برای ورود امن و حفظ نشست و نیز از کوکی‌های عملکردی برای بهبود تجربه استفاده می‌کنیم. می‌توانید از طریق تنظیمات مرورگر، مدیریت کوکی‌ها را کنترل کنید.
            </p>
          </section>

          <section id="rights" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold">حقوق و انتخاب‌های شما</h2>
            <ul className="list-disc ps-6 text-sm sm:text-base leading-7 text-foreground/80">
              <li>دسترسی و اصلاح اطلاعات حساب و فروشگاه از داخل پنل.</li>
              <li>درخواست حذف یا محدودسازی پردازش داده‌ها در موارد مجاز قانونی.</li>
              <li>مدیریت ترجیحات ارتباطی و اعلان‌ها.</li>
            </ul>
          </section>

          <section id="security" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold">امنیت و نگه‌داری داده</h2>
            <p className="text-sm sm:text-base leading-7 text-foreground/80">
              شیکالا استانداردهای امنیتی لازم را برای حفاظت از داده‌ها به‌کار می‌گیرد. داده‌ها به‌مدت لازم برای ارائه خدمات و الزامات حقوقی نگه‌داری می‌شوند و سپس مطابق سیاست‌های داخلی حذف/ناشناس‌سازی می‌گردند.
            </p>
          </section>

          <section id="contact" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold">تماس با ما</h2>
            <p className="text-sm sm:text-base leading-7 text-foreground/80">
              برای پرسش‌ها یا درخواست‌های مرتبط با حریم خصوصی، از طریق صفحه
              {" "}
              <Link href="/contact" className="underline underline-offset-4">تماس با ما</Link>
              {" "}
              اقدام کنید.
            </p>
          </section>

          <section id="changes" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold">تغییرات این سیاست</h2>
            <p className="text-sm sm:text-base leading-7 text-foreground/80">
              ممکن است این سیاست به‌روزرسانی شود. نسخه‌های جدید از طریق همین صفحه منتشر می‌شوند و تاریخ به‌روزرسانی درج خواهد شد.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}