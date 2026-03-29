import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { megaMenuCozumler } from "@/data/nav";

export const metadata = {
  title: "Database",
};

export default function CozumlerDatabasePage() {
  const group = megaMenuCozumler.find((g) => g.title === "Database");
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Çözümler"
          title="Database"
          description="Kurumsal veritabanı katmanı için performans, yedeklilik ve operasyon standardı odağında seçenekler."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {(group?.items ?? []).map((it) => {
            const Icon = it.icon;
            const id = it.href.split("#")[1] ?? "";
            return (
              <Card key={it.href} id={id} className="scroll-mt-24 hover:border-white/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-300/20">
                      <Icon className="h-5 w-5 text-emerald-200" />
                    </span>
                    <div>
                      <div className="text-base font-semibold text-slate-50">{it.title}</div>
                      <div className="mt-2 text-sm vb-text-muted">
                        Bu sayfa; yedekleme, izleme, sürüm ve kapasite yönetimi gibi operasyon detaylarını bağlamak için hazır bir iskelet sunar.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

