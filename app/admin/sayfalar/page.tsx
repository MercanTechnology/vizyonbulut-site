import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const pages = [
  { title: "Ana Sayfa", path: "/", status: "Yayında" },
  { title: "Çözümler", path: "/cozumler", status: "Yayında" },
  { title: "Hizmetler", path: "/hizmetler", status: "Yayında" },
  { title: "Kurumsal", path: "/kurumsal", status: "Yayında" },
  { title: "İletişim", path: "/iletisim", status: "Yayında" },
];

export default function AdminSayfalarPage() {
  return (
    <AdminShell
      title="Sayfalar"
      subtitle="Kurumsal sayfa içerikleri için düzenlenebilir liste görünümü (mock)."
    >
      <Card>
        <CardContent className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-50">Sayfa Listesi</div>
              <div className="mt-1 text-xs vb-text-muted">
                Yayın durumu, SEO alanları ve içerik blokları ileride veri modeline bağlanacak.
              </div>
            </div>
            <Button variant="primary" size="sm" type="button">
              Yeni Sayfa
            </Button>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr className="text-xs font-semibold text-slate-200">
                  <th className="px-4 py-3">Başlık</th>
                  <th className="px-4 py-3">Yol</th>
                  <th className="px-4 py-3">Durum</th>
                  <th className="px-4 py-3">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {pages.map((p) => (
                  <tr key={p.path} className="hover:bg-white/3">
                    <td className="px-4 py-3 text-slate-100 font-semibold">{p.title}</td>
                    <td className="px-4 py-3 vb-text-muted">{p.path}</td>
                    <td className="px-4 py-3">
                      <Badge tone={p.status === "Yayında" ? "success" : "neutral"}>{p.status}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-2">
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

