import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "./data";
import { btn, container } from "./ui";
import { cn } from "@/lib/utils";
import magafMark from "@/assets/magaf-mark.png.asset.json";
import magafWordmark from "@/assets/magaf-wordmark.png.asset.json";

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="MAGAF Technologies home">
      {light ? (
        <img src={magafWordmark.url} alt="MAGAF Technologies" width="1086" height="362" loading="lazy" className="h-14 w-auto max-w-56 rounded-lg object-contain" />
      ) : (
        <>
          <img src={magafMark.url} alt="MAGAF Technologies logo" width="1280" height="1049" className="h-10 w-12 rounded-xl object-cover" />
          <span className="leading-none">
            <span className="block text-[1.05rem] font-extrabold tracking-tight text-foreground">MAGAF</span>
            <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">Technologies</span>
          </span>
        </>
      )}
    </Link>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.classList.contains("dark")); }, []);
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try { localStorage.setItem("magaf-theme", next ? "dark" : "light"); } catch { /* Theme still works when storage is unavailable. */ }
    setDark(next);
  };
  const label = dark ? "Switch to light theme" : "Switch to dark theme";
  return (
    <button type="button" onClick={toggle} aria-label={label} title={label} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-input bg-card text-foreground shadow-card transition-all hover:-translate-y-0.5 hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <Sun className="h-5 w-5 dark:hidden" strokeWidth={1.8} />
      <Moon className="hidden h-5 w-5 dark:block" strokeWidth={1.8} />
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);
  return (
    <header className={cn("sticky top-0 z-50 border-b transition-colors duration-300", scrolled || open ? "border-border bg-background/90 backdrop-blur-xl" : "border-transparent bg-background/60 backdrop-blur-sm")}>
      <div className={cn(container, "flex h-18 items-center justify-between gap-3 py-4")}>
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="rounded-full px-3.5 py-2 text-[0.92rem] font-semibold text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact" className={cn(btn(), "hidden lg:inline-flex")}>Start a Project <ArrowUpRight className="h-4 w-4" /></Link>
          <button onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full border border-input bg-card shadow-card lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-navigation" className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t bg-background lg:hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className={cn(container, "flex flex-col py-6")} aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
                className="flex items-center justify-between border-b py-4 text-2xl font-bold text-foreground data-[status=active]:text-brand">
                {n.label} <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className={cn(btn({ size: "lg" }), "mt-8")}>Start a Project</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className={cn(container, "grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]")}>
        <div>
          <Logo light />
          <p className="mt-5 text-sm font-bold tracking-[0.3em] text-teal">BUILD • CODE • INNOVATE</p>
          <p className="mt-4 max-w-sm text-ink-foreground/65">Technology, automation, creative and learning — built with care in India.</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-ink-foreground/50">Navigate</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="text-ink-foreground/80 transition-colors hover:text-teal">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-ink-foreground/50">Get in touch</h2>
          <p className="mt-5 text-ink-foreground/80">Have something to build, improve or automate?</p>
          <Link to="/contact" className={cn(btn({ variant: "brand" }), "mt-5")}>Talk to MAGAF <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className={cn(container, "flex flex-col gap-2 py-6 text-sm text-ink-foreground/50 sm:flex-row sm:justify-between")}>
          <span>© {new Date().getFullYear()} MAGAF Technologies. All rights reserved.</span>
          <span>Technology with purpose. Built in India.</span>
        </div>
      </div>
    </footer>
  );
}
