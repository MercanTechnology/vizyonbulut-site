import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "text-slate-950 bg-gradient-to-b from-cyan-300 to-cyan-400 hover:from-cyan-200 hover:to-cyan-300 shadow-[0_0_0_1px_rgba(34,211,238,.25),0_12px_40px_rgba(34,211,238,.12)]",
  secondary:
    "text-slate-50 bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 shadow-[0_0_0_1px_rgba(59,130,246,.25),0_12px_40px_rgba(59,130,246,.12)]",
  outline:
    "text-slate-100 border border-white/15 bg-white/5 hover:bg-white/8 hover:border-white/20",
  ghost: "text-slate-100 hover:bg-white/8",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  children,
}: {
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 disabled:opacity-50 disabled:pointer-events-none";
  const cls = cn(base, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}

