import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formLeadsMock } from "@/data/admin-mock";

function StatCard({
  title,
  value,
  tone,
  helper,
}: {
  title: string;
  value: string;
  tone: "info" | "success" | "warning" | "danger" | "neutral";
  helper: string;
}) {
  return (
    <Card className="hover:border-white/20 transition-colors">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-slate-50">{title}</div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-50">{value}</div>
            <div className="mt-2 text-xs vb-text-muted">{helper}</div>
          </div>
          <Badge tone={tone}>{tone === "neutral" ? "Genel" : "Durum"}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AdminDashboardPage() {
  const totalLead = formLeadsMock.length;
  const yeni = formLeadsMock.filter((x) => x.durum === "Yeni").length;
  const demo = formLeadsMock.filter((x) => x.kaynakForm === "Demo Talep").length;
  const iletisim = formLeadsMock.filter((x) => x.kaynakForm === "İletişim").length;

  return (
    <AdminShell
      title="Dashboard"
      subtitle="Temel metrikler ve operasyon görünürlüğü için admin panel iskeleti."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard
          title="Toplam Lead"
          value={String(totalLead)}
          tone="info"
          helper="Form talepleri (mock veri)."
        />
        <StatCard
          title="Yeni Form Talepleri"
          value={String(yeni)}
          tone="warning"
          helper="İşleme alınmayı bekleyenler."
        />
        <StatCard
          title="Demo Talepleri"
          value={String(demo)}
          tone="info"
          helper="Demo akışına yönlendirilecek kayıtlar."
        />
        <StatCard
          title="İletişim Talepleri"
          value={String(iletisim)}
          tone="neutral"
          helper="Genel iletişim mesajları."
        />
        <StatCard
          title="Destek Talepleri"
          value="0"
          tone="danger"
          helper="Destek sistemi entegrasyonu eklendiğinde aktifleşir."
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card className="hover:border-white/20 transition-colors">
          <CardContent className="p-5">
            <div className="text-sm font-semibold text-slate-50">Hızlı Notlar</div>
            <ul className="mt-3 space-y-2 text-sm vb-text-muted">
              <li>• Form kaynakları tek tabloda toplanır, durum akışı admin’den yönetilir.</li>
              <li>• Entegrasyonlar yalnızca admin panelde ayar olarak görünür.</li>
              <li>• Blog, sayfalar ve medya; içerik yönetim katmanına hazır şekilde modellenmiştir.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:border-white/20 transition-colors">
          <CardContent className="p-5">
            <div className="text-sm font-semibold text-slate-50">Son Talepler (örnek)</div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5">
                  <tr className="text-xs font-semibold text-slate-200">
                    <th className="px-4 py-3">Ad Soyad</th>
                    <th className="px-4 py-3">Kaynak</th>
                    <th className="px-4 py-3">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {formLeadsMock.slice(0, 4).map((l) => (
                    <tr key={l.id} className="hover:bg-white/3">
                      <td className="px-4 py-3 text-slate-100">{l.adSoyad}</td>
                      <td className="px-4 py-3 vb-text-muted">{l.kaynakForm}</td>
                      <td className="px-4 py-3">
                        <Badge
                          tone={
                            l.durum === "Yeni"
                              ? "warning"
                              : l.durum === "İletişime Geçildi"
                                ? "success"
                                : l.durum === "Kapandı"
                                  ? "neutral"
                                  : "info"
                          }
                        >
                          {l.durum}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminShell>
  );
}

