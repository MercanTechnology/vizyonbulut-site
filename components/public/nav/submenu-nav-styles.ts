/**
 * Shared desktop mega-menu / Kurumsal item interaction:
 * primary blue hover, white typography, lifted card, blue-tinted shadow — enterprise, not flashy.
 * Used by: Cloud grid links, Çözümler & Hizmetler (light) rows, Kurumsal grid cells.
 */
export const submenuNavItemLinkBase =
  [
    "group relative z-0 flex w-full min-w-0 rounded-lg border border-slate-100 bg-slate-50/80",
    "shadow-sm",
    "transition-all duration-200 ease-out",
    "hover:z-[1] hover:-translate-y-px hover:border-blue-600 hover:bg-blue-600",
    "hover:shadow-[0_14px_38px_-12px_rgba(37,99,235,0.33)]",
    "motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-sm",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
  ].join(" ");

export const submenuNavItemTitleClass =
  "font-bold text-slate-900 transition-colors duration-200 ease-out group-hover:text-white";

export const submenuNavItemDescriptionClass =
  "text-slate-600 transition-colors duration-200 ease-out group-hover:text-white/95";

/** Çözümler / Hizmetler compact row icon badge */
export const submenuNavIconWrapSm =
  [
    "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md",
    "border border-slate-200 bg-white text-slate-500 ring-1 ring-slate-100",
    "transition-all duration-200 ease-out",
    "group-hover:border-white/45 group-hover:bg-white/20 group-hover:text-white group-hover:ring-white/30",
  ].join(" ");

/** Cloud mega grid card icon badge */
export const submenuNavIconWrapMd =
  [
    "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
    "border border-slate-200 bg-white text-slate-500",
    "transition-all duration-200 ease-out",
    "group-hover:border-white/45 group-hover:bg-white/20 group-hover:text-white",
  ].join(" ");
