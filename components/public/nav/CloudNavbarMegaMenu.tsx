"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  cloudNavbarMegaTabs,
  cloudNavbarMegaItems,
  type CloudMegaTabId,
} from "@/data/cloud-navbar-mega";
import { cloudMegaMenu } from "@/data/nav";
import {
  submenuNavItemDescriptionClass,
  submenuNavItemLinkBase,
  submenuNavIconWrapMd,
  submenuNavItemTitleClass,
} from "@/components/public/nav/submenu-nav-styles";
import { ArrowRight } from "lucide-react";

export function CloudNavbarMegaMenu() {
  const [active, setActive] = useState<CloudMegaTabId>("private");
  const items = cloudNavbarMegaItems[active];

  return (
    <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_40px_-12px_rgba(15,23,42,0.2)]">
      {/* LEFT SIDEBAR — dark rail */}
      <nav
        className="flex w-[250px] shrink-0 flex-col border-r border-slate-800/80 bg-slate-900 py-3"
        aria-label="Cloud kategorileri"
      >
        {cloudNavbarMegaTabs.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onMouseEnter={() => setActive(tab.id)}
              onFocus={() => setActive(tab.id)}
              className={cn(
                "flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold transition-all duration-200",
                isActive
                  ? "border-l-[3px] border-cyan-400 bg-slate-800 text-white"
                  : "border-l-[3px] border-transparent text-slate-400 hover:bg-slate-800/70 hover:text-slate-100",
              )}
            >
              <TabIcon className={cn("h-4 w-4 shrink-0", isActive ? "text-cyan-300" : "text-slate-500")} />
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* RIGHT — grid */}
      <div className="min-w-0 flex-1 bg-white p-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-slate-900">
              {cloudNavbarMegaTabs.find((t) => t.id === active)?.label}
            </h3>
            <p className="mt-1 max-w-xl text-sm text-slate-600">
              {active === "private"
                ? cloudMegaMenu.cloudDescription
                : "Yerel ve bulut ortamlarını tek operasyon modelinde birleştirin; güvenli bağlantı ve tutarlı politika."}
            </p>
          </div>
          <Link
            href={cloudMegaMenu.ctaHref}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-cyan-500/40 hover:bg-cyan-50"
          >
            {cloudMegaMenu.ctaLabel}
            <ArrowRight className="h-4 w-4 text-slate-600" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <Link
                key={it.href + it.title}
                href={it.href}
                className={cn(submenuNavItemLinkBase, "flex-col gap-2 p-4")}
              >
                <div className="flex items-start gap-3">
                  <span className={submenuNavIconWrapMd}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className={cn(submenuNavItemTitleClass, "text-sm leading-snug")}>{it.title}</div>
                    <p className={cn(submenuNavItemDescriptionClass, "mt-1 text-xs leading-relaxed")}>
                      {it.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
