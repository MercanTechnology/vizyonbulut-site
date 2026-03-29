import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const policyMock = [
  { key: "gizlilik", title: "Gizlilik Politikası", status: "Yayında", updatedAt: "2026-03-01" },
  { key: "kvkk", title: "KVKK Aydınlatma Metni", status: "Taslak", updatedAt: "2026-03-15" },
  { key: "cerez", title: "Çerez Politikası", status: "Yayında", updatedAt: "2026-02-10" },
  { key: "is-surekliligi", title: "İş Sürekliliği Politikası", status: "Taslak", updatedAt: "2026-03-20" },
];

export default function AdminPolitikalarPage() {
  return (
    <AdminShell
      title="Politikalar"
      subtitle="Politika sayfaları için düzenlenebilir girişler ve yayın akışı iskeleti."
    >
      <Card>
        <CardContent className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-50">Politika Listesi</div>
              <div className="mt-1 text-xs vb-text-muted">
                İçerik editörü, revizyon geçmişi ve onay akışı ileride eklenebilir.
              </div>
            </div>
            <Button variant="primary" size="sm" type="button">
              Yeni Politika
            </Button>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr className="text-xs font-semibold text-slate-200">
                  <th className="px-4 py-3">Başlık</th>
                  <th className="px-4 py-3">Son Güncelleme</th>
                  <th className="px-4 py-3">Durum</th>
                  <th className="px-4 py-3">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {policyMock.map((p) => (
                  <tr key={p.key} className="hover:bg-white/3">
                    <td className="px-4 py-3 text-slate-100 font-semibold">{p.title}</td>
                    <td className="px-4 py-3 vb-text-muted">{p.updatedAt}</td>
                    <td className="px-4 py-3">
                      <Badge tone={p.status === "Yayında" ? "success" : "warning"}>{p.status}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" type="button">
                          Düzenle
                        </Button>
                        <Button variant="ghost" size="sm" type="button">
                          Önizle
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

