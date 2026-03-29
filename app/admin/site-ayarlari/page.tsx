import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/site";

function Field({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-200">{label}</span>
      <input
        defaultValue={defaultValue}
        className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-slate-100 outline-none focus:border-cyan-300/30 focus:ring-2 focus:ring-cyan-400/15"
      />
    </label>
  );
}

export default function AdminSiteAyarlarPage() {
  return (
    <AdminShell
      title="Site Ayarları"
      subtitle="Site başlığı, açıklama, slogan, logo, sosyal linkler ve SEO varsayılanları için düzenlenebilir görünüm (mock)."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-slate-50">Genel Ayarlar</div>
                <div className="mt-1 text-xs vb-text-muted">
                  Bu alanlar; public site üzerinde dinamik içerik ve SEO için kullanılacaktır.
                </div>
              </div>
              <Badge tone="info">Mock</Badge>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Site title" defaultValue={siteConfig.seo.defaultTitle} />
              <Field label="Slogan" defaultValue={siteConfig.slogan} />
              <div className="sm:col-span-2">
                <label className="grid gap-2">
                  <span className="text-xs font-semibold text-slate-200">Site description</span>
                  <textarea
                    defaultValue={siteConfig.seo.defaultDescription}
                    className="min-h-[120px] w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-300/30 focus:ring-2 focus:ring-cyan-400/15"
                  />
                </label>
              </div>
              <Field label="Logo (medya anahtarı)" defaultValue="media/logo.svg" />
              <Field label="Footer text" defaultValue="Kurumsal bulut altyapısı ve yönetilen operasyon." />
            </div>

            <div className="mt-5 flex gap-2">
              <Button variant="primary" size="sm" type="button">
                Kaydet
              </Button>
              <Button variant="outline" size="sm" type="button">
                Önizle
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card>
            <CardContent className="p-5">
              <div className="text-sm font-semibold text-slate-50">Sosyal Linkler</div>
              <div className="mt-4 grid gap-4">
                <Field label="LinkedIn" defaultValue={siteConfig.social.linkedin} />
                <Field label="X" defaultValue={siteConfig.social.x} />
                <Field label="YouTube" defaultValue={siteConfig.social.youtube} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="text-sm font-semibold text-slate-50">SEO Varsayılanları</div>
              <div className="mt-3 text-xs vb-text-muted">
                Varsayılan meta başlık/açıklama ve sosyal paylaşım görseli gibi alanlar bu bölümden yönetilebilir.
              </div>
              <div className="mt-4 grid gap-4">
                <Field label="Default title" defaultValue={siteConfig.seo.defaultTitle} />
                <Field label="OG image (medya anahtarı)" defaultValue="media/og-default.png" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminShell>
  );
}

