type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
};

export default function Logo({
  width = 30,
  height = 30,
  className,
  alt = "لوگوی شیکالا",
}: LogoProps) {
  return (
    <picture>
      {/* فرمت برداری برای مرورگرهای پشتیبان */}
      <source srcSet="/logo.svg" type="image/svg+xml" />
      {/* جایگزین PNG برای مرورگرهای بدون پشتیبانی SVG */}
      <img
        src="/logo.png"
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading="eager"
        decoding="async"
      />
    </picture>
  );
}