import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Boxes,
  Database,
  MonitorCheck,
  Radar,
  ArrowRightLeft,
  Globe,
  Wrench,
  MoveRight,
  Gauge,
  Binary,
  Shield,
  Bug,
  Lock,
  ShieldCheck,
  Folder,
  ArrowUpRight,
  Users,
  FileText,
  Briefcase,
  BookOpen,
} from "lucide-react";
import { cloudNavbarMegaItems } from "@/data/cloud-navbar-mega";

export type NavGroupItem = {
  title: string;
  description?: string;
  href: string;
  icon: LucideIcon;
};

/** Group heading + items (used in mega menus) */
export type NavGroup = {
  title: string;
  description: string;
  /** Icon next to group heading */
  icon: LucideIcon;
  accent?: "primary" | "secondary";
  href: string;
  items: NavGroupItem[];
};

/** Cloud mega: intro + Private Cloud only */
export const cloudMegaMenu = {
  /** Short Turkish copy for the Cloud section */
  cloudDescription:
    "Altyapıdan platforma, depolamadan güvenliğe: kurumsal iş yüklerinizi özel bulut mimarisiyle ölçeklenebilir ve denetlenebilir şekilde işletin.",
  ctaLabel: "Tüm Cloud Çözümleri",
  /** Hub / overview target */
  ctaHref: "/cozumler/private-cloud",
  privateCloud: {
    title: "Private Cloud",
    description:
      "İzole kaynaklar, politika tabanlı yönetim ve süreklilik odaklı operasyon ile kurumsal özel bulut portföyü.",
    icon: Cloud as LucideIcon,
    href: "/cozumler/private-cloud",
    accent: "primary" as const,
    items: cloudNavbarMegaItems.private,
  },
};

/** Çözümler: DevOps, Security, Database only */
export const megaMenuCozumler: NavGroup[] = [
  {
    title: "DevOps",
    description: "Kapsayıcı platform, standart pipeline ve operasyon disiplini ile hızlı ve güvenli teslimat.",
    icon: Boxes,
    href: "/cozumler/devops",
    items: [
      { title: "Kubernetes", href: "/cozumler/devops#kubernetes", icon: Boxes },
      { title: "Docker", href: "/cozumler/devops#docker", icon: Boxes },
      { title: "Rancher", href: "/cozumler/devops#rancher", icon: ArrowRightLeft },
    ],
  },
  {
    title: "Security",
    description: "Görünürlük, kontrol ve olay yönetimi ile uçtan uca güvenlik katmanları.",
    icon: Shield,
    href: "/cozumler/security",
    items: [
      { title: "IDS", href: "/cozumler/security#ids", icon: Radar },
      { title: "IPS", href: "/cozumler/security#ips", icon: Shield },
      { title: "WAF", href: "/cozumler/security#waf", icon: ShieldCheck },
      { title: "SIEM", href: "/cozumler/security#siem", icon: Bug },
      { title: "Load Balancer", href: "/cozumler/security#load-balancer", icon: ArrowRightLeft },
      { title: "Bulut Güvenliği", href: "/cozumler/security#bulut-guvenligi", icon: Lock },
      { title: "Firewall", href: "/cozumler/security#firewall", icon: ShieldCheck },
      { title: "Ağ Güvenliği", href: "/cozumler/security#ag-guvenligi", icon: ArrowRightLeft },
    ],
  },
  {
    title: "Database",
    description: "Performans, yedeklilik ve operasyon standardı ile veritabanı katmanı.",
    icon: Database,
    href: "/cozumler/database",
    items: [
      { title: "MySQL", href: "/cozumler/database#mysql", icon: Database },
      { title: "MongoDB", href: "/cozumler/database#mongodb", icon: Binary },
      { title: "Redis", href: "/cozumler/database#redis", icon: Gauge },
      { title: "PostgreSQL", href: "/cozumler/database#postgresql", icon: Database },
    ],
  },
];

/** Hizmetler: exact group names and item order per spec */
export const megaMenuHizmetler: NavGroup[] = [
  {
    title: "Managed Services",
    description:
      "Çoklu ve hibrit bulut ortamlarında izleme, müdahale, optimizasyon ve danışmanlık ile yönetilen operasyon.",
    icon: Cloud,
    accent: "primary",
    href: "/hizmetler/managed-cloud",
    items: [
      { title: "Multi-Cloud Management", href: "/hizmetler/managed-cloud#multi-cloud", icon: Cloud },
      { title: "Hybrid-Cloud Management", href: "/hizmetler/managed-cloud#hybrid-cloud", icon: ArrowRightLeft },
      { title: "Public Cloud Management", href: "/hizmetler/managed-cloud#public-cloud", icon: Globe },
      { title: "Database Management", href: "/hizmetler/managed-cloud#database-management", icon: Database },
      { title: "Monitoring Management", href: "/hizmetler/managed-cloud#monitoring", icon: Radar },
      { title: "Container Management", href: "/hizmetler/managed-cloud#container-management", icon: Boxes },
      { title: "Cloud Migration", href: "/hizmetler/managed-cloud#migration", icon: MoveRight },
      { title: "Cloud Optimization", href: "/hizmetler/managed-cloud#optimization", icon: Gauge },
      { title: "Cloud Security", href: "/hizmetler/managed-cloud#cloud-security", icon: ShieldCheck },
      { title: "Cloud Consulting", href: "/hizmetler/managed-cloud#consulting", icon: Wrench },
    ],
  },
  {
    title: "Security & Identity",
    description: "Sıfır güven, kimlik yaşam döngüsü ve güvenlik operasyonu ile kontrol ve uyum.",
    icon: Lock,
    href: "/hizmetler/security-identity",
    items: [
      { title: "Zero Trust Security", href: "/hizmetler/security-identity#zero-trust", icon: Lock },
      { title: "System Health Check", href: "/hizmetler/security-identity#health-check", icon: MonitorCheck },
      {
        title: "Sensitive Data Discovery & Protection",
        href: "/hizmetler/security-identity#sensitive-data",
        icon: Shield,
      },
      { title: "Managed Security Service", href: "/hizmetler/security-identity#mss", icon: ShieldCheck },
      { title: "Identity as a Service", href: "/hizmetler/security-identity#idaas", icon: Users },
      { title: "Identity and Access Management (IAM)", href: "/hizmetler/security-identity#iam", icon: Lock },
      { title: "Privileged Access Management (PAM)", href: "/hizmetler/security-identity#pam", icon: Lock },
      { title: "DDoS Atak Önleme Hizmeti", href: "/hizmetler/security-identity#ddos", icon: ShieldCheck },
    ],
  },
  {
    title: "Data & Platform",
    description: "Dosya, veri taşıma ve platform katmanında standart işletim ve süreklilik.",
    icon: Folder,
    href: "/hizmetler/data-platform",
    items: [
      { title: "Cloud File Storage", href: "/hizmetler/data-platform#file-storage", icon: Folder },
      { title: "Database Migration Service", href: "/hizmetler/data-platform#db-migration", icon: ArrowUpRight },
    ],
  },
];

/** Kurumsal navbar grid: 2 rows × 4 columns (order left-to-right, top then bottom) */
export type KurumsalNavGridItem = {
  title: string;
  description: string;
  href: string;
};

export const kurumsalNavGridItems: KurumsalNavGridItem[] = [
  {
    title: "Hakkımızda",
    description: "Marka kimliğimiz, grubumuz ve kurumsal odak alanlarımız.",
    href: "/kurumsal#hakkimizda",
  },
  {
    title: "Neden VizyonBulut?",
    description: "Operasyon, güvenlik ve süreklilikte tercih edilme nedenleri.",
    href: "/kurumsal#neden",
  },
  {
    title: "Basında Biz",
    description: "Basın duyuruları, medya yansımaları ve haber arşivi.",
    href: "/kurumsal#basinda-biz",
  },
  {
    title: "Başarı Hikayeleri",
    description: "Sektörel örnekler ve müşteri odaklı proje özetleri.",
    href: "/kurumsal#basari-hikayeleri",
  },
  {
    title: "Kariyer Merkezi",
    description: "Açık roller, ekip kültürü ve başvuru süreçleri.",
    href: "/kurumsal#kariyer",
  },
  {
    title: "Sertifikalarımız",
    description: "Yetkinlik, uyum ve kalite belgelerimiz.",
    href: "/kurumsal#sertifikalar",
  },
  {
    title: "Politikalarımız",
    description: "Gizlilik, KVKK ve kurumsal politika metinleri.",
    href: "/kurumsal#politikalar",
  },
  {
    title: "Webinarlar",
    description: "Canlı oturumlar ve kayıtlı teknik içerikler.",
    href: "/kurumsal#webinarlar",
  },
];
