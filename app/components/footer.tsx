import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer dir="rtl" className="border-t border-foreground/10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* تماس */}
          <div>
            <h3 className="text-lg font-bold mb-3 relative after:absolute after:-bottom-2 after:right-0 after:h-[2px] after:w-10 after:bg-primary">ارتباط با ما</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                تلفن: <a href="tel:+982191000000" className="hover:underline">021-9100-0000</a>
              </li>
              <li>
                ایمیل: <a href="mailto:support@shikala.com" className="hover:underline">support@shikala.com</a>
              </li>
              <li>ساعات پاسخ‌گویی: ۹ تا ۱۸، روزهای کاری</li>
            </ul>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div>
            <h3 className="text-lg font-bold mb-3">شبکه‌های اجتماعی</h3>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com/shikala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl ring-1 ring-primary/15 hover:bg-primary/10"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://t.me/shikala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl ring-1 ring-primary/15 hover:bg-primary/10"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 4.5L3.5 11l6 2.5L17 8l-6.5 7.5V20l3.5-3.5 4.5 3.5 2-15z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
                </svg>
                <span className="text-sm">Telegram</span>
              </a>
              <a
                href="https://x.com/shikala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl ring-1 ring-primary/15 hover:bg-primary/10"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 3H20l-7.2 8.2L21 21h-4.4l-5.6-6.3L5.5 21H2l7.9-9.1L3 3h4.5l5.2 5.8L16.6 3z" />
                </svg>
                <span className="text-sm">X</span>
              </a>
            </div>
          </div>

          {/* آدرس و سیاست‌ها */}
          <div>
            <h3 className="text-lg font-bold mb-3 relative after:absolute after:-bottom-2 after:right-0 after:h-[2px] after:w-10 after:bg-primary">آدرس و سیاست‌ها</h3>
            <p className="text-sm text-foreground/80">
              تهران، خیابان مثال، پلاک ۱۲، واحد ۵
            </p>
            <div className="mt-2 text-sm">
              <Link href="/privacy" className="hover:underline hover:text-primary">
                سیاست حفظ حریم خصوصی
              </Link>
            </div>
          </div>

          {/* نماد اعتماد */}
          <div>
            <h3 className="text-lg font-bold mb-3 relative after:absolute after:-bottom-2 after:right-0 after:h-[2px] after:w-10 after:bg-primary">نماد اعتماد و مجوزها</h3>
            <div className="flex items-center gap-4">
              <div className="rounded-xl ring-1 ring-primary/15 bg-background/70 p-2">
                <Image src="/vercel.svg" alt="نماد اعتماد (نمونه)" width={48} height={48} />
              </div>
              <div className="rounded-xl ring-1 ring-primary/15 bg-background/70 p-2">
                <Image src="/next.svg" alt="مجوز کسب‌وکار (نمونه)" width={48} height={48} />
              </div>
            </div>
            <p className="mt-2 text-xs text-foreground/60">لطفاً با نمادهای رسمی خود جایگزین کنید.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
          <p>© {year} شیکالا — تمامی حقوق محفوظ است.</p>
            <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:underline hover:text-primary">شرایط استفاده</Link>
            <Link href="/privacy" className="hover:underline hover:text-primary">حریم خصوصی</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}