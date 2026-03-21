import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  title?: string;
  eyebrow?: string;
};

export function Section({
  className,
  title,
  eyebrow,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("border-t border-mineral-white/10 py-16", className)} {...props}>
      <Container>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-mineral-white md:text-4xl">
            {title}
          </h2>
        ) : null}
        <div className={cn(title || eyebrow ? "mt-6" : undefined)}>{children}</div>
      </Container>
    </section>
  );
}
