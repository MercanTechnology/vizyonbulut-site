"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function DropdownPanel({
  title,
  description,
  items,
  cta,
  variant = "dark",
}: {
  title: string;
  description: string;
  items: { title: string; href: string; icon: LucideIcon }[];
  cta?: { title: string; href: string; icon: LucideIcon };
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";

  return (
    <div
      className={cn(
        "w-full max-w-md rounded-xl border shadow-[0_12px_40px_-12px_rgba(15,23,42,0.2)]",
        isLight ? "border-slate-200 bg-white" : "vb-glass w-[420px] border-white/10",
      )}
    >
      <div className="p-5">
        <div
          className={cn(
            "rounded-lg border p-4",
            isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5",
          )}
        >
          <div className={cn("text-sm font-semibold", isLight ? "text-slate-900" : "text-slate-50")}>
            {title}
          </div>
          <div className={cn("mt-2 text-xs leading-relaxed", isLight ? "text-slate-600" : "vb-text-muted")}>
            {description}
          </div>
        </div>

        <div className="mt-4 grid gap-1">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <Link
                key={it.href}
                href={it.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 transition-all",
                  isLight
                    ? "hover:border-slate-200 hover:bg-slate-50"
                    : "hover:border-white/10 hover:bg-white/6",
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1",
                    isLight
                      ? "border border-slate-200 bg-white text-slate-500 ring-slate-100 group-hover:text-cyan-700"
                      : "bg-white/6 ring-white/10 group-hover:ring-white/15",
                  )}
                >
                  <Icon className={cn("h-4 w-4", !isLight && "text-slate-200/90")} />
                </span>
                <span className={cn("text-sm font-semibold", isLight ? "text-slate-800" : "text-slate-100")}>
                  {it.title}
                </span>
              </Link>
            );
          })}
        </div>

        {cta ? (
          <div className={cn("mt-4 border-t pt-4", isLight ? "border-slate-200" : "border-white/10")}>
            <Link
              href={cta.href}
              className={cn(
                "inline-flex w-full items-center justify-between rounded-lg border px-4 py-3 text-sm font-semibold transition-colors",
                isLight
                  ? "border-slate-200 bg-cyan-600 text-white hover:bg-cyan-700"
                  : "border-white/10 bg-gradient-to-b from-cyan-300 to-cyan-400 text-slate-950 hover:from-cyan-200 hover:to-cyan-300",
              )}
            >
              <span>{cta.title}</span>
              <cta.icon className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
