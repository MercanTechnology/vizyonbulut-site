import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { solutions } from "@/data/public-content";

export default function AdminCozumlerPage() {
  return (
    <AdminShell
      title="Çözümler"
      subtitle="Çözüm kategorileri ve içerik öğeleri için yönetim görünümü (mock)."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {solutions.map((cat) => (
          <Card key={cat.title} className="hover:border-white/20 transition-colors">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-base font-semibold text-slate-50">{cat.title}</div>
                  <div className="mt-2 text-sm vb-text-muted">{cat.description}</div>
                </div>
                <Badge tone="success">Yayında</Badge>
              </div>
              <div className="mt-4 grid gap-2">
                {cat.items.map((i) => (
                  <div key={i.title} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-sm font-semibold text-slate-100">{i.title}</div>
                    <div className="mt-1 text-xs vb-text-muted">{i.description}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" type="button">
                  Kategoriyi Düzenle
                </Button>
                <Button variant="primary" size="sm" type="button">
                  Öğe Ekle
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminShell>
  );
}

