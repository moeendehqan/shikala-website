"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "چه کسانی می‌توانند در شیکالا عضو شوند؟",
    a: "شیکالا مخصوص فروشندگان، تأمین‌کنندگان و فعالان صنف موبایل است. کاربران عمومی امکان ثبت‌نام یا خرید در پلتفرم را ندارند.",
  },
  {
    q: "نحوه همکاری و شروع فعالیت چگونه است؟",
    a: "پس از ثبت‌نام، احراز هویت و تأیید مدارک فروشگاه، می‌توانید موجودی خود را اضافه کرده و محصولاتتان را در پلتفرم منتشر کنید. آگهی‌ها به‌صورت خودکار در وب‌سایت، تلگرام و پیامک اطلاع‌رسانی می‌شوند.",
  },
  {
    q: "پرداخت و تسویه معاملات به چه صورت انجام می‌شود؟",
    a: "تمام معاملات از طریق درگاه پرداخت شیکالا انجام می‌شوند. مبلغ تا زمان تأیید تحویل توسط خریدار نزد پلتفرم باقی می‌ماند و سپس به فروشنده تسویه می‌گردد.",
  },
  {
    q: "آیا معاملات اعتباری در شیکالا امکان‌پذیر است؟",
    a: "بله. پلتفرم سقف اعتبار کاربران را کنترل کرده و امکان انجام معاملات اعتباری امن را فراهم می‌کند. تسویه پس از تحویل کالا انجام می‌شود.",
  },
  {
    q: "هزینه استفاده از شیکالا چقدر است؟",
    a: "کاربران می‌توانند با پلن اشتراک ماهانه یا سالانه فعالیت کنند. علاوه‌بر اشتراک، درصد کوچکی کارمزد از هر معامله موفق دریافت می‌شود.",
  },
  {
    q: "آیا کاربران باید احراز هویت شوند؟",
    a: "بله. تمامی فروشندگان و تأمین‌کنندگان برای فعالیت در شیکالا باید احراز هویت شوند تا اعتبار و امنیت شبکه حفظ شود.",
  },
  {
    q: "آیا نسخه موبایل یا اپلیکیشن دارد؟",
    a: "در حال حاضر شیکالا از طریق وب‌سایت و ربات تلگرام در دسترس است. نسخه موبایل در برنامه توسعه آینده قرار دارد.",
  },
  {
    q: "چه برندهایی در شیکالا پشتیبانی می‌شوند؟",
    a: "تمام برندهای موبایل و لوازم جانبی در شیکالا قابل ثبت و معامله هستند؛ از برندهای پرطرفدار تا مدل‌های خاص و کمیاب.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section dir="rtl" className="relative isolate z-10 bg-background py-16">
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