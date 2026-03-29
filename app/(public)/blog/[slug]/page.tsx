import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { blogMock } from "@/data/public-content";
import { Button } from "@/components/ui/Button";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogMock.posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="info">{post.date}</Badge>
          {post.tags.map((t) => (
            <Badge key={t} tone="neutral">
              {t}
            </Badge>
          ))}
        </div>
        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
          {post.title}
        </h1>
        <p className="mt-4 text-base vb-text-muted leading-relaxed">{post.excerpt}</p>

        <Card className="mt-8">
          <CardContent className="p-6 space-y-4 text-sm vb-text-muted leading-relaxed">
            <p>
              Bu yazı, VizyonBulut blog iskeletinde örnek içerik olarak yer alır. Amaç; içerik yönetimi, kategori/etiket
              yapısı ve yayın akışı için temiz bir temel oluşturmaktır.
            </p>
            <p>
              Uygulamada; gerçek yazılar, editör arayüzü üzerinden oluşturulacak ve yayın tarihi, yazar, kapak görseli gibi
              alanlar veri modeline bağlanacaktır.
            </p>
            <p>
              Kurumsal içerik yaklaşımımız; ölçülebilir operasyon, güvenlik disiplinleri ve mimari kararların iş hedefleriyle
              hizalanması üzerine kuruludur.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/blog" variant="outline" size="lg">
            Blog’a Dön
          </Button>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 h-11 text-base font-semibold text-slate-100 hover:bg-white/8 transition-colors"
          >
            İçerik stratejisi için görüşelim
          </Link>
        </div>
      </Container>
    </div>
  );
}

