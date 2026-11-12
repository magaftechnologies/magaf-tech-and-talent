import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Lightbulb, Cpu, PenTool, Briefcase, MonitorSmartphone, RefreshCw,
  Search, Map, Hammer, FlaskConical, Rocket, TrendingUp, Terminal, BookOpen, FolderGit2, Compass, Target, Users,
  Mail, MessageSquare, Braces,
} from "lucide-react";
import { btn, container, Icon3D, Reveal, SectionHead, Eyebrow } from "./ui";
import { projects, services, type Project } from "./data";
import { TechLogo, type TechId } from "./tech-logos";
import { cn } from "@/lib/utils";
import magafMark from "@/assets/magaf-mark.png.asset.json";

const section = "relative py-20 sm:py-24";

export function Intro() {
  const pillars = [
    { icon: Cpu, t: "Technology", d: "Websites, apps and automation built on modern, dependable stacks.", tone: "teal" as const },
    { icon: PenTool, t: "Creativity", d: "Videos, ads and visuals that make a brand easy to remember.", tone: "violet" as const },
    { icon: Lightbulb, t: "Practical Innovation", d: "Solutions shaped around real problems, not trends.", tone: "brand" as const },
  ];
  return (
    <section className={cn(section, "overflow-hidden")}>
      <div className={cn(container, "grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center")}>
        <Reveal direction="left">
          <SectionHead eyebrow="About MAGAF" title={<>Technology. Creativity. <span className="text-brand">Practical Innovation.</span></>}
            text="MAGAF Technologies brings development, automation and creative digital services together to build better digital experiences." />
          <blockquote className="glass-card relative mt-8 max-w-xl overflow-hidden rounded-2xl p-6">
            <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal via-brand to-accent" />
            <p className="pl-2 text-lg font-bold leading-relaxed">“We build digital experiences that turn ideas into practical solutions.”</p>
          </blockquote>
        </Reveal>
        <div className="relative grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-3xl border-[14px] border-accent/10" />
          {pillars.map((p, i) => (
            <Reveal key={p.t} direction="right" delay={i * 100} className={cn("relative h-full", i === 1 && "xl:mt-7")}>
              <article className="glass-card card-texture h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <Icon3D icon={p.icon} tone={p.tone} />
                <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className={section} id="services">
      <div className={container}>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead eyebrow="What we do" title="Services built for real-world growth" text="Focused digital capabilities, brought together under one roof." />
          <Reveal direction="right"><Link to="/contact" className={btn({ variant: "outline" })}>Discuss your project <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 90} className="h-full">
              <Link to="/contact" className={cn("glass-card card-texture group relative flex h-full flex-col rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift", s.tint)}>
                <div className="flex items-start justify-between">
                  <Icon3D icon={s.icon} tone={s.tone} size="sm" className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" />
                  <span className="font-mono text-xs font-bold text-muted-foreground">{s.n}</span>
                </div>
                <h3 className="mt-4 text-lg font-extrabold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <span className="mt-auto flex items-center gap-2 pt-4 text-sm font-bold text-foreground">
                  Enquire <ArrowUpRight className="h-4 w-4 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Why() {
  const points = [
    { icon: Target, t: "Practical Solutions", d: "We focus on what actually solves the problem in front of you.", tone: "teal" as const },
    { icon: Cpu, t: "Modern Technology", d: "Current, well-supported tools that keep products maintainable.", tone: "brand" as const },
    { icon: Lightbulb, t: "Creative Thinking", d: "Design and storytelling are part of every build, not an afterthought.", tone: "violet" as const },
    { icon: Briefcase, t: "Business-Focused Approach", d: "Every decision is weighed against your goals and budget.", tone: "brand" as const },
    { icon: MonitorSmartphone, t: "Responsive Web Design", d: "Experiences that work across phones, tablets and desktops.", tone: "teal" as const },
    { icon: RefreshCw, t: "Continuous Improvement", d: "We keep refining after launch whenever you need it.", tone: "violet" as const },
  ];
  return (
    <section className={section}>
      <div className={container}>
        <SectionHead center eyebrow="Why MAGAF" title={<>Why Build With <span className="text-brand">MAGAF?</span></>} text="A practical, creative and business-aware approach to every digital product." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 80} className="h-full">
              <article className="glass-card card-texture group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <Icon3D icon={p.icon} tone={p.tone} />
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { icon: Search, t: "Understand", d: "We understand the business, problem and objective." },
    { icon: Map, t: "Plan", d: "We define the right technology and creative direction." },
    { icon: Hammer, t: "Build", d: "We design and develop the solution." },
    { icon: FlaskConical, t: "Test", d: "We refine the experience across devices." },
    { icon: Rocket, t: "Launch", d: "We deliver a polished digital product." },
    { icon: TrendingUp, t: "Improve", d: "We continue improving the product when required." },
  ];
  return (
    <section className={cn(section, "overflow-hidden bg-ink text-ink-foreground")}>
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className={cn(container, "relative")}>
        <Reveal direction="left" className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-teal"><span className="h-px w-6 bg-teal" />How we work</span>
          <h2 className="text-h2 mt-4">A clear process, from idea to launch.</h2>
        </Reveal>
        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          <span className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-teal/30 via-brand/30 to-accent/30 lg:block" />
          {steps.map((s, i) => (
            <li key={s.t}>
              <Reveal delay={i * 80}>
                <div className="relative flex gap-5 lg:block">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-ink-foreground/15 bg-ink shadow-card transition-colors hover:border-teal">
                    <s.icon className="h-6 w-6 text-teal" />
                  </span>
                  <div className="lg:mt-5">
                    <span className="font-mono text-xs text-ink-foreground/45">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-1 text-lg font-bold">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-foreground/65">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const orbitTech: { id: TechId; label: string }[] = [
  { id: "react", label: "React" },
  { id: "next", label: "Next.js" },
  { id: "js", label: "JavaScript" },
  { id: "python", label: "Python" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "node", label: "Node.js" },
  { id: "ts", label: "TypeScript" },
  { id: "ai", label: "AI" },
  { id: "db", label: "Database" },
];

export function Tech() {
  return (
    <section className={cn(section, "overflow-hidden")}>
      <div className={cn(container, "grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center")}>
        <Reveal direction="left">
          <Eyebrow>Technologies We Work With</Eyebrow>
          <h2 className="text-h2 mt-4">Built With <span className="text-brand">Modern Technology</span></h2>
          <p className="text-lead mt-5 max-w-lg text-muted-foreground">A connected toolkit for building responsive interfaces, scalable products and intelligent workflows.</p>
          <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-muted-foreground"><Braces className="h-5 w-5 text-teal" /> Designed to stay useful as your ideas grow.</div>
        </Reveal>
        <div className="tech-orbit relative mx-auto aspect-square w-full max-w-[520px]" aria-label="MAGAF technology ecosystem orbit">
          <div className="absolute inset-[5%] rounded-full border border-dashed border-brand/25" />
          <div className="absolute inset-[25%] rounded-full border border-teal/20" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-2xl" />
          <Reveal direction="scale" className="tech-orbit-center absolute left-1/2 top-1/2 z-10" style={{ translate: "-50% -50%" }}>
            <div className="glass-panel icon-3d flex h-24 w-24 flex-col items-center justify-center rounded-full p-3 text-center sm:h-28 sm:w-28">
              <img src={magafMark.url} alt="MAGAF Technologies" width="1280" height="1049" loading="lazy" className="h-11 w-12 rounded-xl object-cover sm:h-12 sm:w-14" />
              <span className="mt-1 text-[0.48rem] font-extrabold tracking-[0.12em] text-foreground sm:text-[0.55rem]">MAGAF</span>
              <span className="text-[0.35rem] font-bold tracking-[0.08em] text-muted-foreground sm:text-[0.4rem]">TECHNOLOGIES</span>
            </div>
          </Reveal>
          <div className="tech-orbit-ring absolute inset-0">
            {orbitTech.map((tech, index) => {
              const angle = (360 / orbitTech.length) * index;
              return (
                <span
                  key={tech.label}
                  aria-label={tech.label}
                  title={tech.label}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(clamp(6.5rem, 29vw, 13rem)) rotate(${-angle}deg)` }}
                >
                  <span className="tech-orbit-card glass-card icon-3d flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-2xl sm:h-16 sm:w-16">
                    <TechLogo id={tech.id} className="h-6 w-6 sm:h-7 sm:w-7" />
                    <span className="text-[0.45rem] font-bold leading-none text-muted-foreground sm:text-[0.52rem]">{tech.label}</span>
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[500px]" aria-hidden="true">
      <div className="absolute left-[8%] right-[8%] top-[12%] rounded-2xl border-[6px] border-ink bg-card p-3 shadow-lift">
        <div className="card-texture h-full rounded-lg p-5 font-mono text-xs leading-7 sm:text-sm">
          <p><span className="text-accent">class</span> <span className="text-brand">Learner</span>:</p>
          <p className="pl-4 text-muted-foreground">skills = [<span className="text-teal">"python"</span>, <span className="text-teal">"projects"</span>]</p>
          <p className="pl-4"><span className="text-accent">def</span> <span className="text-brand">grow</span>():</p>
          <p className="pl-8 text-muted-foreground"><span className="text-accent">return</span> build + practice</p>
        </div>
      </div>
      <div className="absolute bottom-[12%] left-0 right-0 h-[12%] rounded-b-[2rem] bg-gradient-to-b from-secondary to-border shadow-lift" />
      <div className="float-b absolute right-[1%] top-0">
        <span className="icon-3d flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-brand font-mono text-lg font-extrabold text-primary-foreground">py</span>
      </div>
      <div className="float-a absolute bottom-[2%] left-[3%] rounded-2xl border bg-card p-3 shadow-card"><FolderGit2 className="h-7 w-7 text-accent" /></div>
      <div className="float-c absolute bottom-[4%] right-[5%] rounded-2xl border bg-card p-3 shadow-card"><Terminal className="h-7 w-7 text-teal" /></div>
    </div>
  );
}

export function Learning() {
  const items = [
    { icon: Terminal, t: "Python" }, { icon: BookOpen, t: "Programming" }, { icon: FolderGit2, t: "Practical projects" },
    { icon: Compass, t: "Guided learning" }, { icon: Target, t: "Career preparation" }, { icon: Users, t: "Membership programs" },
  ];
  return (
    <section className={section} id="learning">
      <div className={container}>
        <div className="glass-panel relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-soft/70 via-background/60 to-brand-soft/70 p-7 sm:p-10 lg:p-14">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal direction="left">
              <Eyebrow>MAGAF Learning</Eyebrow>
              <h2 className="text-h2 mt-4">Learn. Build. <span className="bg-gradient-to-r from-teal to-brand bg-clip-text text-transparent">Grow.</span></h2>
              <p className="text-lead mt-5 max-w-lg text-muted-foreground">Practical technology learning and guidance — start with Python, work on real projects, and prepare for your next career step.</p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {items.map((item, i) => (
                  <Reveal key={item.t} delay={i * 60}>
                    <div className="glass-card flex h-full items-center gap-2.5 rounded-xl p-3 text-xs font-bold sm:text-sm"><item.icon className="h-4 w-4 shrink-0 text-teal" />{item.t}</div>
                  </Reveal>
                ))}
              </div>
              <Link to="/learning" className={cn(btn({ variant: "brand" }), "mt-7")}>Explore Learning <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
            <Reveal direction="right"><LearningVisual /></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mock({ project, big }: { project: Project; big?: boolean }) {
  return (
    <div className={cn("browser-mock glass-panel card-texture relative overflow-hidden rounded-2xl p-5 sm:p-7", project.bg, big ? "aspect-[16/10]" : "aspect-[4/3]")}>
      <div className="glass-card h-full overflow-hidden rounded-xl transition-transform duration-700 group-hover:scale-[1.025]">
        <div className="flex items-center gap-1.5 border-b px-3 py-2"><span className="h-2 w-2 rounded-full bg-accent/50" /><span className="h-2 w-2 rounded-full bg-brand/50" /><span className="h-2 w-2 rounded-full bg-teal/50" /></div>
        <div className="grid h-full grid-cols-5 gap-3 p-4">
          <div className="col-span-3 space-y-2.5">
            <span className={cn("block h-3 w-1/3 rounded", project.accent)} />
            <span className="block h-4 w-11/12 rounded bg-foreground/80" /><span className="block h-4 w-2/3 rounded bg-foreground/80" />
            <span className="block h-2 w-full rounded bg-secondary" /><span className="block h-2 w-5/6 rounded bg-secondary" />
            <span className={cn("mt-3 block h-6 w-24 rounded-full", project.accent)} />
          </div>
          <div className={cn("col-span-2 flex items-start justify-center rounded-lg pt-6", project.bg)}><project.icon className="h-1/3 w-1/3 text-foreground/40" /></div>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  const project = projects[0];
  if (!project) return null;
  return (
    <section className={section} id="work">
      <div className={cn(container, "grid gap-10 lg:grid-cols-2 lg:items-center")}>
        <Reveal direction="left">
          <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] text-foreground shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-teal to-accent" /> Our Project
          </span>
          <h2 className="text-h2 mt-5">Client Project <span className="text-brand">Delivered</span></h2>
          <p className="text-lead mt-4 max-w-md text-muted-foreground">A professional digital solution designed and delivered for our client.</p>
          <Link to="/contact" className={cn(btn({ variant: "brand" }), "mt-7")}>View Project <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <Reveal direction="right">
          <article className="group">
            <Mock project={project} big />
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className={container}>
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center text-ink-foreground sm:px-12 sm:py-20">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-accent/25" />
            <div className="absolute -bottom-20 -left-10 h-48 w-48 rotate-12 rounded-[2.5rem] border-[20px] border-teal/25" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-h2">Have an Idea? <span className="text-teal">Let's Build It.</span></h2>
              <p className="text-lead mt-5 text-ink-foreground/70">Tell us what you want to build, improve or automate.</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/contact" className={btn({ variant: "brand", size: "lg" })}>Start a Project <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/contact" className={btn({ variant: "ghostLight", size: "lg" })}>Talk to MAGAF</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden pb-6 pt-14 sm:pt-20">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className={cn(container, "relative max-w-4xl")}>
        <Reveal direction="left">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-display mt-5">{title}</h1>
          <p className="text-lead mt-5 max-w-2xl text-muted-foreground">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", service: "", message: "" });
  const [err, setErr] = useState<Partial<Record<keyof typeof v, string>>>({});
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const x: Partial<Record<keyof typeof v, string>> = {};
    if (v.name.trim().length < 2) x.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = "Please enter a valid email.";
    if (!v.service) x.service = "Please choose a service.";
    if (v.message.trim().length < 10) x.message = "Tell us a little more (10+ characters).";
    setErr(x);
    if (!Object.keys(x).length) setSent(true);
  };
  const field = "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/25";
  return (
    <section className="pb-24 pt-10">
      <div className={cn(container, "grid gap-10 lg:grid-cols-[0.8fr_1.2fr]")}>
        <div className="space-y-4">
          {[{ icon: MessageSquare, t: "Project enquiries", d: "Websites, apps, automation, video and creative work." },
            { icon: BookOpen, t: "Learning & membership", d: "Python courses, guided learning and career guidance." },
            { icon: Mail, t: "Response", d: "We'll get back to you after reviewing your message." }].map((c, i) => (
            <Reveal key={c.t} direction="left" delay={i * 70}>
              <article className="glass-card card-texture flex gap-4 rounded-2xl p-5">
                <Icon3D icon={c.icon} tone="brand" size="sm" />
                <div><h2 className="font-bold">{c.t}</h2><p className="mt-1 text-sm text-muted-foreground">{c.d}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal direction="right">
          <div className="glass-panel rounded-3xl p-6 sm:p-10">
            {sent ? (
              <div className="py-12 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-soft"><Check className="h-8 w-8 text-teal" /></span>
                <h2 className="mt-6 text-2xl font-extrabold">Thank you, {v.name.split(" ")[0]}!</h2>
                <p className="mt-2 text-muted-foreground">Your message is ready. (This is a demo form — no data was sent.)</p>
                <button onClick={() => { setSent(false); setV({ name: "", email: "", service: "", message: "" }); }} className={cn(btn({ variant: "outline" }), "mt-8")}>Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold">Name<input className={field} value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} aria-invalid={!!err.name} />{err.name && <span className="mt-1 block text-destructive">{err.name}</span>}</label>
                <label className="text-sm font-semibold">Email<input type="email" className={field} value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} aria-invalid={!!err.email} />{err.email && <span className="mt-1 block text-destructive">{err.email}</span>}</label>
                <label className="text-sm font-semibold sm:col-span-2">What do you need?
                  <select className={field} value={v.service} onChange={(e) => setV({ ...v, service: e.target.value })} aria-invalid={!!err.service}>
                    <option value="">Choose a service</option>
                    {services.map((s) => <option key={s.n}>{s.title}</option>)}
                  </select>{err.service && <span className="mt-1 block text-destructive">{err.service}</span>}
                </label>
                <label className="text-sm font-semibold sm:col-span-2">Message<textarea rows={5} className={field} value={v.message} onChange={(e) => setV({ ...v, message: e.target.value })} aria-invalid={!!err.message} />{err.message && <span className="mt-1 block text-destructive">{err.message}</span>}</label>
                <button type="submit" className={cn(btn({ variant: "brand", size: "lg" }), "sm:col-span-2")}>Send Message <ArrowRight className="h-4 w-4" /></button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
