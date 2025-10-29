"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "نحوه همکاری با شیکالا چگونه است؟",
    a: "ابتدا فروشگاه خود را ثبت‌نام می‌کنید، پروفایل را تکمیل می‌نمایید و سپس پلتفرم‌های مدنظر را متصل می‌کنید. پس از آن می‌توانید موجودی را اضافه کرده و آگهی‌ها را منتشر کنید.",
  },
  {
    q: "هزینه‌ها و پلن‌های اشتراک چگونه محاسبه می‌شود؟",
    a: "پلن‌های ماهانه و سالانه با امکانات متفاوت ارائه می‌شوند. هزینه براساس تعداد محصولات، دفعات انتشار و امکانات افزوده محاسبه می‌شود. می‌توانید از پلن رایگان شروع کنید و در صورت نیاز ارتقا دهید.",
  },
  {
    q: "پشتیبانی و ارتباط با تیم چگونه انجام می‌شود؟",
    a: "از طریق چت داخل پنل، ایمیل و تلفن در دسترس هستیم. درخواست‌های شما با SLA مشخص پیگیری می‌شود و مستندات راهنما به‌صورت کامل در دسترس قرار دارد.",
  },
  {
    q: "اتصال به پلتفرم‌های آگهی چگونه انجام می‌شود؟",
    a: "با چند مرحله ساده و یک کلیک، حساب‌های خود را احراز و متصل می‌کنید. انتشار آگهی‌ها به‌صورت خودکار و زمان‌بندی‌شده انجام می‌شود.",
  },
  {
    q: "مدیریت سفارش‌ها و خریداران به چه شکل است؟",
    a: "در پنل فروشنده می‌توانید سفارش‌ها را مشاهده، وضعیت‌ها را تغییر دهید، با خریداران ارتباط بگیرید و فرایند ارسال و فاکتور را مدیریت کنید.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section dir="rtl" className="relative bg-background py-16">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-foreground/[0.06] to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">سؤالات متداول</h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70">
            پاسخ به پرسش‌های رایج درباره همکاری، هزینه و پشتیبانی
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-panel-${idx}`;
            const headingId = `faq-heading-${idx}`;
            return (
              <div
                key={item.q}
                className="rounded-2xl ring-1 ring-foreground/10 bg-background/70 backdrop-blur-sm p-2 sm:p-3"
              >
                <button
                  id={headingId}
                  className="w-full flex items-center gap-4 text-start px-3 py-3 sm:px-4 sm:py-4 rounded-xl hover:bg-foreground/[0.04] transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(idx)}
                >
                  <span className="flex-1 text-base sm:text-lg font-semibold">{item.q}</span>
                  <svg
                    className={`size-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headingId}
                  className={`px-3 sm:px-4 overflow-hidden transition-all ${
                    isOpen ? "max-h-64 opacity-100 mt-1 sm:mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base leading-7 text-foreground/70">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}