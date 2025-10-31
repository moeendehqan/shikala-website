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
      className="sticky top-0 z-50 bg-primary text-background relative"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-foreground/[0.06] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* برند */}
          <Link href="/" className="flex items-center flex-row-reverse">
            <Logo
              priority
              className="w-40 sm:w-48 md:w-56 lg:w-64 ring-2 ring-background/20"
            />
          </Link>

          {/* ناوبری دسکتاپ */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-7 md:gap-8">
              {menuItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={`relative text-sm md:text-base font-medium transition-colors hover:text-background ${
                      isActive(item.link)
                        ? "text-background"
                        : "text-background/85"
                    } after:absolute after:-bottom-2 after:right-0 after:h-[2px] after:w-0 after:bg-background after:transition-all hover:after:w-full`}
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
              className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-background text-foreground shadow-sm hover:bg-background/90 transition-all"
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
        <ul className="px-4 py-3 space-y-2 bg-primary text-background">
          {menuItems.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                onClick={closeMenu}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-background/10 ${
                  isActive(item.link) ? "text-background" : "text-background/85"
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
              className="mt-2 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold bg-background text-foreground hover:bg-background/90"
            >
              <Image src="/window.svg" alt="پنل" width={16} height={16} />
              ورود به پنل
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;