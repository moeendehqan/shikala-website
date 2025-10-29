"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "خانه", link: "/", position: "nav" },
    { name: "درباره ما", link: "/about", position: "nav" },
    { name: "تماس با ما", link: "/contact", position: "nav" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const isActive = (href: string) => pathname === href;

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-xl relative"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-foreground/[0.06] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* برند */}
          <Link href="/" className="flex items-center gap-3 flex-row-reverse">
            <Logo width={30} height={30} className="ring-2 ring-foreground/10" />
            <span className="text-lg sm:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-l from-primary to-primary/80">شیکالا</span>
          </Link>

          {/* ناوبری دسکتاپ */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {menuItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={`relative text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.link)
                        ? "text-foreground"
                        : "text-foreground/80"
                    } after:absolute after:-bottom-2 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* اکشن‌ها + منوی موبایل */}
          <div className="flex items-center gap-2">
            <a
              href="https://panel.shikala.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-linear-to-l from-primary to-primary/80 text-background shadow-sm hover:shadow-md transition-all hover:opacity-95"
            >
              <Image src="/window.svg" alt="پنل" width={16} height={16} />
              ورود به پنل
            </a>
            <button
              type="button"
              aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-primary/10"
            >
              {isOpen ? (
                // آیکون ضربدر
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // آیکون همبرگری
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* منوی موبایل */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 border-t ${
          isOpen ? "max-h-[320px]" : "max-h-0"
        }`}
      >
        <ul className="px-4 py-3 space-y-2 bg-background/80 backdrop-blur-sm">
          {menuItems.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                onClick={closeMenu}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-foreground/10 ${
                  isActive(item.link) ? "text-foreground" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://panel.shikala.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 block rounded-lg px-3 py-2 text-sm font-semibold text-background bg-foreground/90 hover:bg-foreground"
            >
              ورود به پنل
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;