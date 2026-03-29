export type FormSource =
  | "Teklif Al"
  | "Sizi Arayalım"
  | "Demo Talep"
  | "İletişim"
  | "Kariyer";

export type FormStatus = "Yeni" | "İnceleniyor" | "İletişime Geçildi" | "Kapandı";

export type FormLead = {
  id: string;
  adSoyad: string;
  sirket: string;
  email: string;
  telefon: string;
  kaynakForm: FormSource;
  tarih: string;
  durum: FormStatus;
  notlar?: string;
};

export type AdminUserRole =
  | "Super Admin"
  | "İçerik Editörü"
  | "Satış Kullanıcısı"
  | "Destek Yöneticisi";

export type AdminUser = {
  id: string;
  adSoyad: string;
  email: string;
  rol: AdminUserRole;
  durum: "Aktif" | "Pasif";
  sonGiris?: string;
};

export type IntegrationStatus = "Bağlı" | "Kapalı" | "Doğrulanmadı";

export type IntegrationSettings = {
  dynamics365: {
    apiUrl: string;
    tenantOrEnvironment: string;
    clientId: string;
    status: IntegrationStatus;
  };
  destekSistemi: {
    endpointUrl: string;
    queueOrCategory: string;
    status: IntegrationStatus;
  };
  n8n: {
    webhookUrl: string;
    flowName: string;
    status: IntegrationStatus;
  };
  whatsappChatbot: {
    apiEndpoint: string;
    phoneLabel: string;
    status: IntegrationStatus;
  };
};

export const integrationSettingsMock: IntegrationSettings = {
  dynamics365: {
    apiUrl: "https://example.crm.dynamics.com/api/data/v9.2/",
    tenantOrEnvironment: "Tenant / Environment",
    clientId: "CLIENT_ID_PLACEHOLDER",
    status: "Doğrulanmadı",
  },
  destekSistemi: {
    endpointUrl: "https://support.example.com/api",
    queueOrCategory: "Queue / Category",
    status: "Kapalı",
  },
  n8n: {
    webhookUrl: "https://n8n.example.com/webhook/xxxx",
    flowName: "Form-Yonlendirme-Akisi",
    status: "Kapalı",
  },
  whatsappChatbot: {
    apiEndpoint: "https://wa.example.com/api",
    phoneLabel: "WhatsApp Hattı",
    status: "Kapalı",
  },
};

export const adminUsersMock: AdminUser[] = [
  {
    id: "u_001",
    adSoyad: "Mustafa Topaloğlu",
    email: "admin@vizyonbulut.com",
    rol: "Super Admin",
    durum: "Aktif",
    sonGiris: "2026-03-29 21:40",
  },
  {
    id: "u_002",
    adSoyad: "İçerik Ekibi",
    email: "icerik@vizyonbulut.com",
    rol: "İçerik Editörü",
    durum: "Aktif",
    sonGiris: "2026-03-28 09:12",
  },
  {
    id: "u_003",
    adSoyad: "Satış Ekibi",
    email: "satis@vizyonbulut.com",
    rol: "Satış Kullanıcısı",
    durum: "Aktif",
    sonGiris: "2026-03-29 10:03",
  },
  {
    id: "u_004",
    adSoyad: "Destek Ekibi",
    email: "destek@vizyonbulut.com",
    rol: "Destek Yöneticisi",
    durum: "Pasif",
  },
];

export const formLeadsMock: FormLead[] = [
  {
    id: "l_1001",
    adSoyad: "Ayşe Yılmaz",
    sirket: "Örnek Sanayi A.Ş.",
    email: "ayse.yilmaz@example.com",
    telefon: "+90 (5xx) xxx xx xx",
    kaynakForm: "Teklif Al",
    tarih: "2026-03-29 15:18",
    durum: "Yeni",
    notlar: "Özel bulut + yedekleme kapsamı istiyor.",
  },
  {
    id: "l_1002",
    adSoyad: "Mehmet Demir",
    sirket: "FinTek Ltd.",
    email: "mehmet.demir@example.com",
    telefon: "+90 (5xx) xxx xx xx",
    kaynakForm: "Demo Talep",
    tarih: "2026-03-29 12:06",
    durum: "İnceleniyor",
    notlar: "Container platformu ve izleme demo talebi.",
  },
  {
    id: "l_1003",
    adSoyad: "Elif Kaya",
    sirket: "Perakende Grubu",
    email: "elif.kaya@example.com",
    telefon: "+90 (5xx) xxx xx xx",
    kaynakForm: "İletişim",
    tarih: "2026-03-28 17:44",
    durum: "İletişime Geçildi",
    notlar: "Mevcut altyapı risk analizi ve sağlık kontrolü.",
  },
  {
    id: "l_1004",
    adSoyad: "Can Öztürk",
    sirket: "Yazılım Stüdyosu",
    email: "can.ozturk@example.com",
    telefon: "+90 (5xx) xxx xx xx",
    kaynakForm: "Sizi Arayalım",
    tarih: "2026-03-27 09:31",
    durum: "Kapandı",
    notlar: "İlk görüşme yapıldı; takip planı oluşturuldu.",
  },
];

