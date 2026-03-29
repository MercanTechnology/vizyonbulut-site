"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { NavGroup } from "@/data/nav";
import { cloudMegaMenu, megaMenuCozumler, megaMenuHizmetler, kurumsalNavGridItems } from "@/data/nav";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";

function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-slate-50">{title}</span>
        <ChevronDown className={cn("h-4 w-4 text-slate-200/90 transition-transform", open ? "rotate-180" : "")} />
      </button>
      {open ? <div className="px-4 pb-4">{children}</div> : null}
    </div>
  );
}

function GroupBlock({
  group,
  onNavigate,
}: {
  group: NavGroup;
  onNavigate: () => void;
}) {
  const HeadingIcon = group.icon;
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20">
      <Link
        href={group.href}
        onClick={onNavigate}
        className="flex items-center justify-between px-4 py-3"
      >
        <div className="flex items-start gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/6 ring-1 ring-white/10">
            <HeadingIcon className="h-4 w-4 text-cyan-200/90" />
          </span>
          <div>
            <div className="text-sm font-semibold text-slate-50">{group.title}</div>
            <div className="mt-1 text-xs vb-text-muted">{group.description}</div>
          </div>
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-slate-200/80" />
      </Link>
      <div className="grid gap-1 px-4 pb-4">
        {group.items.map((it) => {
          const Icon = it.icon;
          return (
            <Link
              key={it.href}
              href={it.href}
              onClick={onNavigate}
              className="flex items-center gap-2 rounded-xl border border-transparent px-2.5 py-2 transition-colors hover:border-white/10 hover:bg-white/6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/6 ring-1 ring-white/10">
                <Icon className="h-4 w-4 text-slate-200/90" />
              </span>
              <span className="text-sm font-semibold text-slate-100">{it.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function MobileNav({
  portalHref = "/portal-girisi",
  musteriHref = "/musteri-girisi",
}: {
  portalHref?: string;
  musteriHref?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const privateCloud = useMemo(() => cloudMegaMenu.privateCloud, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition-colors hover:bg-white/8 lg:hidden"
        aria-label="Menüyü aç"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[120]">
          <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute inset-x-0 top-0 mx-auto max-w-2xl p-4">
            <div className="vb-glass rounded-3xl border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,.55)]">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 p-4">
                <div className="flex items-center gap-2">
                  <Badge tone="info">Navigasyon</Badge>
                  <div className="text-xs vb-text-muted">Cloud • Çözümler • Hizmetler</div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition-colors hover:bg-white/8"
                  aria-label="Menüyü kapat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid max-h-[calc(100vh-8rem)] gap-3 overflow-auto p-4">
                <AccordionSection title="Cloud" defaultOpen>
                  <div className="space-y-3">
                    <p className="rounded-2xl border border-white/10 bg-black/20 p-4 text-xs vb-text-muted leading-relaxed">
                      {cloudMegaMenu.cloudDescription}
                    </p>
                    <Link
                      href={cloudMegaMenu.ctaHref}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-cyan-300 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
                    >
                      {cloudMegaMenu.ctaLabel}
                    </Link>
                    <GroupBlock group={privateCloud} onNavigate={() => setOpen(false)} />
                  </div>
                </AccordionSection>

                <AccordionSection title="Çözümler">
                  <div className="grid gap-3">
                    {megaMenuCozumler.map((g) => (
                      <GroupBlock key={g.title} group={g} onNavigate={() => setOpen(false)} />
                    ))}
                  </div>
                </AccordionSection>

                <AccordionSection title="Hizmetler">
                  <div className="grid gap-3">
                    {megaMenuHizmetler.map((g) => (
                      <GroupBlock key={g.title} group={g} onNavigate={() => setOpen(false)} />
                    ))}
                  </div>
                </AccordionSection>

                <AccordionSection title="Kurumsal">
                  <div className="grid gap-2">
                    {kurumsalNavGridItems.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl border border-white/10 bg-black/20 px-3 py-3 transition-colors hover:bg-white/8"
                      >
                        <div className="text-sm font-semibold text-slate-50">{it.title}</div>
                        <div className="mt-1 text-xs vb-text-muted leading-snug">{it.description}</div>
                      </Link>
                    ))}
                  </div>
                </AccordionSection>

                <div className="grid gap-2">
                  <Link
                    href="/blog"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/8"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/iletisim"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/8"
                  >
                    İletişim
                  </Link>
                </div>

                <div className="grid gap-2 border-t border-white/10 pt-4">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <Link
                      href={portalHref}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/8"
                    >
                      Portal Girişi
                    </Link>
                    <Link
                      href={musteriHref}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/8"
                    >
                      Müşteri Girişi
                    </Link>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <Button href="/demo-talep" variant="outline" size="lg" className="w-full">
                      Demo Talep
                    </Button>
                    <Button href="/iletisim" variant="primary" size="lg" className="w-full">
                      Teklif Al
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
