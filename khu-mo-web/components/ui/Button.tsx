import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex min-h-11 items-center justify-center rounded px-5 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-gold text-charcoal hover:bg-copper focus-visible:ring-mineral-white focus-visible:ring-offset-charcoal",
  ghost:
    "border border-mineral-white/25 text-mineral-white hover:bg-mineral-white/10 focus-visible:ring-gold focus-visible:ring-offset-charcoal",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}

type ButtonLinkProps = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    variant?: Variant;
  };

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return <Link className={cn(baseStyles, variants[variant], className)} {...props} />;
}
