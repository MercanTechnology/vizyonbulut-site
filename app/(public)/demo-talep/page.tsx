import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Demo Talep",
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

export default function DemoTalepPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Demo"
          title="Demo talep edin"
          description="İhtiyacınıza göre en doğru senaryoyu kuralım. Operasyon yaklaşımını, güvenlik katmanlarını ve raporlamayı birlikte değerlendirelim."
          align="center"
        />

        <Card className="mt-10">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-lg font-semibold text-slate-50">Demo Talep Formu</div>
                <p className="mt-2 text-sm vb-text-muted">
                  Bu sayfa mock yapıdadır. Kayıt akışı daha sonra gerçek API ve admin paneline bağlanacaktır.
                </p>
              </div>
              <Badge tone="info">Demo Talep</Badge>
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
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="İlgi Alanı" placeholder="Özel Bulut / Yönetilen Servis / Güvenlik" />
                <Field label="Tercih Edilen Zaman" placeholder="Örn: Hafta içi 10:00–12:00" />
              </div>
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-slate-200">Kısa Not</span>
                <textarea
                  placeholder="Mevcut yapınız ve hedefiniz hakkında 2-3 cümle paylaşın."
                  className="min-h-[120px] w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400/70 outline-none focus:border-cyan-300/30 focus:ring-2 focus:ring-cyan-400/15"
                />
              </label>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs vb-text-muted">
                  Form verisi şu an saklanmıyor. İleride rol bazlı yönetim ile “Form Talepleri” alanına düşecek.
                </div>
                <Button variant="primary" size="lg" type="button">
                  Demo Talebi Oluştur
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

