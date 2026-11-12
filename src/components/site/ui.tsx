import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useRef, type ReactNode, type ComponentType, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export const btn = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-ink text-ink-foreground hover:bg-brand hover:text-primary-foreground hover:-translate-y-0.5 shadow-card",
        brand: "bg-gradient-to-r from-teal via-brand to-accent text-primary-foreground hover:brightness-110 hover:-translate-y-0.5 shadow-card",
        outline: "border border-input bg-card text-foreground hover:border-brand hover:-translate-y-0.5",
        ghostLight: "border border-ink-foreground/25 text-ink-foreground hover:bg-ink-foreground/10",
      },
      size: { md: "h-11 px-5 text-sm", lg: "min-h-13 px-7 text-base py-3.5" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
export type BtnProps = VariantProps<typeof btn>;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  style?: CSSProperties;
};

export function Reveal({ children, className, delay = 0, direction = "up", style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const directions = { up: "", left: "reveal-left", right: "reveal-right", scale: "reveal-scale" };
  return <div ref={ref} className={cn("reveal", directions[direction], className)} style={{ ...style, transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground">
      <span className="h-px w-6 bg-gradient-to-r from-teal to-accent" />{children}
    </span>
  );
}

export function SectionHead({ eyebrow, title, text, center }: { eyebrow: string; title: ReactNode; text?: string; center?: boolean }) {
  return (
    <Reveal direction="left" className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-h2 mt-4 text-foreground">{title}</h2>
      {text && <p className="text-lead mt-5 text-muted-foreground">{text}</p>}
    </Reveal>
  );
}

const tones = {
  brand: "bg-gradient-to-br from-teal via-brand to-accent text-primary-foreground",
  ink: "bg-gradient-to-br from-muted-foreground to-ink text-ink-foreground",
  teal: "bg-gradient-to-br from-teal to-brand text-primary-foreground",
  violet: "bg-gradient-to-br from-brand to-accent text-primary-foreground",
  light: "bg-gradient-to-br from-card to-secondary text-foreground",
} as const;
export type Tone = keyof typeof tones;

export function Icon3D({ icon: Icon, tone = "brand", size = "md", className }: { icon: ComponentType<{ className?: string; strokeWidth?: number }>; tone?: Tone; size?: "sm" | "md" | "lg"; className?: string }) {
  const s = { sm: "h-10 w-10 rounded-xl", md: "h-13 w-13 rounded-2xl", lg: "h-16 w-16 rounded-2xl" }[size];
  const i = { sm: "h-5 w-5", md: "h-6 w-6", lg: "h-8 w-8" }[size];
  return (
    <span className={cn("icon-3d relative inline-flex shrink-0 items-center justify-center", s, tones[tone], className)}>
      <Icon className={i} strokeWidth={1.9} />
    </span>
  );
}

export const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";
