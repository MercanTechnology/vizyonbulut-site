import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formLeadsMock, type FormSource } from "@/data/admin-mock";

function LeadsTable({ title, source }: { title: string; source: FormSource }) {
  const rows = formLeadsMock.filter((x) => x.kaynakForm === source);
  return (
    <Card className="hover:border-white/20 transition-colors">
      <CardContent className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-50">{title}</div>
            <div className="mt-1 text-xs vb-text-muted">Alanlar: ad soyad, şirket, email, telefon, kaynak, tarih, durum, notlar.</div>
          </div>
          <Badge tone="info">{rows.length} kayıt</Badge>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5">
              <tr className="text-xs font-semibold text-slate-200">
                <th className="px-4 py-3">Ad Soyad</th>
                <th className="px-4 py-3">Şirket</th>
                <th className="px-4 py-3">E-posta</th>
                <th className="px-4 py-3">Telefon</th>
                <th className="px-4 py-3">Tarih</th>
                <th className="px-4 py-3">Durum</th>
                <th className="px-4 py-3">Notlar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 vb-text-muted" colSpan={7}>
                    Bu form kaynağı için henüz kayıt yok.
                  </td>
                </tr>
              ) : (
                rows.map((l) => (
                  <tr key={l.id} className="hover:bg-white/3">
                    <td className="px-4 py-3 text-slate-100 font-semibold">{l.adSoyad}</td>
                    <td className="px-4 py-3 vb-text-muted">{l.sirket}</td>
                    <td className="px-4 py-3 vb-text-muted">{l.email}</td>
                    <td className="px-4 py-3 vb-text-muted">{l.telefon}</td>
                    <td className="px-4 py-3 vb-text-muted">{l.tarih}</td>
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
                    <td className="px-4 py-3 vb-text-muted">{l.notlar ?? "—"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="outline" size="sm" type="button">
            Dışa Aktar (CSV)
          </Button>
          <Button variant="ghost" size="sm" type="button">
            Durum Güncelle
          </Button>
          <Button variant="ghost" size="sm" type="button">
            Not Ekle
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AdminFormTalepleriPage() {
  return (
    <AdminShell
      title="Form Talepleri"
      subtitle="Teklif Al, Sizi Arayalım, Demo Talep, İletişim, Kariyer kayıtları için tablo iskeleti."
    >
      <div className="grid gap-4">
        <LeadsTable title="Teklif Al" source="Teklif Al" />
        <LeadsTable title="Sizi Arayalım" source="Sizi Arayalım" />
        <LeadsTable title="Demo Talep" source="Demo Talep" />
        <LeadsTable title="İletişim" source="İletişim" />
        <LeadsTable title="Kariyer" source="Kariyer" />
      </div>
    </AdminShell>
  );
}

