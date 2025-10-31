import type { CSSProperties } from "react";
import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  style?: CSSProperties;
  priority?: boolean;
  variant?: "svg" | "png";
  sizes?: string;
};

export default function Logo({
  width = 128,
  height = 68,
  className,
  alt = "لوگوی شیکالا",
  style,
  priority = false,
  variant = "png",
  sizes = "(max-width: 640px) 10rem, (max-width: 768px) 12rem, (max-width: 1024px) 14rem, 16rem",
}: LogoProps) {
  return (
    // برای کیفیت بهتر: به‌صورت پیش‌فرض SVG؛ در صورت نیاز PNG با کیفیت 100
    variant === "svg" ? (
      <Image
        src="/logo.svg"
        width={width}
        height={height}
        className={className}
        alt={alt}
        style={style}
        priority={priority}
        sizes={sizes}
      />
    ) : (
      <Image
        src="/logo.png"
        width={width}
        height={height}
        className={className}
        alt={alt}
        style={style}
        priority={priority}
        sizes={sizes}
        quality={100}
      />
    )
  );
}
