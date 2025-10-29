




import Image from "next/image";

type FeatureItem = {
  title: string;
  description: string;
  icon?: string;
  inlineIcon?: JSX.Element;
};

const items: FeatureItem[] = [
  {
    title: "مدیریت موجودی و قیمت‌ها",
    description:
      "همگام‌سازی موجودی، ویرایش گروهی قیمت‌ها و هشدار کمبود کالا به‌صورت هوشمند.",
    icon: "/file.svg",
  },
  {
    title: "ثبت خودکار آگهی در چند پلتفرم",
    description:
      "انتشار خودکار محصولات در پلتفرم‌های مختلف با یک‌بار ثبت و بدون تکرار.",
    icon: "/globe.svg",
  },
  {
    title: "سیستم مقایسه قیمت بازار",
    description:
      "قیمت رقابتی را با تحلیل بازار به‌دست بیاور و بهینه بفروش.",
    icon: "/next.svg",
  },
  {
    title: "پنل اختصاصی برای هر فروشنده",
    description:
      "داشبورد شخصی‌سازی‌شده برای مدیریت سفارش‌ها، موجودی، صورت‌حساب‌ها و گزارش‌ها.",
    icon: "/window.svg",
  },
  {
    title: "سیستم امتیازدهی و اعتبار فروشگاه‌ها",
    description:
      "افزایش اعتماد مشتریان با امتیازدهی شفاف و نشان اعتبار فروشگاه.",
    inlineIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        className="text-foreground"
      >
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section dir="rtl" className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            ویژگی‌های کلیدی شیکالا
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70">
            ابزارهای حرفه‌ای برای رشد فروش آنلاین، از انتشار تا تحلیل بازار.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl ring-1 ring-foreground/10 bg-background/70 backdrop-blur-sm p-5 transition-all hover:-translate-y-0.5 hover:ring-foreground/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 flex items-center justify-center rounded-xl bg-foreground/[0.06] ring-1 ring-foreground/10">
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
              <p className="text-sm leading-7 text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}