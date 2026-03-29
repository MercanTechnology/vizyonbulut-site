"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function DesktopNavTrigger({
  label,
  isOpen,
  onOpen,
  onClose,
  onBeforeOpen,
}: {
  label: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  /** Runs before opening (e.g. cancel other delayed menus) */
  onBeforeOpen?: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={() => {
        onBeforeOpen?.();
        onOpen();
      }}
      onFocus={() => {
        onBeforeOpen?.();
        onOpen();
      }}
      onClick={() => (isOpen ? onClose() : onOpen())}
      className={cn(
        "group inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
        isOpen ? "bg-white/8 text-slate-50" : "text-slate-200/90 hover:bg-white/5 hover:text-slate-50",
      )}
      aria-expanded={isOpen}
      aria-haspopup="menu"
    >
      {label}
      <ChevronDown
        className={cn(
          "h-4 w-4 opacity-80 transition-transform duration-200",
          isOpen ? "rotate-180" : "rotate-0",
        )}
      />
    </button>
  );
}

export function DesktopNavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-200/90 hover:text-slate-50 hover:bg-white/5 transition-colors"
    >
      {label}
    </Link>
  );
}

