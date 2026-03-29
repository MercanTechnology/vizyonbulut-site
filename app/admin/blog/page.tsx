import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { blogMock } from "@/data/public-content";

export default function AdminBlogPage() {
  return (
    <AdminShell
      title="Blog"
      subtitle="Yazı listesi, kategori/etiket yönetimi ve oluştur/düzenle akışları için iskelet."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-50">Yazılar</div>
                <div className="mt-1 text-xs vb-text-muted">Taslak/yayın durumu ve editör ekranı sonraki fazda bağlanır.</div>
              </div>
              <Button variant="primary" size="sm" type="button">
                Yeni Yazı
              </Button>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5">
                  <tr className="text-xs font-semibold text-slate-200">
                    <th className="px-4 py-3">Başlık</th>
                    <th className="px-4 py-3">Tarih</th>
                    <th className="px-4 py-3">Etiketler</th>
                    <th className="px-4 py-3">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {blogMock.posts.map((p) => (
                    <tr key={p.slug} className="hover:bg-white/3">
                      <td className="px-4 py-3 text-slate-100 font-semibold">{p.title}</td>
                      <td className="px-4 py-3 vb-text-muted">{p.date}</td>
                      <td className="px-4 py-3 vb-text-muted">{p.tags.join(", ")}</td>
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

        <div className="grid gap-4">
          <Card>
            <CardContent className="p-5">
              <div className="text-sm font-semibold text-slate-50">Kategoriler</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {blogMock.categories.map((c) => (
                  <Badge key={c} tone="neutral">
                    {c}
                  </Badge>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" type="button">
                  Kategori Ekle
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="text-sm font-semibold text-slate-50">Etiketler</div>
              <div className="mt-3 text-xs vb-text-muted">
                Etiketler; yazı editörü üzerinden seçilebilir şekilde modellenir. İleride arama ve filtreleme için kullanılır.
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from(new Set(blogMock.posts.flatMap((p) => p.tags))).map((t) => (
                  <Badge key={t} tone="info">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminShell>
  );
}

