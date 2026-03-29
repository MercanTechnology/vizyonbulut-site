import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { megaMenuHizmetler } from "@/data/nav";

export const metadata = {
  title: "Data & Platform",
};

export default function DataPlatformServicesPage() {
  const group = megaMenuHizmetler.find((g) => g.title === "Data & Platform");
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Hizmetler"
          title="Data & Platform"
          description="Veri ve platform katmanında taşınabilirlik, dayanıklılık ve standart işletim yaklaşımı."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {(group?.items ?? []).map((it) => {
            const Icon = it.icon;
            const id = it.href.split("#")[1] ?? "";
            return (
              <Card key={it.href} id={id} className="scroll-mt-24 hover:border-white/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-300/20">
                      <Icon className="h-5 w-5 text-blue-200" />
                    </span>
                    <div>
                      <div className="text-base font-semibold text-slate-50">{it.title}</div>
                      <div className="mt-2 text-sm vb-text-muted">
                        Bu sayfa, veri taşıma ve depolama servislerinin kapsamını netleştirmek için hazırlanmış premium placeholder yapıdır.
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

