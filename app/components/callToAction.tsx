export default function CallToAction() {
  return (
    <section dir="rtl" className="relative bg-background py-16">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-foreground/[0.06] to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center rounded-2xl ring-1 ring-foreground/10 bg-background/70 backdrop-blur-sm p-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            همین امروز فروشگاه‌تان را به شیکالا وصل کنید
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70">
            با چند کلیک ساده، آگهی‌ها را خودکار منتشر کنید و فروش آنلاین را شروع کنید.
          </p>

          <div className="mt-6">
            <a
              href="https://panel.shikala.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-7 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-foreground text-background ring-1 ring-foreground/10 hover:bg-foreground/90 transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20"
            >
              ثبت فروشگاه
            </a>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-foreground/60">
            پلن رایگان همیشه در دسترس است؛ هر زمان خواستید ارتقا دهید.
          </p>
        </div>
      </div>
    </section>
  );
}