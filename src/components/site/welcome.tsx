import { useEffect, useRef, useState } from "react";
import { MousePointerClick } from "lucide-react";
import { cn } from "@/lib/utils";
import magafRobot from "@/assets/magaf-robot.png.asset.json";

const GREETING = "Hello! Welcome to MAGAF Technologies.";
const TAGLINE = "Build • Code • Innovate";
const VOICE_LINE = "Hello! Welcome to MAGAF Technologies. Let's build something amazing.";

function pickVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  const indian = voices.filter((v) => v.lang.toLowerCase().startsWith("en-in"));
  return (
    indian.find((v) => !/female|heera|swara|kalpana|lekha|aditi/i.test(v.name)) ??
    indian[0] ??
    voices.find((v) => v.lang.toLowerCase().startsWith("en"))
  );
}

function speak() {
  try {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(VOICE_LINE);
    const voice = pickVoice();
    if (voice) utterance.voice = voice;
    utterance.rate = 1;
    utterance.pitch = 1;
    synth.speak(utterance);
  } catch {
    // Voice is a nice-to-have; the animation must never break because of it.
  }
}

export function Welcome() {
  const [stage, setStage] = useState<"hidden" | "show" | "leaving">("hidden");
  const [text, setText] = useState("");
  const [showTagline, setShowTagline] = useState(false);
  const spoken = useRef(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("magaf-welcomed") === "1";
    } catch {
      // Storage unavailable — still show the intro.
    }
    if (seen) return;

    setStage("show");
    document.body.style.overflow = "hidden";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let typer = 0;
    if (reduced) {
      setText(GREETING);
      setShowTagline(true);
    } else {
      let i = 0;
      typer = window.setInterval(() => {
        i += 1;
        setText(GREETING.slice(0, i));
        if (i >= GREETING.length) {
          window.clearInterval(typer);
          setShowTagline(true);
        }
      }, 32);
    }

    const trySpeak = () => {
      if (spoken.current) return;
      spoken.current = true;
      speak();
    };
    if ("speechSynthesis" in window) {
      if (window.speechSynthesis.getVoices().length) {
        trySpeak();
      } else {
        window.speechSynthesis.addEventListener("voiceschanged", trySpeak, { once: true });
      }
    }

    const leave = window.setTimeout(() => setStage("leaving"), reduced ? 1400 : 2600);
    return () => {
      window.clearInterval(typer);
      window.clearTimeout(leave);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (stage !== "leaving") return;
    try {
      sessionStorage.setItem("magaf-welcomed", "1");
    } catch {
      // Ignore — the intro simply shows again next visit.
    }
    document.body.style.overflow = "";
    const t = window.setTimeout(() => setStage("hidden"), 550);
    return () => window.clearTimeout(t);
  }, [stage]);

  if (stage === "hidden") return null;

  const enter = () => {
    if (!spoken.current && "speechSynthesis" in window) {
      spoken.current = true;
      speak();
    }
    setStage("leaving");
  };

  return (
    <div
      role="dialog"
      aria-label="Welcome to MAGAF Technologies"
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background transition-all duration-500",
        stage === "leaving" && "pointer-events-none scale-[1.04] opacity-0",
      )}
    >
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute left-[30%] top-[30%] h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[25%] right-[28%] h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="welcome-robot relative">
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal/25 via-brand/25 to-accent/25 blur-2xl" />
          <img
            src={magafRobot.url}
            alt="MAGAF robot mascot waving hello"
            width="853"
            height="1280"
            className="float-a relative h-48 w-auto drop-shadow-[0_24px_36px_oklch(0.4_0.18_275/30%)] sm:h-60"
          />
        </div>

        <p className="mt-8 min-h-8 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl" aria-live="polite">
          {text}
          {!showTagline && <span className="welcome-caret ml-0.5 inline-block h-5 w-0.5 translate-y-0.5 bg-brand" aria-hidden="true" />}
        </p>
        <p
          className={cn(
            "mt-3 bg-gradient-to-r from-teal via-brand to-accent bg-clip-text text-sm font-bold tracking-[0.3em] text-transparent transition-all duration-700",
            showTagline ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          )}
        >
          {TAGLINE}
        </p>

        <button
          type="button"
          onClick={enter}
          className="mt-10 inline-flex items-center gap-2 rounded-full border bg-card px-5 py-2.5 text-sm font-semibold text-muted-foreground shadow-card transition-all hover:-translate-y-0.5 hover:border-brand hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <MousePointerClick className="h-4 w-4 text-brand" /> Tap to enter
        </button>
      </div>
    </div>
  );
}
