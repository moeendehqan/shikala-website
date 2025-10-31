import Image from "next/image";

type Step = {
  title: string;
  description: string;
  icon: string;
};

const steps: Step[] = [
  {
    title: "ثبت‌نام و احراز هویت فروشگاه",
    description:
      "با وارد کردن اطلاعات فروشگاه و مدارک رسمی، حساب کاربری خود را بساز و نشان تأیید (Badge) دریافت کن.",
    icon: "/shield.svg",
  },
  {
    title: "افزودن موجودی و مشخصات محصولات",
    description:
      "موبایل‌های موجود را به‌صورت تکی یا گروهی ثبت کن. موجودی و قیمت‌ها به‌صورت خودکار همگام‌سازی می‌شوند.",
    icon: "/file.svg",
  },
  {
    title: "انتشار خودکار آگهی در کانال‌ها",
    description:
      "محصولات ثبت‌شده بلافاصله در وب‌سایت، کانال تلگرام رسمی و از طریق پیامک برای خریداران هدف منتشر می‌شوند.",
    icon: "/globe.svg",
  },
  {
    title: "دریافت سفارش و معامله اعتباری امن",
    description:
      "درخواست‌های خریداران را از پنل اختصاصی ببین، معامله را تأیید کن و پس از تحویل کالا، تسویه انجام می‌شود.",
    icon: "/order.svg",
  },
];

export default function HowItWork() {
  return (
    <section dir="rtl" className="relative isolate z-10 bg-background py-16">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-foreground/[0.06] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">نحوه کار شیکالا</h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70">
            ۳ تا ۴ گام ساده برای شروع و رشد فروش آنلاین
          </p>
        </div>

        {/* Timeline/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="group relative rounded-2xl ring-1 ring-foreground/10 bg-background/70 backdrop-blur-sm p-6 transition-all hover:-translate-y-0.5 hover:ring-foreground/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center size-10 rounded-xl bg-foreground/[0.06] ring-1 ring-foreground/10">
                  <Image src={step.icon} alt={step.title} width={22} height={22} />
                </div>
                <span className="ms-auto inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-bold bg-foreground text-background">
                  {idx + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm leading-7 text-foreground/70">{step.description}</p>
              {/* Decorative underline on hover */}
              <div className="mt-4 h-[2px] w-0 bg-foreground transition-all group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}