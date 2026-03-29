import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { megaMenuCozumler } from "@/data/nav";

export const metadata = {
  title: "Security",
};

export default function CozumlerSecurityPage() {
  const group = megaMenuCozumler.find((g) => g.title === "Security");
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Çözümler"
          title="Security"
          description="Ağ ve uygulama katmanında görünürlük, kontrol ve olay yönetimini destekleyen güvenlik bileşenleri."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {(group?.items ?? []).map((it) => {
            const Icon = it.icon;
            const id = it.href.split("#")[1] ?? "";
            return (
              <Card key={it.href} id={id} className="scroll-mt-24 hover:border-white/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-400/10 ring-1 ring-rose-300/20">
                      <Icon className="h-5 w-5 text-rose-200" />
                    </span>
                    <div>
                      <div className="text-base font-semibold text-slate-50">{it.title}</div>
                      <div className="mt-2 text-sm vb-text-muted">
                        Politika setleri, alarm senaryoları ve raporlama katmanı; gerçek entegrasyonlar eklendiğinde bu sayfaya bağlanır.
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

