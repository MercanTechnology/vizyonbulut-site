"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { kurumsalNavGridItems } from "@/data/nav";
import {
  submenuNavItemDescriptionClass,
  submenuNavItemLinkBase,
  submenuNavItemTitleClass,
} from "@/components/public/nav/submenu-nav-styles";

/**
 * Wide enterprise Kurumsal panel: 4-column grid, primary blue hover on each cell.
 */
export function KurumsalNavGrid() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-5 py-6 shadow-sm">
      <div className="mb-5 border-b border-slate-100 pb-4">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">Kurumsal</h2>
        <p className="mt-1 text-sm text-slate-600">
          Şirket profili, kaynaklar ve kurumsal içeriklere hızlı erişim.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
        {kurumsalNavGridItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              submenuNavItemLinkBase,
              "min-h-[5.5rem] flex-col justify-center px-4 py-3",
            )}
          >
            <span className={cn(submenuNavItemTitleClass, "text-sm")}>{item.title}</span>
            <span
              className={cn(
                submenuNavItemDescriptionClass,
                "mt-1 line-clamp-1 text-xs leading-snug",
              )}
            >
              {item.description}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
