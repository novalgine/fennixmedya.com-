"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

const styles = {
  base: "font-heading font-bold rounded-xl inline-flex items-center justify-center gap-2 transition-all cursor-pointer",
  primary:
    "bg-gradient-gold text-primary-foreground shadow-lg shadow-gold/20 hover:brightness-105 hover:scale-[1.02] active:scale-[0.98]",
  secondary:
    "border-2 border-white/20 text-foreground hover:bg-white/5 hover:border-white/40",
  md: "text-base px-6 py-3",
  lg: "text-lg md:text-xl px-8 py-4",
};

type CtaButtonProps = {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "className" | "children">;

export default function CtaButton({
  variant = "primary",
  size = "lg",
  href,
  onClick,
  className,
  children,
  ...rest
}: CtaButtonProps) {
  const cls = cn(styles.base, styles[variant], styles[size], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  );
}
