import { cn } from "@/lib/utils";

type Tone = "neutral" | "success" | "warning" | "danger" | "info";

const toneClasses: Record<Tone, string> = {
  neutral: "bg-white/8 text-slate-100 ring-white/10",
  info: "bg-cyan-400/10 text-cyan-200 ring-cyan-300/20",
  success: "bg-emerald-400/10 text-emerald-200 ring-emerald-300/20",
  warning: "bg-amber-400/10 text-amber-200 ring-amber-300/20",
  danger: "bg-rose-400/10 text-rose-200 ring-rose-300/20",
};

export function Badge({
  className,
  tone = "neutral",
  children,
}: {
  className?: string;
  tone?: Tone;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ring-1",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

