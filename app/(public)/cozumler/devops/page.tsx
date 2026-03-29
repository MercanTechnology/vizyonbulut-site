import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { megaMenuCozumler } from "@/data/nav";

export const metadata = {
  title: "DevOps",
};

export default function DevOpsPage() {
  const group = megaMenuCozumler.find((g) => g.title === "DevOps");
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Çözümler"
          title="DevOps"
          description="Geliştirme ve operasyon süreçlerini hızlandıran; denetlenebilir ve standartlaştırılmış DevOps bileşenleri."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {(group?.items ?? []).map((it) => {
            const Icon = it.icon;
            const id = it.href.split("#")[1] ?? "";
            return (
              <Card key={it.href} id={id} className="scroll-mt-24 hover:border-white/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/20">
                      <Icon className="h-5 w-5 text-cyan-200" />
                    </span>
                    <div>
                      <div className="text-base font-semibold text-slate-50">{it.title}</div>
                      <div className="mt-2 text-sm vb-text-muted">
                        Detay sayfalar eklendiğinde; mimari, güvenlik politikaları ve operasyon standartları bu bloklara bağlanacak.
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

