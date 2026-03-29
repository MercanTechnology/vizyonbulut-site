import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { UploadCloud } from "lucide-react";

const mediaMock = [
  { key: "logo", label: "Logo", hint: "Ana marka logosu ve varyasyonları" },
  { key: "hero", label: "Hero görselleri", hint: "Ana sayfa vitrin görselleri" },
  { key: "certificates", label: "Sertifikalar", hint: "Sertifika görselleri ve belgeler" },
  { key: "partners", label: "Partner logoları", hint: "İş ortakları / teknoloji logoları" },
  { key: "banners", label: "Bannerlar", hint: "Kampanya veya duyuru bannerları" },
];

export default function AdminMedyaPage() {
  return (
    <AdminShell
      title="Medya"
      subtitle="Medya kütüphanesi ve yükleme alanı için UI iskeleti (mock)."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-50">Yükleme Alanı</div>
                <div className="mt-1 text-xs vb-text-muted">
                  Bu alan; gerçek dosya yükleme (S3/Blob), boyutlandırma ve CDN entegrasyonu için hazırlanmıştır.
                </div>
              </div>
              <Button variant="primary" size="sm" type="button">
                Yeni Klasör
              </Button>
            </div>

            <div className="mt-4 rounded-2xl border border-dashed border-white/15 bg-white/5 p-8">
              <div className="flex flex-col items-center text-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-300/20">
                  <UploadCloud className="h-6 w-6 text-cyan-200" />
                </span>
                <div className="text-sm font-semibold text-slate-50">Dosyaları buraya sürükleyin</div>
                <div className="text-xs vb-text-muted">veya “Yükle” düğmesiyle seçin. (Mock)</div>
                <Button variant="outline" size="sm" type="button">
                  Yükle
                </Button>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, idx) => (
                <div key={idx} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="aspect-[16/10] bg-gradient-to-br from-white/8 to-white/2" />
                  <div className="p-3">
                    <div className="text-xs font-semibold text-slate-100">asset_{idx + 1}.png</div>
                    <div className="mt-1 text-[11px] vb-text-muted">1024×640 • 240 KB</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-slate-50">Kategoriler</div>
                <Badge tone="info">{mediaMock.length}</Badge>
              </div>
              <div className="mt-4 grid gap-2">
                {mediaMock.map((m) => (
                  <div key={m.key} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-sm font-semibold text-slate-100">{m.label}</div>
                    <div className="mt-1 text-xs vb-text-muted">{m.hint}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="text-sm font-semibold text-slate-50">İpuçları</div>
              <ul className="mt-3 space-y-2 text-xs vb-text-muted">
                <li>• Logo ve hero görselleri için farklı boyut varyasyonları saklanır.</li>
                <li>• Sertifika belgeleri: görsel + PDF/URL referansı olarak modellenebilir.</li>
                <li>• Public site “entegrasyon” içeriklerini burada göstermez; sadece admin ayarlarında tutulur.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminShell>
  );
}

