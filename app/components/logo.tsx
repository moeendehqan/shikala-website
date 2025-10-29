import type { CSSProperties } from "react";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  style?: CSSProperties;
};

export default function Logo({
  width,
  height,
  className,
  alt = "لوگوی شیکالا",
  style,
}: LogoProps) {
  return (
    // فقط SVG: با ماسک تصویری و رنگ برند در همین کامپوننت
    <span
      role="img"
      aria-label={alt}
      title={alt}
      className={className}
      style={{
        display: "inline-block",
        // اگر width/height داده شود اعمال می‌شود؛ در غیر این صورت کلاس‌های CSS تعیین‌کننده‌اند
        width: width ?? undefined,
        height: height ?? undefined,
        backgroundColor: "var(--primary)",
        WebkitMaskImage: 'url("/logo.svg")',
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: 'url("/logo.svg")',
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
        ...style,
      }}
    />
  );
}