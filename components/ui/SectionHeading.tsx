import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div className={cn(isCenter ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <div className={cn("mb-3 text-xs font-semibold tracking-[0.22em] uppercase", isCenter ? "justify-center" : "")}>
          <span className="text-cyan-200/90">{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base sm:text-lg vb-text-muted max-w-3xl mx-auto">
          {description}
        </p>
      ) : null}
    </div>
  );
}

