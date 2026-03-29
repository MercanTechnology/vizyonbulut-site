import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const certsMock = [
  {
    title: "ISO 27001 (örnek)",
    issuer: "Belgelendirme Kuruluşu",
    date: "2026-01-01",
    status: "Yayında",
  },
  {
    title: "SOC 2 (örnek)",
    issuer: "Denetim Kuruluşu",
    date: "2026-02-15",
    status: "Taslak",
  },
];

export default function AdminSertifikalarPage() {
  return (
    <AdminShell
      title="Sertifikalar"
      subtitle="Sertifikasyon kayıtlarının yönetimi için kart/tablo iskeleti."
    >
      <Card>
        <CardContent className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-50">Sertifika Kayıtları</div>
              <div className="mt-1 text-xs vb-text-muted">
                Görsel, PDF bağlantısı, doğrulama URL’i ve yayın durumu alanları için hazır model.
              </div>
            </div>
            <Button variant="primary" size="sm" type="button">
              Yeni Sertifika
            </Button>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr className="text-xs font-semibold text-slate-200">
                  <th className="px-4 py-3">Başlık</th>
                  <th className="px-4 py-3">Veren Kurum</th>
                  <th className="px-4 py-3">Tarih</th>
                  <th className="px-4 py-3">Durum</th>
                  <th className="px-4 py-3">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {certsMock.map((c) => (
                  <tr key={c.title} className="hover:bg-white/3">
                    <td className="px-4 py-3 text-slate-100 font-semibold">{c.title}</td>
                    <td className="px-4 py-3 vb-text-muted">{c.issuer}</td>
                    <td className="px-4 py-3 vb-text-muted">{c.date}</td>
                    <td className="px-4 py-3">
                      <Badge tone={c.status === "Yayında" ? "success" : "warning"}>{c.status}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" type="button">
                          Düzenle
                        </Button>
                        <Button variant="ghost" size="sm" type="button">
                          Yayınla
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </AdminShell>
  );
}

