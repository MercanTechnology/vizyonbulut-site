export type NavItem = { label: string; href: string };

export const siteConfig = {
  brand: "VizyonBulut",
  legalBrandLine: "VizyonBulut, Mercan Technology Group A.Ş. markasıdır.",
  slogan: "Kurumsal bulut altyapısı. Yönetilen operasyon. Güvenlik sürekliliği.",
  seo: {
    defaultTitle: "VizyonBulut",
    defaultDescription:
      "Kurumsal bulut altyapısı, yönetilen servisler ve güvenlik operasyonları. VizyonBulut, Mercan Technology Group A.Ş. markasıdır.",
  },
  contact: {
    email: "info@vizyonbulut.com",
    phone: "+90 (000) 000 00 00",
    address:
      "Mercan Technology Group A.Ş. • Türkiye (Adres bilgisi daha sonra güncellenecek)",
  },
  social: {
    linkedin: "#",
    x: "#",
    youtube: "#",
  },
};

export const primaryNav: NavItem[] = [
  { label: "Çözümler", href: "/cozumler" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export const utilityLinks: NavItem[] = [
  { label: "Portal Girişi", href: "/portal-girisi" },
  { label: "Müşteri Girişi", href: "/musteri-girisi" },
];

