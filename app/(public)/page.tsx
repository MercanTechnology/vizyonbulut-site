import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  homeHero,
  managedServices,
  privateCloudOfferings,
  solutions,
  trustStats,
} from "@/data/public-content";
import { siteConfig } from "@/data/site";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";

function MetricPill({
  label,
  value,
  tone = "info",
}: {
  label: string;
  value: string;
  tone?: "info" | "success" | "warning";
}) {
  const map = {
    info: "info",
    success: "success",
    warning: "warning",
  } as const;
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-xs font-semibold text-slate-200">{label}</div>
      <Badge tone={map[tone]}>{value}</Badge>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge tone="info">Kurumsal bulut • Yönetilen operasyon • Güvenlik</Badge>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-50">
                {homeHero.headline}
              </h1>
              <p className="text-base sm:text-lg vb-text-muted leading-relaxed">
                {homeHero.subheadline}
              </p>

              <ul className="grid gap-2">
                {homeHero.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/iletisim" variant="primary" size="lg">
                  Teklif Al <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/cozumler" variant="outline" size="lg">
                  Çözümleri İncele
                </Button>
              </div>

              <p className="text-xs vb-text-muted">
                {siteConfig.legalBrandLine}
              </p>
            </div>

            <Card className="vb-ring">
              <CardHeader className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-50">
                    Operasyon Paneli (örnek)
                  </div>
                  <div className="mt-1 text-xs vb-text-muted">
                    Uptime, güvenlik ve kapasite göstergeleri.
                  </div>
                </div>
                <Badge tone="success">Sağlıklı</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <MetricPill label="Uptime (30 gün)" value="%99.97" tone="success" />
                <MetricPill label="Kritik Alarm" value="0" tone="success" />
                <MetricPill label="Güvenlik Skoru" value="A-" tone="info" />
                <MetricPill label="Kapasite Kullanımı" value="%62" tone="warning" />
                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                      <ShieldCheck className="h-4 w-4 text-cyan-200" />
                      Politika Uyumu
                    </div>
                    <p className="mt-2 text-xs vb-text-muted">
                      Standart kontroller ve denetim izleriyle görünür güvenlik.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                      <TrendingUp className="h-4 w-4 text-cyan-200" />
                      Kapasite Trendleri
                    </div>
                    <p className="mt-2 text-xs vb-text-muted">
                      Planlı büyüme ve maliyet kontrolü için tahminleme.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Trust strip / stats */}
      <section className="pb-6 sm:pb-10">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} className="hover:border-white/20 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-base font-semibold text-slate-50">{s.title}</div>
                        <div className="mt-2 text-sm vb-text-muted">{s.description}</div>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/20">
                        <Icon className="h-5 w-5 text-cyan-200" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Private Cloud offerings */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="mb-8">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/12 via-blue-500/10 to-transparent p-6 sm:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="text-xs font-semibold tracking-[0.22em] uppercase text-cyan-200/90">
                    Private Cloud
                  </div>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
                    Özel bulut portföyü: en görünür, en güçlü teklif
                  </h2>
                  <p className="mt-3 text-sm sm:text-base vb-text-muted leading-relaxed">
                    Altyapı (IaaS), platform (PaaS), depolama, yedekleme, felaket kurtarma ve güvenlik katmanlarını; kurumsal işletim standardında birlikte konumlandırın.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href="/cozumler/private-cloud" variant="secondary" size="lg">
                    Private Cloud’u Keşfet
                  </Button>
                  <Button href="/iletisim" variant="outline" size="lg">
                    Teklif Al
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {privateCloudOfferings.map((c) => {
              const Icon = c.icon;
              return (
                <Card key={c.title} className="group hover:border-white/20 transition-colors">
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
        </Container>
      </section>

      {/* Managed Services */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Yönetilen Servisler"
            title="Operasyonunuzu ölçülebilir hale getirin"
            description="İzleme, müdahale, kapasite ve güvenlik süreçleri; tek bir operasyon standardında bütünleşsin."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {managedServices.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} className="group hover:border-white/20 transition-colors">
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
        </Container>
      </section>

      {/* Solutions preview */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Çözümler"
            title="Platform bileşenleri ve güvenlik katmanları"
            description="DevOps, güvenlik ve veritabanı bileşenlerini; kurumsal işletim standardında bir araya getiriyoruz."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {solutions.map((cat) => (
              <Card key={cat.title} className="hover:border-white/20 transition-colors">
                <CardContent className="p-5">
                  <div className="text-base font-semibold text-slate-50">{cat.title}</div>
                  <p className="mt-2 text-sm vb-text-muted">{cat.description}</p>
                  <ul className="mt-4 space-y-3">
                    {cat.items.map((i) => (
                      <li key={i.title} className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="text-sm font-semibold text-slate-50">{i.title}</div>
                        <div className="mt-1 text-xs vb-text-muted">{i.description}</div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why VizyonBulut */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Neden VizyonBulut?"
                title="Güven, süreklilik ve uzmanlık odaklı bulut işletimi"
                description="Kurumsal bulutta fark; yalnızca teknoloji seçimi değil, operasyon modeli ve güvenlik disiplinidir."
              />
              <div className="mt-4 space-y-3 text-sm vb-text-muted">
                <p>
                  <span className="text-slate-50 font-semibold">VizyonBulut</span> ile hedefiniz; “kurulum” değil,{" "}
                  <span className="text-slate-50 font-semibold">sürdürülebilir işletim</span> olur. SLA/SLO takibi,
                  denetlenebilir güvenlik kontrolleri ve düzenli raporlama ile karar süreçlerinizi güçlendirirsiniz.
                </p>
                <p>
                  {siteConfig.legalBrandLine} Grup tecrübesi; disiplinli süreç, net sorumluluk ve uzun vadeli iş sürekliliği
                  hedeflerine odaklanır.
                </p>
              </div>
            </div>
            <Card className="hover:border-white/20 transition-colors">
              <CardContent className="p-5">
                <div className="grid gap-3">
                  {[
                    { title: "Denetlenebilir güvenlik", desc: "Kayıt izleri, politika setleri ve standartlara uyum odağı." },
                    { title: "Süreklilik odaklı operasyon", desc: "Olay yönetimi, nöbet düzeni ve kök neden analizi." },
                    { title: "Ölçülebilir performans", desc: "İzleme, kapasite trendleri ve iyileştirme planı." },
                    { title: "Uzman ekip, net süreç", desc: "Mimari değerlendirme, geçiş planı ve işletim standardı." },
                  ].map((x) => (
                    <div key={x.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-semibold text-slate-50">{x.title}</div>
                      <div className="mt-1 text-xs vb-text-muted">{x.desc}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <Container>
          <Card className="overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-transparent" />
              <div className="relative p-6 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                      İhtiyacınızı birlikte netleştirelim.
                    </div>
                    <p className="mt-3 text-sm sm:text-base vb-text-muted">
                      Hedefinizi, mevcut yapınızı ve risklerinizi hızlıca analiz edip en doğru yol haritasını çıkaralım.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <Button href="/iletisim" variant="outline" size="lg">
                      Sizi Arayalım
                    </Button>
                    <Button href="/demo-talep" variant="secondary" size="lg">
                      Demo Talep Et
                    </Button>
                    <Button href="/iletisim" variant="primary" size="lg">
                      Uzman Ekiple Görüş
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Deep links */}
      <section className="pb-16">
        <Container>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Link href="/hizmetler" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/8 transition-colors">
              Hizmetleri keşfedin <ArrowRight className="h-4 w-4 opacity-80" />
            </Link>
            <Link href="/cozumler" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/8 transition-colors">
              Çözümleri inceleyin <ArrowRight className="h-4 w-4 opacity-80" />
            </Link>
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/8 transition-colors">
              Blog içerikleri <ArrowRight className="h-4 w-4 opacity-80" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

