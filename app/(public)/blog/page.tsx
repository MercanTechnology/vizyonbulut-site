import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { blogMock } from "@/data/public-content";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Operasyon ve güvenlik perspektifi"
          description="Kurumsal bulut işletimi, güvenlik kontrolleri ve mimari kararlar hakkında kısa ve uygulanabilir yazılar."
        />

        <div className="mt-6 flex flex-wrap gap-2">
          {blogMock.categories.map((c) => (
            <Badge key={c} tone="neutral">
              {c}
            </Badge>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {blogMock.posts.map((p) => (
            <Card key={p.slug} className="hover:border-white/20 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <Badge tone="info">{p.date}</Badge>
                  <div className="text-xs vb-text-muted">{p.tags.join(" • ")}</div>
                </div>
                <div className="mt-3 text-base font-semibold text-slate-50">{p.title}</div>
                <p className="mt-2 text-sm vb-text-muted leading-relaxed">{p.excerpt}</p>
                <div className="mt-4">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/8 transition-colors"
                  >
                    Devamını oku
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

