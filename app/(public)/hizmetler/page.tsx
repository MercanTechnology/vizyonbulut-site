import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { managedServices, privateCloudOfferings } from "@/data/public-content";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Hizmetler",
};

export default function HizmetlerPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Hizmetler"
          title="Yönetilen servisler ve özel bulut portföyü"
          description="VizyonBulut yaklaşımı; teknik bileşenleri, operasyon disiplinini ve güvenlik kontrollerini aynı çatı altında standartlaştırır."
        />

        <div className="mt-10 grid gap-8">
          <div>
            <div className="text-lg font-semibold text-slate-50">Yönetilen Servisler</div>
            <p className="mt-2 text-sm vb-text-muted">
              İzleme, müdahale, optimizasyon ve güvenlik süreçlerini ölçülebilir hale getiren operasyon paketleri.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {managedServices.map((s) => {
                const Icon = s.icon;
                return (
                  <Card key={s.title} className="hover:border-white/20 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/20">
                          <Icon className="h-5 w-5 text-cyan-200" />
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-slate-50">{s.title}</div>
                          <p className="mt-2 text-sm vb-text-muted leading-relaxed">{s.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold text-slate-50">Private Cloud Servisleri</div>
            <p className="mt-2 text-sm vb-text-muted">
              İş yükleriniz için izole ve ölçeklenebilir özel bulut seçenekleri; platform ve veri servisleriyle genişletilebilir.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {privateCloudOfferings.map((c) => {
                const Icon = c.icon;
                return (
                  <Card key={c.title} className="hover:border-white/20 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-300/20">
                          <Icon className="h-5 w-5 text-blue-200" />
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-slate-50">{c.title}</div>
                          <p className="mt-2 text-sm vb-text-muted leading-relaxed">{c.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/demo-talep" variant="secondary" size="lg">
            Demo Talep Et
          </Button>
          <Button href="/iletisim" variant="primary" size="lg">
            Uzman Ekiple Görüş
          </Button>
        </div>
      </Container>
    </div>
  );
}

