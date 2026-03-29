import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cloudMegaMenu } from "@/data/nav";

export const metadata = {
  title: "Private Cloud",
};

export default function PrivateCloudPage() {
  const group = cloudMegaMenu.privateCloud;
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Cloud • Private Cloud"
          title="Private Cloud"
          description="Özel bulut portföyümüz; kritik iş yüklerinde ölçek, güvenlik ve süreklilik hedeflerini birlikte yönetmek için tasarlanır."
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
                    <div className="min-w-0">
                      <div className="text-base font-semibold text-slate-50">{it.title}</div>
                      <div className="mt-2 text-sm vb-text-muted leading-relaxed">
                        Bu bölüm, detay sayfalar eklenene kadar “grup + içerik blokları” iskeleti sunar. Ürün kapsamı, SLA hedefleri ve teknik detaylar burada yapılandırılacaktır.
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
            Private Cloud için teklif iste
          </Button>
          <Button href="/demo-talep" variant="outline" size="lg">
            Demo Talep Et
          </Button>
        </div>
      </Container>
    </div>
  );
}

