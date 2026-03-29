import { AdminShell } from "@/components/admin/AdminShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { integrationSettingsMock } from "@/data/admin-mock";

function Field({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-200">{label}</span>
      <input
        defaultValue={value}
        className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-slate-100 outline-none focus:border-cyan-300/30 focus:ring-2 focus:ring-cyan-400/15"
      />
    </label>
  );
}

function StatusBadge({ status }: { status: "Bağlı" | "Kapalı" | "Doğrulanmadı" }) {
  return (
    <Badge tone={status === "Bağlı" ? "success" : status === "Doğrulanmadı" ? "warning" : "neutral"}>
      {status}
    </Badge>
  );
}

export default function AdminEntegrasyonAyarleriPage() {
  const s = integrationSettingsMock;
  return (
    <AdminShell
      title="Entegrasyon Ayarları"
      subtitle="Bu entegrasyonlar sadece admin tarafında operasyonel ayar olarak bulunur; public web sitesinde pazarlama öğesi olarak gösterilmez."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="hover:border-white/20 transition-colors">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-semibold text-slate-50">Dynamics 365 Sales CRM</div>
                <div className="mt-1 text-xs vb-text-muted">
                  Lead ve form taleplerinin CRM’e aktarımı için bağlantı ayarları.
                </div>
              </div>
              <StatusBadge status={s.dynamics365.status} />
            </div>
            <div className="mt-5 grid gap-4">
              <Field label="API URL" value={s.dynamics365.apiUrl} />
              <Field label="Tenant / Environment" value={s.dynamics365.tenantOrEnvironment} />
              <Field label="Client ID placeholder" value={s.dynamics365.clientId} />
            </div>
            <div className="mt-5 flex gap-2">
              <Button variant="outline" size="sm" type="button">
                Bağlantıyı Test Et
              </Button>
              <Button variant="primary" size="sm" type="button">
                Kaydet
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-white/20 transition-colors">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-semibold text-slate-50">Destek Talep Sistemi</div>
                <div className="mt-1 text-xs vb-text-muted">
                  Destek taleplerinin ilgili kuyruk/kategoriye yönlenmesi için ayarlar.
                </div>
              </div>
              <StatusBadge status={s.destekSistemi.status} />
            </div>
            <div className="mt-5 grid gap-4">
              <Field label="Endpoint URL" value={s.destekSistemi.endpointUrl} />
              <Field label="Queue / Category" value={s.destekSistemi.queueOrCategory} />
            </div>
            <div className="mt-5 flex gap-2">
              <Button variant="outline" size="sm" type="button">
                Bağlantıyı Test Et
              </Button>
              <Button variant="primary" size="sm" type="button">
                Kaydet
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-white/20 transition-colors">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-semibold text-slate-50">n8n</div>
                <div className="mt-1 text-xs vb-text-muted">
                  Otomasyon akışları için webhook ve akış adı ayarları.
                </div>
              </div>
              <StatusBadge status={s.n8n.status} />
            </div>
            <div className="mt-5 grid gap-4">
              <Field label="Webhook URL" value={s.n8n.webhookUrl} />
              <Field label="Flow name" value={s.n8n.flowName} />
            </div>
            <div className="mt-5 flex gap-2">
              <Button variant="outline" size="sm" type="button">
                Webhook’u Test Et
              </Button>
              <Button variant="primary" size="sm" type="button">
                Kaydet
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-white/20 transition-colors">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-semibold text-slate-50">WhatsApp Chatbot</div>
                <div className="mt-1 text-xs vb-text-muted">
                  WhatsApp hattı üzerinden otomatik yanıt/aktarım için operasyonel ayarlar.
                </div>
              </div>
              <StatusBadge status={s.whatsappChatbot.status} />
            </div>
            <div className="mt-5 grid gap-4">
              <Field label="API endpoint" value={s.whatsappChatbot.apiEndpoint} />
              <Field label="Phone / Line label" value={s.whatsappChatbot.phoneLabel} />
            </div>
            <div className="mt-5 flex gap-2">
              <Button variant="outline" size="sm" type="button">
                Bağlantıyı Test Et
              </Button>
              <Button variant="primary" size="sm" type="button">
                Kaydet
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminShell>
  );
}

