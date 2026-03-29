import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Boxes,
  Newspaper,
  Image as ImageIcon,
  Inbox,
  Award,
  Shield,
  Plug,
  Users,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

type AdminNavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const adminNav: AdminNavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Sayfalar", href: "/admin/sayfalar", icon: FileText },
  { label: "Hizmetler", href: "/admin/hizmetler", icon: Briefcase },
  { label: "Çözümler", href: "/admin/cozumler", icon: Boxes },
  { label: "Blog", href: "/admin/blog", icon: Newspaper },
  { label: "Medya", href: "/admin/medya", icon: ImageIcon },
  { label: "Form Talepleri", href: "/admin/form-talepleri", icon: Inbox },
  { label: "Sertifikalar", href: "/admin/sertifikalar", icon: Award },
  { label: "Politikalar", href: "/admin/politikalar", icon: Shield },
  { label: "Entegrasyon Ayarları", href: "/admin/entegrasyon-ayarlari", icon: Plug },
  { label: "Kullanıcılar", href: "/admin/kullanicilar", icon: Users },
  { label: "Site Ayarları", href: "/admin/site-ayarlari", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:gap-4 lg:border-r lg:border-white/10 lg:bg-black/30 lg:p-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-semibold text-slate-50">VizyonBulut Admin</div>
        <div className="mt-1 text-xs vb-text-muted">Yetki • Roller • Denetim izleri (hazır iskelet)</div>
      </div>
      <nav className="flex flex-col gap-1">
        {adminNav.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-slate-200/90 hover:bg-white/5 hover:text-slate-50 hover:border-white/10 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-cyan-200/90" />
                {item.label}
              </span>
              <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-70 transition-opacity" />
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-xs vb-text-muted">
          Entegrasyonlar (Dynamics 365, destek sistemi, n8n, WhatsApp) sadece admin ayarlarında görünür.
        </div>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <Container className="max-w-none px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge tone="warning">Geliştirme Modu</Badge>
            <span className="text-xs vb-text-muted">
              Kimlik doğrulama henüz yok. Yapı; login/rol tabanlı erişim için hazır.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge tone="neutral">Rol: Super Admin (mock)</Badge>
            <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export function AdminShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("min-h-screen vb-bg")}>
      <Topbar />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 py-6 lg:grid-cols-[18rem_1fr]">
          <Sidebar />
          <div className="min-w-0">
            <div className="mb-6">
              <div className="text-2xl font-semibold tracking-tight text-slate-50">{title}</div>
              {subtitle ? <div className="mt-2 text-sm vb-text-muted">{subtitle}</div> : null}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

