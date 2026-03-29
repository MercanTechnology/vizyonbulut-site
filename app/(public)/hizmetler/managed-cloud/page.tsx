import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { megaMenuHizmetler } from "@/data/nav";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Managed Services",
};

export default function ManagedCloudServicesPage() {
  const group = megaMenuHizmetler.find((g) => g.title === "Managed Services");
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Hizmetler"
          title="Managed Services"
          description="İzleme, müdahale, optimizasyon ve raporlama; operasyon yükünü azaltırken görünürlüğü artırır."
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
                        Hizmet kapsamı, SLA hedefleri ve raporlama çıktıları; gerçek içerik yönetimi eklendiğinde bu bloklara bağlanacaktır.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/iletisim" variant="primary" size="lg">
            Operasyon modelinizi birlikte netleştirelim
          </Button>
          <Button href="/demo-talep" variant="outline" size="lg">
            Demo Talep Et
          </Button>
        </div>
      </Container>
    </div>
  );
}

