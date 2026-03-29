import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Layers,
  Boxes,
  HardDrive,
  LifeBuoy,
  ShieldCheck,
  Server,
  Database,
  Lock,
  Laptop,
  ArrowRightLeft,
  Globe,
} from "lucide-react";

export type CloudMegaTabId = "private" | "hybrid";

export const cloudNavbarMegaTabs: {
  id: CloudMegaTabId;
  label: string;
  icon: LucideIcon;
}[] = [
  { id: "private", label: "Private Cloud", icon: Cloud },
  { id: "hybrid", label: "Hybrid Cloud", icon: ArrowRightLeft },
];

export type CloudNavbarMegaItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const cloudNavbarMegaItems: Record<CloudMegaTabId, CloudNavbarMegaItem[]> = {
  private: [
    {
      title: "Infrastructure as a Service",
      description: "İzole kaynaklar, otomasyon ve kapasite planlaması ile sürdürülebilir IaaS.",
      href: "/cozumler/private-cloud#iaas",
      icon: Layers,
    },
    {
      title: "Platform as a Service",
      description: "Standart platform katmanı; güvenli varsayılanlar ve izlenebilir çalışma zamanı.",
      href: "/cozumler/private-cloud#paas",
      icon: Boxes,
    },
    {
      title: "Storage as a Service",
      description: "Katmanlı depolama ve politika tabanlı yaşam döngüsü yönetimi.",
      href: "/cozumler/private-cloud#storage",
      icon: HardDrive,
    },
    {
      title: "Disaster Recovery as a Service",
      description: "Hedef RTO/RPO’lara uygun replikasyon ve düzenli felaket testleri.",
      href: "/cozumler/private-cloud#dr",
      icon: LifeBuoy,
    },
    {
      title: "Backup as a Service",
      description: "Şifreleme, saklama politikaları ve güvenilir yedekleme operasyonu.",
      href: "/cozumler/private-cloud#backup",
      icon: ShieldCheck,
    },
    {
      title: "Cloud Server",
      description: "Esnek sanal sunucular; hızlı ölçekleme ve standart imaj yönetimi.",
      href: "/cozumler/private-cloud#cloud-server",
      icon: Cloud,
    },
    {
      title: "Container as a Service",
      description: "Politika, ağ ve gözlemlenebilirlik ile yönetilen container ortamı.",
      href: "/cozumler/private-cloud#caas",
      icon: Boxes,
    },
    {
      title: "VPS Server",
      description: "Maliyet odaklı sanal sunucu; temel güvenlik ve izleme seçenekleri.",
      href: "/cozumler/private-cloud#vps",
      icon: Server,
    },
    {
      title: "VDS Server",
      description: "Yüksek izolasyon ve kaynak garantisi ile performans odaklı sunucu.",
      href: "/cozumler/private-cloud#vds",
      icon: Server,
    },
    {
      title: "Database as a Service",
      description: "Yedekleme, izleme ve kapasite planlaması dahil işletilebilir veritabanı.",
      href: "/cozumler/private-cloud#dbaas",
      icon: Database,
    },
    {
      title: "Security as a Service",
      description: "Politika, kayıt ve koruma katmanlarını birleştiren güvenlik servisleri.",
      href: "/cozumler/private-cloud#secaas",
      icon: Lock,
    },
    {
      title: "Virtual Desktop Infrastructure (VDI)",
      description: "Merkezi masaüstü; erişim politikaları ve oturum yönetimi.",
      href: "/cozumler/private-cloud#vdi",
      icon: Laptop,
    },
  ],
  hybrid: [
    {
      title: "Hybrid Cloud Yönetimi",
      description: "On‑prem ve bulut arasında tutarlı politika, bağlantı ve operasyon standardı.",
      href: "/iletisim",
      icon: ArrowRightLeft,
    },
    {
      title: "Ortak Kimlik ve Erişim",
      description: "Tek merkezden erişim kontrolü; hibrit topolojilerde güvenli oturum.",
      href: "/iletisim",
      icon: Lock,
    },
    {
      title: "Veri ve Ağ Segmentasyonu",
      description: "İş yüklerini ayıran ağ tasarımı ve veri sınırı kontrolleri.",
      href: "/iletisim",
      icon: Globe,
    },
    {
      title: "Felaket Kurtarma (Hibrit)",
      description: "Bulut ve yerel site arasında koordineli süreklilik senaryoları.",
      href: "/iletisim",
      icon: LifeBuoy,
    },
  ],
};
