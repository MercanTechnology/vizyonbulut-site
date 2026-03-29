import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryNav, siteConfig, utilityLinks } from "@/data/site";
import { Badge } from "@/components/ui/Badge";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="text-lg font-semibold text-slate-50">{siteConfig.brand}</div>
            <p className="text-sm vb-text-muted">
              Kurumsal bulut altyapısı, yönetilen operasyon ve güvenlik sürekliliği.
            </p>
            <Badge tone="info">{siteConfig.legalBrandLine}</Badge>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-50">Hızlı Bağlantılar</div>
            <ul className="mt-4 space-y-2 text-sm">
              {primaryNav.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="vb-text-muted hover:text-slate-50 transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-50">Kurumsal</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/kurumsal#hakkimizda" className="vb-text-muted hover:text-slate-50 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/kurumsal#kariyer" className="vb-text-muted hover:text-slate-50 transition-colors">
                  Kariyer Merkezi
                </Link>
              </li>
              <li>
                <Link href="/kurumsal#sertifikalar" className="vb-text-muted hover:text-slate-50 transition-colors">
                  Sertifikalarımız
                </Link>
              </li>
              <li>
                <Link href="/kurumsal#politikalar" className="vb-text-muted hover:text-slate-50 transition-colors">
                  Politikalarımız
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-50">İletişim</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="vb-text-muted">{siteConfig.contact.address}</li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="vb-text-muted hover:text-slate-50 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href="tel:+900000000000" className="vb-text-muted hover:text-slate-50 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {utilityLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-white/8 transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs vb-text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {siteConfig.brand}. Tüm hakları saklıdır.</div>
          <div className="flex gap-4">
            <Link href="/kurumsal#politikalar" className="hover:text-slate-50 transition-colors">
              Gizlilik & Politikalar
            </Link>
            <Link href="/iletisim" className="hover:text-slate-50 transition-colors">
              İletişim
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

