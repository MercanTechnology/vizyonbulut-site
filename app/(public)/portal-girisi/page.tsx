import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Portal Girişi",
};

export default function PortalGirisiPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container className="max-w-xl">
        <SectionHeading
          eyebrow="Portal"
          title="Portal girişi"
          description="Bu sayfa, kimlik doğrulama ve rol yönetimi entegrasyonu eklendiğinde aktifleşecek şekilde hazırlanmış bir iskelettir."
          align="center"
        />

        <Card className="mt-10">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold text-slate-50">Giriş</div>
              <Badge tone="warning">Yakında</Badge>
            </div>
            <p className="mt-2 text-sm vb-text-muted">
              Kullanıcı doğrulama (SSO/MFA), oturum yönetimi ve yetkiler daha sonra eklenecek.
            </p>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-slate-200">E-posta</span>
                <input
                  type="email"
                  placeholder="ornek@firma.com"
                  className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-slate-100 placeholder:text-slate-400/70 outline-none focus:border-cyan-300/30 focus:ring-2 focus:ring-cyan-400/15"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-slate-200">Şifre</span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-slate-100 placeholder:text-slate-400/70 outline-none focus:border-cyan-300/30 focus:ring-2 focus:ring-cyan-400/15"
                />
              </label>
              <Button variant="primary" size="lg" type="button">
                Giriş Yap
              </Button>
              <Button href="/iletisim" variant="outline" size="lg">
                Erişim talebi için iletişime geçin
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

