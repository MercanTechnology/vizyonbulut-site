"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { Cloud as CloudLogo, ChevronDown } from "lucide-react";
import { DesktopNavLink, DesktopNavTrigger } from "@/components/public/nav/NavItem";
import { MegaMenuPanel } from "@/components/public/nav/MegaMenuPanel";
import { CloudNavbarMegaMenu } from "@/components/public/nav/CloudNavbarMegaMenu";
import { KurumsalNavGrid } from "@/components/public/nav/KurumsalNavGrid";
import { MobileNav } from "@/components/public/nav/MobileNav";
import { megaMenuCozumler, megaMenuHizmetler } from "@/data/nav";

type OpenMenu = "none" | "cloud" | "cozumler" | "hizmetler" | "kurumsal";

const CLOUD_OPEN_DELAY_MS = 150;

export function Navbar({ className }: { className?: string }) {
  const [open, setOpen] = useState<OpenMenu>("none");
  const cloudHoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloudHoverTimer = () => {
    if (cloudHoverTimerRef.current) {
      clearTimeout(cloudHoverTimerRef.current);
      cloudHoverTimerRef.current = null;
    }
  };

  const close = () => {
    clearCloudHoverTimer();
    setOpen("none");
  };

  const scheduleCloudOpen = () => {
    clearCloudHoverTimer();
    cloudHoverTimerRef.current = setTimeout(() => {
      setOpen("cloud");
      cloudHoverTimerRef.current = null;
    }, CLOUD_OPEN_DELAY_MS);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => clearCloudHoverTimer(), []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[300] w-full border-b border-slate-800/90 bg-slate-950 text-slate-100",
        className,
      )}
    >
      {/* Full-width relative wrapper: bar + mega sit here so panel is top:100% of header row */}
      <div
        className="relative w-full"
        onMouseLeave={() => {
          close();
        }}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-3">
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <CloudLogo className="h-5 w-5 text-cyan-200" />
              </span>
              <span className="text-sm font-semibold tracking-tight text-slate-50 sm:text-base">
                {siteConfig.brand}
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
              {/* Cloud: hover delay + click toggle */}
              <button
                type="button"
                onMouseEnter={scheduleCloudOpen}
                onMouseLeave={() => clearCloudHoverTimer()}
                onFocus={() => {
                  clearCloudHoverTimer();
                  setOpen("cloud");
                }}
                onClick={() => {
                  clearCloudHoverTimer();
                  setOpen((o) => (o === "cloud" ? "none" : "cloud"));
                }}
                className={cn(
                  "group inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
                  open === "cloud"
                    ? "bg-white/10 text-white"
                    : "text-slate-200/90 hover:bg-white/5 hover:text-white",
                )}
                aria-expanded={open === "cloud"}
                aria-haspopup="menu"
              >
                Cloud
                <ChevronDown
                  className={cn(
                    "h-4 w-4 opacity-80 transition-transform duration-200",
                    open === "cloud" ? "rotate-180" : "rotate-0",
                  )}
                />
              </button>

              <DesktopNavTrigger
                label="Çözümler"
                isOpen={open === "cozumler"}
                onBeforeOpen={clearCloudHoverTimer}
                onOpen={() => setOpen("cozumler")}
                onClose={close}
              />
              <DesktopNavTrigger
                label="Hizmetler"
                isOpen={open === "hizmetler"}
                onBeforeOpen={clearCloudHoverTimer}
                onOpen={() => setOpen("hizmetler")}
                onClose={close}
              />
              <DesktopNavTrigger
                label="Kurumsal"
                isOpen={open === "kurumsal"}
                onBeforeOpen={clearCloudHoverTimer}
                onOpen={() => setOpen("kurumsal")}
                onClose={close}
              />
              <DesktopNavLink href="/blog" label="Blog" />
              <DesktopNavLink href="/iletisim" label="İletişim" />
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <div className="hidden items-center gap-1 lg:flex">
                <Link
                  href="/portal-girisi"
                  className="inline-flex items-center rounded-xl px-3 py-2 text-xs font-semibold text-slate-200/90 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Portal Girişi
                </Link>
                <Link
                  href="/musteri-girisi"
                  className="inline-flex items-center rounded-xl px-3 py-2 text-xs font-semibold text-slate-200/90 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Müşteri Girişi
                </Link>
              </div>

              <Button href="/demo-talep" variant="outline" size="sm" className="hidden sm:inline-flex">
                Demo Talep
              </Button>
              <Button href="/iletisim" variant="primary" size="sm" className="hidden sm:inline-flex">
                Teklif Al
              </Button>

              <MobileNav />
            </div>
          </div>
        </Container>

        {/* Classic full-bleed mega: attached to navbar bottom */}
        {open !== "none" ? (
          <div
            className={cn(
              /* Overlap navbar by a few px so pointer never hits “air” between bar and panel */
              "pointer-events-auto absolute left-0 right-0 top-[calc(100%-8px)] z-[310] w-full",
              "border-t border-slate-200 bg-white pt-2",
              "shadow-[0_16px_48px_-12px_rgba(15,23,42,0.2)]",
              "animate-vb-mega-in",
            )}
          >
            <div className="mx-auto w-full max-w-[1200px] px-4 pb-5 pt-1">
              {open === "cloud" ? <CloudNavbarMegaMenu /> : null}
              {open === "cozumler" ? <MegaMenuPanel groups={megaMenuCozumler} variant="light" /> : null}
              {open === "hizmetler" ? <MegaMenuPanel groups={megaMenuHizmetler} variant="light" /> : null}
              {open === "kurumsal" ? <KurumsalNavGrid /> : null}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
