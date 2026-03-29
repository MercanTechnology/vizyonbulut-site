import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ShieldCheck,
  Gauge,
  Layers,
  Database,
  HardDrive,
  LifeBuoy,
  Cloud,
  Boxes,
  Server,
  Globe,
  Lock,
  Radar,
  ArrowRightLeft,
  Wrench,
  Eye,
  MoveRight,
} from "lucide-react";

export type Stat = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

export type Category = {
  title: string;
  description: string;
  items: { title: string; description: string }[];
};

export const homeHero = {
  headline: "Kurumsal bulut ile güvenli büyüme.",
  subheadline:
    "VizyonBulut; altyapı, platform ve güvenlik katmanlarını tek bir operasyon disiplininde birleştirir. Süreklilik odaklı yönetim, ölçülebilir performans ve denetlenebilir güvenlik ile işinizin yanında.",
  bullets: [
    "Ölçeklenebilir özel bulut mimarileri",
    "7/24 izleme ve olay yönetimi",
    "Standartlara uyum ve güvenlik sertliği",
  ],
};

export const trustStats: Stat[] = [
  {
    title: "%99.9 Erişilebilirlik",
    description: "Kritik iş yükleri için yüksek süreklilik hedefleri.",
    icon: Activity,
  },
  {
    title: "7/24 Operasyon",
    description: "Nöbet düzeniyle izleme, müdahale ve raporlama.",
    icon: Eye,
  },
  {
    title: "Güvenli Altyapı",
    description: "Ağ segmentasyonu, sertleştirme ve kayıt izleri.",
    icon: ShieldCheck,
  },
  {
    title: "Ölçeklenebilir Mimari",
    description: "İhtiyaca göre büyüyen kaynak yönetimi ve kapasite.",
    icon: Gauge,
  },
];

export const privateCloudOfferings: IconCard[] = [
  {
    title: "Infrastructure as a Service",
    description:
      "Kurumsal iş yükleri için izole kaynaklar, otomasyon ve kapasite planlama ile sürdürülebilir IaaS.",
    icon: Layers,
  },
  {
    title: "Platform as a Service",
    description:
      "Geliştirme ekipleri için standart platform katmanı: hızlı kurulum, güvenli varsayılanlar, izlenebilir çalışma zamanı.",
    icon: Boxes,
  },
  {
    title: "Storage as a Service",
    description:
      "Performans ve maliyeti dengeleyen katmanlı depolama; politika tabanlı yaşam döngüsü yönetimi.",
    icon: HardDrive,
  },
  {
    title: "Disaster Recovery as a Service",
    description:
      "Felaket senaryoları için hedef RTO/RPO’lara uygun replikasyon ve düzenli test planları.",
    icon: LifeBuoy,
  },
  {
    title: "Backup as a Service",
    description:
      "Sürümleme, saklama politikaları ve şifreleme ile güvenilir yedekleme operasyonu.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Server",
    description:
      "Esnek sanal sunucular; hızlı kaynak artırımı ve standart imaj yönetimi.",
    icon: Cloud,
  },
  {
    title: "Container as a Service",
    description:
      "Container iş yükleri için politika, ağ ve gözlemlenebilirlik katmanları hazır, yönetilen ortam.",
    icon: Boxes,
  },
  {
    title: "VPS Server",
    description:
      "Maliyet odaklı sanal sunucu paketleri; temel güvenlik ve izleme seçenekleri.",
    icon: Server,
  },
  {
    title: "VDS Server",
    description:
      "Daha yüksek izolasyon ve kaynak garantisiyle performans odaklı sanal sunucu.",
    icon: Server,
  },
  {
    title: "Database as a Service",
    description:
      "Yedekleme, izleme ve kapasite planlaması dahil; işletilebilir veritabanı katmanı.",
    icon: Database,
  },
  {
    title: "Security as a Service",
    description:
      "Politika, kayıt, görünürlük ve koruma katmanlarını bir araya getiren güvenlik servisleri.",
    icon: Lock,
  },
  {
    title: "Virtual Desktop Infrastructure (VDI)",
    description:
      "Güvenli uzaktan çalışma için merkezi masaüstü altyapısı; erişim politikaları ve oturum yönetimi.",
    icon: Globe,
  },
];

export const managedServices: IconCard[] = [
  {
    title: "Multi-Cloud Management",
    description: "Farklı bulut sağlayıcılarında tek görünürlük ve standart operasyon.",
    icon: Cloud,
  },
  {
    title: "Hybrid-Cloud Management",
    description: "On-prem ve bulut arasında güvenli bağlantı, politika ve süreç uyumu.",
    icon: ArrowRightLeft,
  },
  {
    title: "Public Cloud Management",
    description: "Maliyet kontrolü, güvenlik kontrolleri ve operasyon standartları.",
    icon: Globe,
  },
  {
    title: "Database Management",
    description: "Performans takibi, yedekleme stratejisi, sürüm ve kapasite yönetimi.",
    icon: Database,
  },
  {
    title: "Monitoring Management",
    description: "Uçtan uca izleme, alarm kurguları ve SLA odaklı raporlama.",
    icon: Radar,
  },
  {
    title: "Container Management",
    description: "Cluster yönetimi, politika setleri, image güvenliği ve yaşam döngüsü.",
    icon: Boxes,
  },
  {
    title: "Cloud Migration",
    description: "Analiz → plan → taşıma → doğrulama yaklaşımıyla kontrollü geçiş.",
    icon: MoveRight,
  },
  {
    title: "Cloud Optimization",
    description: "Maliyet/performans optimizasyonu, kapasite trendleri ve iyileştirme planı.",
    icon: Gauge,
  },
  {
    title: "Cloud Security",
    description: "Güvenlik temel kontrolleri, sertleştirme, erişim ve görünürlük.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Consulting",
    description: "Hedef mimari, yol haritası ve yönetişim (governance) danışmanlığı.",
    icon: Wrench,
  },
  {
    title: "Zero Trust Security",
    description: "Kimlik merkezli erişim; mikro-segmentasyon ve sürekli doğrulama yaklaşımı.",
    icon: Lock,
  },
  {
    title: "System Health Check",
    description: "Mevcut sistemlerin risk, performans ve süreklilik değerlendirmesi.",
    icon: Activity,
  },
  {
    title: "Sensitive Data Discovery & Protection",
    description: "Hassas veriyi keşfetme, sınıflandırma ve koruma kontrolleri.",
    icon: ShieldCheck,
  },
  {
    title: "Managed Security Service",
    description: "Olay yönetimi, görünürlük ve kontrol setleriyle yönetilen güvenlik operasyonu.",
    icon: ShieldCheck,
  },
  {
    title: "Identity as a Service",
    description: "Merkezi kimlik yönetimi, oturum politikaları ve yaşam döngüsü süreçleri.",
    icon: Lock,
  },
  {
    title: "Cloud File Storage",
    description: "Ekipler arası güvenli dosya paylaşımı; erişim politikaları ve denetim izleri.",
    icon: HardDrive,
  },
  {
    title: "Database Migration Service",
    description: "Kesinti ve riskleri azaltan planlı veri taşıma ve doğrulama süreçleri.",
    icon: Database,
  },
  {
    title: "Identity and Access Management (IAM)",
    description: "Rol tabanlı erişim, en az ayrıcalık, periyodik erişim gözden geçirmeleri.",
    icon: Lock,
  },
  {
    title: "Privileged Access Management (PAM)",
    description: "Ayrıcalıklı hesap kasası, oturum kaydı ve onay akışlarıyla kontrol.",
    icon: Lock,
  },
  {
    title: "DDoS Atak Önleme Hizmeti",
    description: "Katmanlı koruma, eşik politikaları ve görünürlük ile saldırı azaltma.",
    icon: ShieldCheck,
  },
];

export const solutions: Category[] = [
  {
    title: "DevOps",
    description: "Geliştirme ve operasyonu hızlandıran standardize platform bileşenleri.",
    items: [
      { title: "Kubernetes", description: "Kurumsal container orkestrasyonu ve politika yönetimi." },
      { title: "Docker", description: "Uygulama paketleme standardı; güvenli image süreçleri." },
      { title: "Rancher", description: "Çoklu cluster yönetimi için merkezi kontrol düzlemi." },
    ],
  },
  {
    title: "Security",
    description: "Görünürlük, kontrol ve süreklilik sağlayan güvenlik katmanları.",
    items: [
      { title: "IDS", description: "Ağ içi anomali tespiti ve görünürlük." },
      { title: "IPS", description: "Tespit + önleme; politika tabanlı engelleme." },
      { title: "WAF", description: "Web uygulamalarında katman 7 koruma ve kural setleri." },
      { title: "SIEM", description: "Kayıt korelasyonu, alarm senaryoları ve raporlama." },
      { title: "Load Balancer", description: "Yük dağıtımı, sağlık kontrolleri ve yüksek erişilebilirlik." },
      { title: "Bulut Güvenliği", description: "Bulut ortamlarında temel güvenlik kontrolleri ve yönetişim." },
      { title: "Firewall", description: "Segmentasyon, politika ve güvenli erişim kurguları." },
      { title: "Ağ Güvenliği", description: "Ağ tasarımı, erişim kontrolü ve görünürlük." },
    ],
  },
  {
    title: "Database",
    description: "Performans, güvenlik ve yedeklilik odaklı veritabanı bileşenleri.",
    items: [
      { title: "MySQL", description: "Yüksek erişilebilirlik seçenekleri ve operasyon standardı." },
      { title: "MongoDB", description: "Doküman tabanlı kullanım senaryoları için ölçeklenebilir yapı." },
      { title: "Redis", description: "Cache ve düşük gecikme gerektiren iş yükleri için." },
      { title: "PostgreSQL", description: "Kurumsal veri bütünlüğü ve geniş ekosistem." },
    ],
  },
];

export const blogMock = {
  categories: ["Bulut Operasyonları", "Güvenlik", "Mimari", "Maliyet Yönetimi"],
  posts: [
    {
      slug: "kurumsal-bulutta-sureklilik-modeli",
      title: "Kurumsal bulutta süreklilik: hedef metriklerden operasyon modeline",
      excerpt:
        "SLA, SLO ve olay yönetimi pratiklerini; sürdürülebilir bir bulut operasyon modeline nasıl dönüştürebileceğinizi özetliyoruz.",
      date: "2026-03-29",
      tags: ["Süreklilik", "SLA/SLO", "Operasyon"],
    },
    {
      slug: "guvenlik-sertlestirme-temelleri",
      title: "Güvenlik sertleştirme temelleri: hızlı kazanımlar, kalıcı standartlar",
      excerpt:
        "İşletim sistemi ve ağ katmanında uygulanabilir sertleştirme adımlarını, denetlenebilir bir çerçevede ele alıyoruz.",
      date: "2026-03-29",
      tags: ["Güvenlik", "Sertleştirme"],
    },
    {
      slug: "maliyet-optimizesi-governance",
      title: "Bulut maliyeti yönetimi: görünürlükten yönetişime",
      excerpt:
        "Etiketleme, bütçe alarmı ve kapasite trendleri ile maliyet sürprizlerini nasıl önleyeceğinizi anlatıyoruz.",
      date: "2026-03-29",
      tags: ["Maliyet", "FinOps"],
    },
  ],
};

