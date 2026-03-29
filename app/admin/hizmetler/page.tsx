import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { managedServices, privateCloudOfferings } from "@/data/public-content";

export default function AdminHizmetlerPage() {
  return (
    <AdminShell
      title="Hizmetler"
      subtitle="Hizmet kartları ve kategorileri için yönetim görünümü (mock)."
    >
      <div className="grid gap-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-50">Kategori: Yönetilen Servisler</div>
                <div className="mt-1 text-xs vb-text-muted">Kart sıralama, yayın durumu ve içerik alanları hazır.</div>
              </div>
              <Button variant="primary" size="sm" type="button">
                Yeni Hizmet Kartı
              </Button>
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5">
                  <tr className="text-xs font-semibold text-slate-200">
                    <th className="px-4 py-3">Başlık</th>
                    <th className="px-4 py-3">Açıklama</th>
                    <th className="px-4 py-3">Durum</th>
                    <th className="px-4 py-3">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {managedServices.slice(0, 10).map((s) => (
                    <tr key={s.title} className="hover:bg-white/3">
                      <td className="px-4 py-3 text-slate-100 font-semibold">{s.title}</td>
                      <td className="px-4 py-3 vb-text-muted">{s.description}</td>
                      <td className="px-4 py-3">
                        <Badge tone="success">Yayında</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" type="button">
                            Düzenle
                          </Button>
                          <Button variant="ghost" size="sm" type="button">
                            Taslak
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

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-slate-50">Kategori: Private Cloud</div>
                <div className="mt-1 text-xs vb-text-muted">Portföy kartları (IaaS, PaaS, DR, Backup vb.).</div>
              </div>
              <Badge tone="info">{privateCloudOfferings.length} kart</Badge>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {privateCloudOfferings.slice(0, 6).map((c) => (
                <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-slate-50">{c.title}</div>
                  <div className="mt-2 text-xs vb-text-muted">{c.description}</div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" type="button">
                      Düzenle
                    </Button>
                    <Button variant="ghost" size="sm" type="button">
                      Sırala
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminShell>
  );
}

