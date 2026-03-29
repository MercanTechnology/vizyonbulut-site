import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/Badge";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "İletişim",
};

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-200">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-slate-100 placeholder:text-slate-400/70 outline-none focus:border-cyan-300/30 focus:ring-2 focus:ring-cyan-400/15"
      />
    </label>
  );
}

export default function IletisimPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="İletişim"
          title="İhtiyacınızı dinleyelim, yol haritasını netleştirelim"
          description="Teklif, demo veya hızlı değerlendirme için bize ulaşın. Teknik detayları anlaşılır biçimde çerçeveler, uygulanabilir bir planla ilerleriz."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <Card className="hover:border-white/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-300/20">
                  <Mail className="h-5 w-5 text-cyan-200" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-50">E-posta</div>
                  <a className="mt-2 block text-sm vb-text-muted hover:text-slate-50 transition-colors" href={`mailto:${siteConfig.contact.email}`}>
                    {siteConfig.contact.email}
                  </a>
                  <div className="mt-3 text-xs vb-text-muted">
                    Teklif ve demo taleplerinde aynı iş günü içinde dönüş hedefleriz.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-white/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-300/20">
                  <Phone className="h-5 w-5 text-blue-200" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-50">Telefon</div>
                  <a className="mt-2 block text-sm vb-text-muted hover:text-slate-50 transition-colors" href="tel:+900000000000">
                    {siteConfig.contact.phone}
                  </a>
                  <div className="mt-3 text-xs vb-text-muted">
                    Uygun zamanda arama planlamak için “Sizi Arayalım” formunu kullanabilirsiniz.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-white/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <MapPin className="h-5 w-5 text-slate-200" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-50">Adres</div>
                  <div className="mt-2 text-sm vb-text-muted">{siteConfig.contact.address}</div>
                  <div className="mt-3 text-xs vb-text-muted">{siteConfig.legalBrandLine}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card className="hover:border-white/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-slate-50">İletişim Formu</div>
                  <p className="mt-2 text-sm vb-text-muted">
                    Konuyu ve hedefinizi kısaca yazın; doğru ekibe yönlendirelim.
                  </p>
                </div>
                <Badge tone="info">İletişim</Badge>
              </div>

              <form className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Ad Soyad" placeholder="Adınız Soyadınız" />
                  <Field label="Şirket" placeholder="Şirket / Kurum" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="E-posta" placeholder="ornek@firma.com" type="email" />
                  <Field label="Telefon" placeholder="+90 (5xx) xxx xx xx" />
                </div>
                <label className="grid gap-2">
                  <span className="text-xs font-semibold text-slate-200">Mesaj</span>
                  <textarea
                    placeholder="Hangi hedefe ulaşmak istiyorsunuz? Mevcut yapınızda en kritik öncelik nedir?"
                    className="min-h-[120px] w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400/70 outline-none focus:border-cyan-300/30 focus:ring-2 focus:ring-cyan-400/15"
                  />
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs vb-text-muted">
                    Bu form şu an mock yapıdadır; kayıtlar ileride admin paneline bağlanacaktır.
                  </div>
                  <Button variant="primary" size="lg" type="button">
                    Gönder
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            <Card className="hover:border-white/20 transition-colors">
              <CardContent className="p-6">
                <div className="text-lg font-semibold text-slate-50">Sizi Arayalım</div>
                <p className="mt-2 text-sm vb-text-muted">
                  15 dakikalık kısa bir görüşmeyle kapsamı netleştirelim. Uygun zaman aralığınızı paylaşın.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field label="Ad Soyad" placeholder="Adınız Soyadınız" />
                  <Field label="Telefon" placeholder="+90 (5xx) xxx xx xx" />
                </div>
                <div className="mt-5">
                  <Button variant="outline" size="lg" type="button">
                    Arama Talebi Oluştur
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-white/20 transition-colors">
              <CardContent className="p-6">
                <div className="text-lg font-semibold text-slate-50">Demo Talep</div>
                <p className="mt-2 text-sm vb-text-muted">
                  Platform ve operasyon yaklaşımımızı canlı örnekler üzerinden görmek için demo talebi oluşturun.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button href="/demo-talep" variant="secondary" size="lg">
                    Demo Talep Et <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/cozumler" variant="outline" size="lg">
                    Çözümleri İncele
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-white/20 transition-colors">
              <CardContent className="p-6">
                <div className="text-lg font-semibold text-slate-50">Kısayollar</div>
                <p className="mt-2 text-sm vb-text-muted">
                  Portal ve müşteri girişi sayfaları; kimlik doğrulama entegrasyonu eklendiğinde aktifleşecek şekilde hazırlanmıştır.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/portal-girisi"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 h-11 text-sm font-semibold text-slate-100 hover:bg-white/8 transition-colors"
                  >
                    Portal Girişi
                  </Link>
                  <Link
                    href="/musteri-girisi"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 h-11 text-sm font-semibold text-slate-100 hover:bg-white/8 transition-colors"
                  >
                    Müşteri Girişi
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

