import type { ComponentType, SVGProps } from "react";

export type TechId = "react" | "next" | "js" | "python" | "html" | "css" | "ai" | "db" | "code";

type P = SVGProps<SVGSVGElement>;

function ReactLogo(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <g stroke="#61DAFB" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      </g>
      <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
    </svg>
  );
}

function NextLogo(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <circle cx="12" cy="12" r="10" fill="#fff" />
      <path d="M8.2 16.8V7.2l7.6 9.9" stroke="#0a0a0a" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.8 7.2v6.2" stroke="#0a0a0a" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function JsLogo(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#F7DF1E" />
      <text x="12" y="16.8" textAnchor="middle" fontSize="9.5" fontWeight="800" fontFamily="Arial, sans-serif" fill="#141414">JS</text>
    </svg>
  );
}

function PythonLogo(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <path fill="#3776AB" d="M12 2.4c-4 0-4.4 1.7-4.4 3v1.9h8.9v.9H4.6C2.8 8.2 2 10.3 2 12s.8 3.5 2.6 3.5h2.3v-2.6c0-1.9 1.6-3.4 3.5-3.4h5.5c1.6 0 2.9-1.3 2.9-2.9V5.4c0-1.7-1.5-3-3.4-3H12z" />
      <circle cx="9.7" cy="5.3" r="1" fill="#fff" />
      <path fill="#FFD43B" d="M12 21.6c4 0 4.4-1.7 4.4-3v-1.9H7.5v-.9h11.9c1.8 0 2.6-2.1 2.6-3.8s-.8-3.5-2.6-3.5h-2.3v2.6c0 1.9-1.6 3.4-3.5 3.4H8.1c-1.6 0-2.9 1.3-2.9 2.9v1.2c0 1.7 1.5 3 3.4 3H12z" />
      <circle cx="14.3" cy="18.7" r="1" fill="#fff" />
    </svg>
  );
}

function HtmlLogo(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <path d="M4 2.5h16l-1.5 16.8L12 21.5 5.5 19.3 4 2.5z" fill="#E34F26" />
      <path d="M12 4.3v15l5.3-1.7L18.6 4.3H12z" fill="#FF6D3F" />
      <text x="12" y="15.6" textAnchor="middle" fontSize="9" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">5</text>
    </svg>
  );
}

function CssLogo(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <path d="M4 2.5h16l-1.5 16.8L12 21.5 5.5 19.3 4 2.5z" fill="#1572B6" />
      <path d="M12 4.3v15l5.3-1.7L18.6 4.3H12z" fill="#33A9DC" />
      <text x="12" y="15.6" textAnchor="middle" fontSize="9" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">3</text>
    </svg>
  );
}

function AiLogo(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <rect x="5" y="5" width="14" height="14" rx="3.5" fill="#8B5CF6" />
      <rect x="8" y="8" width="8" height="8" rx="2" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.1" />
      <g stroke="#8B5CF6" strokeWidth="1.6" strokeLinecap="round">
        <path d="M9 5V2.5M12 5V2.5M15 5V2.5M9 21.5V19M12 21.5V19M15 21.5V19M5 9H2.5M5 12H2.5M5 15H2.5M21.5 9H19M21.5 12H19M21.5 15H19" />
      </g>
      <text x="12" y="14.6" textAnchor="middle" fontSize="6.5" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">AI</text>
    </svg>
  );
}

function DbLogo(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" fill="#47A248" />
      <path d="M4.5 5.5v13c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8v-13" stroke="#47A248" strokeWidth="2" />
      <path d="M4.5 12c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8" stroke="#47A248" strokeWidth="2" />
    </svg>
  );
}

function CodeLogo(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <path d="M8.5 7 4 12l4.5 5M15.5 7 20 12l-4.5 5" stroke="#5CB3FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const logos: Record<TechId, ComponentType<P>> = {
  react: ReactLogo, next: NextLogo, js: JsLogo, python: PythonLogo, html: HtmlLogo,
  css: CssLogo, ai: AiLogo, db: DbLogo, code: CodeLogo,
};

export function TechLogo({ id, ...props }: { id: TechId } & P) {
  const Logo = logos[id];
  return <Logo {...props} />;
}
