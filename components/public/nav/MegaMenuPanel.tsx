"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/data/nav";
import {
  submenuNavIconWrapSm,
  submenuNavItemLinkBase,
  submenuNavItemTitleClass,
} from "@/components/public/nav/submenu-nav-styles";
import { ArrowRight } from "lucide-react";

function GroupColumn({
  group,
  variant,
}: {
  group: NavGroup;
  variant: "dark" | "light";
}) {
  const HeadingIcon = group.icon;
  const isDense = group.items.length > 6;
  const isLight = variant === "light";

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border p-4 transition-colors",
        isLight
          ? "border-slate-200 bg-slate-50/80 hover:border-slate-300 hover:bg-white"
          : "border-white/10 bg-white/[0.04] hover:border-white/20",
        !isLight && group.accent === "primary" && "ring-1 ring-cyan-400/20 bg-gradient-to-b from-cyan-400/[0.08] to-transparent",
        isLight && group.accent === "primary" && "border-cyan-200/60 bg-cyan-50/40",
      )}
    >
      <div
        className={cn(
          "flex items-start gap-3 border-b pb-3",
          isLight ? "border-slate-200" : "border-white/10",
        )}
      >
        <span
          className={cn(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1",
            isLight ? "border border-slate-200 bg-white text-cyan-700 ring-slate-100" : "bg-white/8 ring-white/10",
          )}
        >
          <HeadingIcon className={cn("h-4 w-4", isLight ? "text-cyan-700" : "text-cyan-200/95")} />
        </span>
        <div className="min-w-0">
          <div className={cn("text-sm font-semibold", isLight ? "text-slate-900" : "text-slate-50")}>
            {group.title}
          </div>
          <p className={cn("mt-1 text-xs leading-relaxed", isLight ? "text-slate-600" : "vb-text-muted")}>
            {group.description}
          </p>
        </div>
      </div>

      <div
        className={cn(
          "mt-3 grid flex-1 gap-1",
          isDense ? "sm:grid-cols-2 sm:gap-x-2" : "grid-cols-1",
        )}
      >
        {group.items.map((it) => {
          const Icon = it.icon;
          return (
            <Link
              key={it.href}
              href={it.href}
              className={cn(
                isLight
                  ? cn(submenuNavItemLinkBase, "items-center gap-2 px-2.5 py-2")
                  : "group/item flex items-center gap-2 rounded-lg border border-transparent px-2.5 py-2 transition-all hover:border-white/10 hover:bg-white/[0.06]",
              )}
            >
              <span
                className={cn(
                  isLight
                    ? submenuNavIconWrapSm
                    : "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/6 ring-1 ring-white/10 group-hover/item:ring-white/15",
                )}
              >
                <Icon className={cn("h-3.5 w-3.5", !isLight && "text-slate-200/90")} />
              </span>
              <span
                className={cn(
                  "min-w-0 leading-snug",
                  isLight
                    ? cn(submenuNavItemTitleClass, "text-xs sm:text-[13px]")
                    : "text-xs font-semibold text-slate-100 sm:text-[13px]",
                )}
              >
                {it.title}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-3 pt-2">
        <Link
          href={group.href}
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold transition-colors",
            isLight ? "text-cyan-700 hover:text-cyan-800" : "text-cyan-200/90 hover:text-cyan-100",
          )}
        >
          {group.title} — detay <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export function MegaMenuPanel({
  groups,
  variant = "dark",
}: {
  groups: NavGroup[];
  variant?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "rounded-xl border shadow-[0_12px_40px_-12px_rgba(15,23,42,0.2)]",
        variant === "light" ? "border-slate-200 bg-white p-5 sm:p-6" : "vb-glass border-white/10 p-5 sm:p-6",
      )}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {groups.map((g) => (
          <GroupColumn key={g.title} group={g} variant={variant} />
        ))}
      </div>
    </div>
  );
}
