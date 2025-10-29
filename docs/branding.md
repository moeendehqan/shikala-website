# هویت بصری برند شیکالا

این سند، پالت رنگی رسمی برند و دستورالعمل‌های استفاده برای تیم‌های طراحی و توسعه را مشخص می‌کند.

## پالت رنگ
- رنگ اصلی (Primary): `#EA3740` — قرمز متمایل به نارنجی؛ برای اکشن‌ها، CTA، هایلایت‌ها.
- رنگ ثانویه (Background): `#ECEAE5` — کرم روشن/سفید گرم؛ پس‌زمینه‌های عمومی.
- رنگ سوم (Foreground): `#0C0F14` — مشکی عمیق با ته‌رنگ آبی؛ متن‌ها و المان‌های خوانایی.

## پیاده‌سازی فنی
- توکن‌ها در `app/globals.css` تعریف شده‌اند:
  - `--color-primary` ← `bg-primary`, `text-primary`, `ring-primary` و ...
  - `--color-background` ← `bg-background`
  - `--color-foreground` ← `text-foreground`, `ring-foreground`
- حالت تاریک (Dark mode):
  - Background = `#0C0F14`
  - Foreground = `#ECEAE5`
  - Primary ثابت می‌ماند (`#EA3740`)

## دستورالعمل استفاده
- اولویت استفاده از رنگ‌ها: Primary > Background > Foreground.
- CTAها، دکمه‌ها و لینک‌های اقدام: از `bg-primary` یا گرادیان `from-primary to-primary/80` استفاده شود.
- پس‌زمینه‌های سکشن‌ها و کارت‌ها: `bg-background` با حلقه‌ی کم‌رنگ `ring-foreground/10`.
- متن‌ها و آیکن‌ها: `text-foreground` با درجات شفافیت (`/70`, `/60`، ...).
- حالت هاور برای لینک‌ها و مرزها: `hover:text-primary`، `hover:bg-primary/10`.
- گرادیان‌های تزئینی: از `from-primary/XX` یا `from-foreground/[opacity]` به‌صورت ملایم.

## دسترسی و کنتراست
- نسبت کنتراست بین متن و پس‌زمینه باید حداقل 4.5:1 برای متن‌های معمولی رعایت شود.
- برای متن روی دکمه‌های Primary از رنگ متن روشن (`text-background`) استفاده شود.
- در حالت تاریک، خوانایی متن‌ها با `text-foreground` حفظ می‌شود.

## افزایش حيوية الألوان والتدرجات
- زيادة التشبع عبر استخدام `from-primary/80 to-primary/60` في العناوين أو العناصر البارزة.
- استخدام حواف وأطر بـ `ring-primary/15` بدلًا من `ring-foreground/10` حيثما يلزم.
- تحسين قابلية القراءة برفع شفافية النصوص الثانوية من `text-foreground/70` إلى `text-foreground/80`.
- تأثيرات طفيفة: `hover:shadow-md` مع `hover:ring-primary/30` لبطاقات ومكونات تفاعلية.

## رنگ‌های مکمل (در موارد خاص)
- استفاده محدود و با توجیه حرفه‌ای؛ پیشنهادها: آبی تیره مکمل (`#0E1A24`)، کرم تیره‌تر (`#DDD9D2`) برای سایه‌زنی.
- در صورت نیاز به وضعیت‌ها (Success/Warning/Error) از نسخه‌های خنثی‌شده با شفافیت پایین استفاده شود تا با Primary تداخل نداشته باشد.

## نمونه‌ها
- دکمه: `class="bg-primary text-background hover:bg-primary/90 focus:ring-2 focus:ring-primary/20"`
- لینک ناوبری: `class="hover:text-primary"`
- کارت: `class="bg-background ring-1 ring-foreground/10"`
- تیتر گرادیانی: `class="bg-clip-text text-transparent bg-gradient-to-l from-primary to-primary/80"`

## نگهداشت
- هر کامپوننت جدید باید از توکن‌های بالا استفاده کند؛ استفاده از کدهای رنگ ثابت (هگز) در JSX/CSS ممنوع مگر در اسناد.
- تغییرات رنگی فقط در `globals.css` انجام شود تا یکپارچگی حفظ شود.