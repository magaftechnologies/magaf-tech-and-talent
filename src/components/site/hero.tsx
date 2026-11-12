import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Users, GraduationCap, Play } from "lucide-react";
import { btn, container } from "./ui";
import { companyStats } from "./data";
import { TechLogo, type TechId } from "./tech-logos";
import { cn } from "@/lib/utils";
import magafRobot from "@/assets/magaf-robot.png.asset.json";

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
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setValue(to); return; }
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 900, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [to]);
  return <span ref={ref} aria-label={`${to}${suffix}`}><span aria-hidden="true">{value}{suffix}</span></span>;
}

const orbitIcons: { id: TechId; label: string; className: string; float: string }[] = [
  { id: "react", label: "React", className: "left-[2%] top-[16%]", float: "float-a" },
  { id: "python", label: "Python", className: "right-[0%] top-[24%]", float: "float-b" },
  { id: "js", label: "JavaScript", className: "bottom-[18%] left-[5%]", float: "float-c" },
  { id: "next", label: "Next.js", className: "bottom-[8%] right-[7%]", float: "float-a" },
  { id: "ai", label: "AI", className: "left-[36%] top-[0%]", float: "float-b" },
  { id: "code", label: "Code", className: "right-[8%] bottom-[36%]", float: "float-c" },
];

const statIcons = [Users, GraduationCap, Play] as const;

function RobotVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[480px]" aria-label="MAGAF robot mascot">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal/30 via-brand/30 to-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-[4%] animate-[spin_46s_linear_infinite] rounded-full border border-dashed border-brand/40 shadow-[0_0_40px_oklch(0.62_0.2_260/22%)]" />
      <div className="pointer-events-none absolute inset-[15%] rounded-full border border-teal/25" />

      <img
        src={magafRobot.url}
        alt="MAGAF Technologies robot mascot waving"
        width="853"
        height="1280"
        className="float-a relative mx-auto w-[78%] drop-shadow-[0_32px_44px_oklch(0.4_0.18_275/35%)]"
      />

      <span className="float-b absolute right-[16%] top-[6%] inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-brand font-mono text-sm font-extrabold text-primary-foreground shadow-lift">py</span>
      {orbitIcons.map((item) => (
        <span
          key={item.label}
          title={item.label}
          className={cn("glass-chip absolute inline-flex h-12 w-12 items-center justify-center rounded-2xl", item.className, item.float)}
        >
          <TechLogo id={item.id} className="h-6 w-6" />
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
      <div className={cn(container, "relative grid items-center gap-10 pb-14 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:pt-16")}>
        <div className="animate-in fade-in slide-in-from-left-4 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] text-foreground shadow-card">
            <Sparkles className="h-3.5 w-3.5 text-teal" /> Welcome to MAGAF Technologies
          </span>
          <h1 className="text-display mt-6 max-w-3xl text-foreground">
            We Build <span className="bg-gradient-to-r from-teal via-brand to-accent bg-clip-text text-transparent">Digital Solutions</span> for Real Business Growth
          </h1>
          <p className="text-lead mt-5 max-w-xl text-muted-foreground">
            Web &amp; App Development, Business Automation, Creative Advertising and Practical Technology Learning — all in one place.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className={btn({ variant: "brand", size: "lg" })}>Start a Project <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/services" className={btn({ variant: "outline", size: "lg" })}>Explore Services <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <dl className="glass mt-9 grid max-w-xl grid-cols-1 divide-y divide-border/60 rounded-3xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {companyStats.map((stat, i) => {
              const Icon = statIcons[i] ?? Users;
              return (
                <div key={stat.label} className="flex items-center gap-3.5 px-5 py-4">
                  <span className="glass-chip inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5 text-teal" strokeWidth={1.9} />
                  </span>
                  <div>
                    <dd className="bg-gradient-to-r from-teal via-brand to-accent bg-clip-text font-mono text-2xl font-extrabold leading-none tracking-tight text-transparent sm:text-3xl">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </dd>
                    <dt className="mt-1.5 text-[0.68rem] font-bold leading-snug text-muted-foreground sm:text-xs">{stat.label}</dt>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
        <div className="animate-in fade-in zoom-in-95 duration-1000"><RobotVisual /></div>
      </div>
    </section>
  );
}
