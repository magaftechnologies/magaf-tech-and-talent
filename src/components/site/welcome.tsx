import { useCallback, useEffect, useRef, useState } from "react";
import { MousePointerClick } from "lucide-react";
import { cn } from "@/lib/utils";
import magafMark from "@/assets/magaf-mark.png.asset.json";

const WELCOME = "WELCOME TO MAGAF TECHNOLOGIES";
const TAGLINE = "BUILD • CODE • INNOVATE";
const VOICE_LINE = "Hello! Welcome to MAGAF Technologies. Let's build something amazing.";

function pickVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  const indian = voices.filter((voice) => voice.lang.toLowerCase().startsWith("en-in"));
  return (
    indian.find((voice) => /ravi|prabhat|hemant|arjun|male/i.test(voice.name)) ??
    indian.find((voice) => !/female|heera|swara|kalpana|lekha|aditi/i.test(voice.name)) ??
    indian[0] ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith("en"))
  );
}

function speak(onStart: () => void, onFallback: () => void) {
  try {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(VOICE_LINE);
    const voice = pickVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang ?? "en-IN";
    utterance.rate = 0.97;
    utterance.pitch = 1;
    utterance.onstart = onStart;
    utterance.onerror = onFallback;
    synth.resume();
    synth.speak(utterance);
  } catch {
    onFallback();
  }
}

export function Welcome() {
  const [stage, setStage] = useState<"hidden" | "show" | "leaving">("hidden");
  const [needsGesture, setNeedsGesture] = useState(false);
  const spoken = useRef(false);
  const voiceStarted = useRef(false);

  const beginExit = useCallback(() => {
    setStage((current) => (current === "show" ? "leaving" : current));
  }, []);

  const playVoice = useCallback(() => {
    if (spoken.current) return;
    spoken.current = true;
    if (!("speechSynthesis" in window)) {
      setNeedsGesture(true);
      return;
    }
    speak(
      () => {
        voiceStarted.current = true;
        setNeedsGesture(false);
      },
      () => setNeedsGesture(true),
    );
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("magaf-welcomed") === "1";
    } catch {
      // Storage can be unavailable without affecting the introduction.
    }
    if (seen) return;

    setStage("show");
    document.documentElement.classList.add("welcoming");
    document.body.style.overflow = "hidden";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if ("speechSynthesis" in window && window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener("voiceschanged", playVoice, { once: true });
    }
    const voiceTimer = window.setTimeout(playVoice, 250);
    const fallbackTimer = window.setTimeout(() => {
      if (!voiceStarted.current) setNeedsGesture(true);
    }, 800);
    const leaveTimer = window.setTimeout(() => {
      if (voiceStarted.current) beginExit();
      else setNeedsGesture(true);
    }, reduced ? 1600 : 2250);

    return () => {
      window.clearTimeout(voiceTimer);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(leaveTimer);
      window.speechSynthesis?.removeEventListener("voiceschanged", playVoice);
      document.documentElement.classList.remove("welcoming");
      document.body.style.overflow = "";
    };
  }, [beginExit, playVoice]);

  useEffect(() => {
    if (stage !== "leaving") return;
    try {
      sessionStorage.setItem("magaf-welcomed", "1");
    } catch {
      // The introduction can safely appear again when storage is unavailable.
    }
    document.documentElement.classList.remove("welcoming");
    document.body.style.overflow = "";
    const timer = window.setTimeout(() => setStage("hidden"), 550);
    return () => window.clearTimeout(timer);
  }, [stage]);

  if (stage === "hidden") return null;

  const enter = () => {
    playVoice();
    beginExit();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to MAGAF Technologies"
      className={cn(
        "welcome-screen fixed inset-0 z-[100] flex items-center justify-center overflow-hidden text-ink-foreground transition-all duration-500",
        stage === "leaving" && "pointer-events-none scale-[1.025] opacity-0 blur-sm",
      )}
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="welcome-particles pointer-events-none absolute inset-0" />

      <div className="relative flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="welcome-logo glass-panel relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] sm:h-28 sm:w-28">
          <img
            src={magafMark.url}
            alt="MAGAF Technologies logo"
            width="1280"
            height="1049"
            className="h-[78%] w-[78%] rounded-2xl object-cover"
          />
        </div>

        <h1 className="mt-9 text-balance text-[clamp(1.2rem,4vw,2.35rem)] font-extrabold tracking-[0.08em]">
          {Array.from(WELCOME).map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              aria-hidden="true"
              className="welcome-letter"
              style={{ animationDelay: `${180 + index * 24}ms` }}
            >
              {letter === " " ? "\u00a0" : letter}
            </span>
          ))}
          <span className="sr-only">{WELCOME}</span>
        </h1>
        <p className="welcome-tagline mt-5 bg-gradient-to-r from-teal via-brand to-accent bg-clip-text text-xs font-bold tracking-[0.3em] text-transparent sm:text-sm">
          {TAGLINE}
        </p>

        {needsGesture && stage === "show" && (
          <button
            type="button"
            onClick={enter}
            className="glass-panel mt-10 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink-foreground transition-all hover:-translate-y-0.5 hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <MousePointerClick className="h-4 w-4 text-teal" /> Tap to Enter
          </button>
        )}
      </div>
    </div>
  );
}
