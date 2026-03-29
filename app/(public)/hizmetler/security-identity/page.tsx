import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { megaMenuHizmetler } from "@/data/nav";

export const metadata = {
  title: "Security & Identity",
};

export default function SecurityIdentityServicesPage() {
  const group = megaMenuHizmetler.find((g) => g.title === "Security & Identity");
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Hizmetler"
          title="Security & Identity"
          description="Kimlik ve erişim kontrollerini güçlendirerek; güvenlik operasyonunu ölçülebilir ve yönetilebilir hale getirin."
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
                        Bu blok; politika, süreç ve operasyon çıktıları için placeholder içerik yapısıdır. Sonraki fazda detay sayfalar ve formlar bağlanacaktır.
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

