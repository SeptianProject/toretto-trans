import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  href?: string;
  showText?: boolean;
  size?: "sm" | "md";
}

const sizeClasses = {
  sm: { image: 44, wrapper: "gap-2" },
  md: { image: 56, wrapper: "gap-3" },
} as const;

export function BrandLogo({
  href = "/",
  showText = true,
  size = "md",
}: BrandLogoProps) {
  const content = (
    <>
      <span className="flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 ring-1 ring-white/10">
        <Image
          src="/PT_New_Toretto_Trans_Logo.jpeg"
          alt="Logo PT New Toretto Trans"
          width={sizeClasses[size].image}
          height={sizeClasses[size].image}
          className="h-auto w-auto object-contain"
          priority={size === "md"}
        />
      </span>
      {showText ? (
        <span>
          <span className="block text-base font-semibold tracking-wide text-heading">
            Toretto Trans
          </span>
          <span className="block text-xs text-muted">Tour Travel Surabaya</span>
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`flex items-center ${sizeClasses[size].wrapper}`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`flex items-center ${sizeClasses[size].wrapper}`}>
      {content}
    </div>
  );
}
