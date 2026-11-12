import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowRight, Sparkles, Users, GraduationCap, Play } from "lucide-react";
import { btn, container, Icon3D } from "./ui";
import { companyStats } from "./data";
import { TechLogo, type TechId } from "./tech-logos";
import { cn } from "@/lib/utils";
import magafPhone from "@/assets/magaf-glass-phone.webp";

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      io.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(to);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 900, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);

  return (
    <span ref={ref} aria-label={`${to}${suffix}`}>
      <span aria-hidden="true">{value}{suffix}</span>
    </span>
  );
}

const phoneIcons: { id: TechId; label: string; className: string; float: string }[] = [
  { id: "react", label: "React", className: "left-[1%] top-[17%]", float: "float-a" },
  { id: "python", label: "Python", className: "right-[0%] top-[12%]", float: "float-b" },
  { id: "js", label: "JavaScript", className: "bottom-[18%] left-[2%]", float: "float-c" },
  { id: "next", label: "Next.js", className: "bottom-[10%] right-[1%]", float: "float-a" },
];

const statIcons = [Users, GraduationCap, Play] as const;
const statTones = ["teal", "brand", "violet"] as const;

function PhoneVisual() {
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    event.currentTarget.style.setProperty("--phone-x", `${x}px`);
    event.currentTarget.style.setProperty("--phone-y", `${y}px`);
  };
  const reset = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--phone-x", "0px");
    event.currentTarget.style.setProperty("--phone-y", "0px");
  };

  return (
    <div
      className="phone-scene relative mx-auto w-full max-w-[440px] lg:max-w-[500px]"
      onPointerMove={move}
      onPointerLeave={reset}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal/15 via-brand/20 to-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 animate-[spin_48s_linear_infinite] rounded-full border border-dashed border-brand/25" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/15" />

      <div className="phone-parallax relative">
        <img
          src={magafPhone}
          alt="Premium glass smartphone with a blue and violet application interface"
          width={1024}
          height={1024}
          fetchPriority="high"
          className="phone-float mx-auto w-[92%]"
        />
      </div>

      {phoneIcons.map((item) => (
        <span
          key={item.label}
          title={item.label}
          className={cn("glass-chip absolute inline-flex h-12 w-12 items-center justify-center rounded-2xl sm:h-14 sm:w-14", item.className, item.float)}
        >
          <TechLogo id={item.id} className="h-6 w-6 sm:h-7 sm:w-7" />
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-surface relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className={cn(container, "relative grid items-center gap-10 pb-14 pt-10 sm:pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:pb-20 lg:pt-14")}>
        <div className="animate-in fade-in slide-in-from-left-4 duration-700">
          <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-[0.16em] text-foreground">
            <Sparkles className="h-3.5 w-3.5 text-teal" /> BUILD • CODE • INNOVATE
          </span>
          <h1 className="text-display mt-6 max-w-3xl text-foreground">
            We Build Technology That <span className="bg-gradient-to-r from-teal via-brand to-accent bg-clip-text text-transparent">Moves Businesses Forward.</span>
          </h1>
          <p className="text-lead mt-5 max-w-xl text-muted-foreground">
            From websites and mobile apps to automation, advertising and practical tech learning — MAGAF Technologies builds digital solutions for real-world growth.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className={btn({ variant: "glassPrimary", size: "lg" })}>
              Start a Project <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className={btn({ variant: "glassOutline", size: "lg" })}>
              Explore Our Services
            </Link>
          </div>
          <dl className="glass-panel stats-panel mt-9 grid max-w-xl grid-cols-3 divide-x divide-border/50 rounded-3xl">
            {companyStats.map((stat, index) => {
              const Icon = statIcons[index] ?? Users;
              return (
                <div key={stat.label} className="flex min-w-0 flex-col items-center px-2 py-5 text-center sm:px-4 sm:py-6">
                  <Icon3D icon={Icon} tone={statTones[index] ?? "brand"} size="sm" />
                  <dd className="mt-3 bg-gradient-to-r from-teal via-brand to-accent bg-clip-text font-mono text-3xl font-extrabold leading-none tracking-tight text-transparent sm:text-4xl">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-2 text-[0.62rem] font-semibold leading-snug text-muted-foreground sm:text-xs">{stat.label}</dt>
                </div>
              );
            })}
          </dl>
        </div>
        <div className="animate-in fade-in zoom-in-95 duration-1000">
          <PhoneVisual />
        </div>
      </div>
    </section>
  );
}
