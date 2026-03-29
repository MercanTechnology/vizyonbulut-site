import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { solutions } from "@/data/public-content";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Çözümler",
};

export default function CozumlerPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Çözümler"
          title="Kurumsal ihtiyaçlar için seçilebilir bileşenler"
          description="DevOps, güvenlik ve veritabanı katmanlarında; standart, izlenebilir ve ölçeklenebilir mimari bileşenleri sunuyoruz."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {solutions.map((cat) => (
            <Card key={cat.title} className="hover:border-white/20 transition-colors">
              <CardContent className="p-5">
                <div className="text-base font-semibold text-slate-50">{cat.title}</div>
                <p className="mt-2 text-sm vb-text-muted">{cat.description}</p>
                <div className="mt-4 grid gap-3">
                  {cat.items.map((i) => (
                    <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-semibold text-slate-50">{i.title}</div>
                      <div className="mt-1 text-xs vb-text-muted">{i.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/iletisim" variant="primary" size="lg">
            Teklif Al
          </Button>
          <Button href="/hizmetler" variant="outline" size="lg">
            Hizmetleri Gör
          </Button>
        </div>
      </Container>
    </div>
  );
}

