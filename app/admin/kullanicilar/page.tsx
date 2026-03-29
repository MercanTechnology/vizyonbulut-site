import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { adminUsersMock } from "@/data/admin-mock";

export default function AdminKullanicilarPage() {
  return (
    <AdminShell
      title="Kullanıcılar"
      subtitle="Rol bazlı erişim (Super Admin, İçerik Editörü, Satış Kullanıcısı, Destek Yöneticisi) için yönetim iskeleti."
    >
      <Card>
        <CardContent className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-50">Kullanıcı Listesi</div>
              <div className="mt-1 text-xs vb-text-muted">
                Bu sayfa; kimlik sağlayıcı (SSO), MFA ve audit log entegrasyonu için hazır yapıdadır.
              </div>
            </div>
            <Button variant="primary" size="sm" type="button">
              Yeni Kullanıcı
            </Button>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr className="text-xs font-semibold text-slate-200">
                  <th className="px-4 py-3">Ad Soyad</th>
                  <th className="px-4 py-3">E-posta</th>
                  <th className="px-4 py-3">Rol</th>
                  <th className="px-4 py-3">Durum</th>
                  <th className="px-4 py-3">Son Giriş</th>
                  <th className="px-4 py-3">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {adminUsersMock.map((u) => (
                  <tr key={u.id} className="hover:bg-white/3">
                    <td className="px-4 py-3 text-slate-100 font-semibold">{u.adSoyad}</td>
                    <td className="px-4 py-3 vb-text-muted">{u.email}</td>
                    <td className="px-4 py-3">
                      <Badge tone={u.rol === "Super Admin" ? "info" : "neutral"}>{u.rol}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Badge tone={u.durum === "Aktif" ? "success" : "warning"}>{u.durum}</Badge>
                    </td>
                    <td className="px-4 py-3 vb-text-muted">{u.sonGiris ?? "—"}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" type="button">
                          Düzenle
                        </Button>
                        <Button variant="ghost" size="sm" type="button">
                          Yetki
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

