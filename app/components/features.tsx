




import Image from "next/image";
import type { ReactNode } from "react";

type FeatureItem = {
  title: string;
  description: string;
  icon?: string;
  inlineIcon?: ReactNode;
};

const items: FeatureItem[] = [
  {
    title: "مدیریت هوشمند موجودی و قیمت‌ها",
    description:
      "موجودی و قیمت محصولات را یک‌جا مدیریت کن. تغییرات به‌صورت خودکار در تمام کانال‌ها (وب‌سایت، تلگرام و پیامک) به‌روزرسانی می‌شوند.",
    icon: "/file.svg",
  },
  {
    title: "انتشار خودکار در وب، تلگرام و پیامک",
    description:
      "با یک‌بار ثبت محصول، آگهی به‌صورت خودکار در وب‌سایت رسمی، کانال تلگرام و از طریق پیامک برای خریداران هدف ارسال می‌شود.",
    icon: "/globe.svg",
  },
  {
    title: "معاملات اعتباری با کنترل پلتفرم",
    description:
      "پلتفرم اعتبار کاربران را بررسی و کنترل می‌کند تا معاملات اعتباری امن و قابل اعتماد انجام شوند. تسویه پس از تأیید تحویل انجام می‌شود.",
    icon: "/credit.svg",
  },
  {
    title: "احراز هویت دوطرفه کاربران و فروشندگان",
    description:
      "تمام کاربران و فروشندگان با مدارک رسمی احراز هویت می‌شوند و نشان تأیید (Badge) دریافت می‌کنند تا محیطی امن و شفاف ایجاد شود.",
    icon: "/shield.svg",
  },
  {
    title: "مقایسه و تحلیل هوشمند قیمت بازار",
    description:
      "پلتفرم قیمت لحظه‌ای بازار را تحلیل می‌کند تا بتوانی محصولاتت را با بهترین قیمت ممکن عرضه کنی.",
    icon: "/comparison.svg",
  },
  {
    title: "پنل اختصاصی برای هر فروشنده",
    description:
      "از طریق پنل اختصاصی، سفارش‌ها، موجودی، تراکنش‌ها و گزارش‌های مالی را به‌صورت یکپارچه مدیریت کن.",
    icon: "/dashboard.svg",
  },
];


export default function Features() {
  return (
    <section dir="rtl" className="relative isolate z-10 bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            ویژگی‌های کلیدی شیکالا
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/80">
            ابزارهای حرفه‌ای برای رشد فروش آنلاین، از انتشار تا تحلیل بازار.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl ring-1 ring-foreground/10 bg-background/70 backdrop-blur-sm p-5 transition-all hover:-translate-y-0.5 hover:ring-primary/30 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 flex items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                    />
                  ) : (
                    item.inlineIcon
                  )}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm leading-7 text-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}