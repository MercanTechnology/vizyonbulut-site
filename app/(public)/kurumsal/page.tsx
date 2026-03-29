import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Kurumsal",
};

function SectionCard({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card id={id} className="scroll-mt-24 hover:border-white/20 transition-colors">
      <CardContent className="p-6">
        <div className="text-lg font-semibold text-slate-50">{title}</div>
        <div className="mt-3 text-sm vb-text-muted leading-relaxed">{children}</div>
      </CardContent>
    </Card>
  );
}

export default function KurumsalPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Kurumsal"
          title="VizyonBulut ile sürdürülebilir teknoloji işletimi"
          description="Kurumsal bulut altyapısı ve yönetilen operasyonu; güvenlik, süreklilik ve ölçülebilir sonuçlar odağında ele alıyoruz."
        />

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Badge tone="info">{siteConfig.legalBrandLine}</Badge>
          <Badge tone="neutral">Güvenlik</Badge>
          <Badge tone="neutral">Operasyon</Badge>
          <Badge tone="neutral">Süreklilik</Badge>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <SectionCard id="hakkimizda" title="Hakkımızda">
            VizyonBulut; kurumsal müşterilerin kritik sistemlerinde ihtiyaç duyduğu altyapı, operasyon ve güvenlik disiplinini tek çatı altında sunmak için tasarlanmış bir bulut teknoloji markasıdır. Amacımız; kurumların büyümesini, güvenlik ve süreklilik hedeflerinden ödün vermeden hızlandırmaktır.
          </SectionCard>

          <SectionCard id="vizyonumuz" title="Vizyonumuz">
            Türkiye’de ve bölgede; kurumsal bulut işletim standardı denildiğinde ilk akla gelen, güvenilir ve ölçülebilir sonuçlar üreten bir teknoloji markası olmak. Modern mimarileri; yönetişim, kayıt ve operasyon süreçleriyle birlikte ele alarak sürdürülebilir değer oluşturmak.
          </SectionCard>

          <SectionCard id="misyonumuz" title="Misyonumuz">
            Müşterilerimizin iş yüklerini güvenli şekilde modernize etmek, işletim risklerini azaltmak ve operasyon verimliliğini artırmak. Şeffaf raporlama, güçlü süreç yönetimi ve uzman ekip ile “çalışıyor” seviyesinden “ölçülebilir şekilde iyi çalışıyor” seviyesine taşımak.
          </SectionCard>

          <SectionCard id="neden" title="Neden VizyonBulut?">
            Teknik bileşenler kadar operasyon modeli de önemlidir. VizyonBulut yaklaşımı; izleme, olay yönetimi, kapasite planlama, sertleştirme ve raporlama süreçlerini standartlaştırır. Böylece karar alma süreciniz hızlanır; riskler görünür olur; süreklilik hedefleri gerçekçi şekilde yönetilir.
          </SectionCard>

          <SectionCard id="basinda-biz" title="Basında Biz">
            Kurumsal duyurularımız, basın bültenleri ve medyada yer alan VizyonBulut haberleri bu alanda derlenir. İçerikler; yönetim paneli üzerinden güncellenerek tek kaynakta toplanacak şekilde yapılandırılmıştır.
          </SectionCard>

          <SectionCard id="basari-hikayeleri" title="Başarı Hikayeleri">
            Farklı sektörlerde tamamladığımız dönüşüm ve operasyon projelerinden özetler; müşteri gizliliği korunarak paylaşılacak referans hikâyeleri olarak burada yer alacaktır.
          </SectionCard>

          <SectionCard id="kariyer" title="Kariyer Merkezi">
            Operasyon, güvenlik ve platform ekiplerinde; süreç odaklı, ölçülebilir çıktılar üretmeyi seven uzmanlarla çalışıyoruz. Kariyer fırsatları; rol tanımı, sorumluluk matrisi ve gelişim planı ile yapılandırılır. Başvuru için “Kariyer” formunu kullanabilirsiniz.
          </SectionCard>

          <SectionCard id="sertifikalar" title="Sertifikalarımız">
            Sertifikasyon yaklaşımımız; ekip yetkinliği, süreç olgunluğu ve denetlenebilirlik hedeflerini destekler. Sertifika listesi ve doğrulama dokümanları; admin panelde yönetilecek şekilde modellenmiştir.
          </SectionCard>

          <SectionCard id="webinarlar" title="Webinarlar">
            Bulut operasyonları, güvenlik ve mimari konularında düzenlediğimiz canlı oturumlar ile kayıtlı içerikler bu bölümde yayınlanacaktır. Takvim ve kayıt bağlantıları içerik yönetimi ile güncellenecektir.
          </SectionCard>

          <SectionCard id="politikalar" title="Politikalarımız">
            Güvenlik, gizlilik ve iş sürekliliği politikaları; risk yönetimi yaklaşımımızın temelidir. Politika metinleri; güncellenebilir içerik yapısı olarak admin panelde tutulur ve yayın akışına hazırdır.
          </SectionCard>

          <Card className="hover:border-white/20 transition-colors">
            <CardContent className="p-6">
              <div className="text-lg font-semibold text-slate-50">Kurumsal iletişim</div>
              <p className="mt-3 text-sm vb-text-muted">
                Uygun mimariyi netleştirmek için kısa bir görüşme planlayalım. Mevcut yapınızı dinleyip hedef metriklerinize göre yol haritası çıkaralım.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href="/iletisim" variant="primary" size="lg">
                  İletişime Geç
                </Button>
                <Button href="/demo-talep" variant="outline" size="lg">
                  Demo Talep Et
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

