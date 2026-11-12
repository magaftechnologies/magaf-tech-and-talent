import { Code2, Smartphone, Workflow, Clapperboard, Palette, GraduationCap, Layers3, type LucideIcon } from "lucide-react";
import type { Tone } from "./ui";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Project" },
  { to: "/learning", label: "Learning" },
  { to: "/contact", label: "Contact" },
] as const;

export type Service = { n: string; title: string; description: string; icon: LucideIcon; tone: Tone; tint: string };
export const services: Service[] = [
  { n: "01", title: "Web Development", description: "Responsive websites and web applications with thoughtful interfaces and dependable builds.", icon: Code2, tone: "teal", tint: "group-hover:bg-teal-soft" },
  { n: "02", title: "App Development", description: "Purpose-built mobile and business applications designed around real user needs.", icon: Smartphone, tone: "brand", tint: "group-hover:bg-brand-soft" },
  { n: "03", title: "AI & Business Automation", description: "AI-powered workflows and smart systems that reduce repetitive business work.", icon: Workflow, tone: "violet", tint: "group-hover:bg-brand-soft" },
  { n: "04", title: "Video Advertising & Editing", description: "Promotional videos, social ads, motion graphics and polished brand stories.", icon: Clapperboard, tone: "brand", tint: "group-hover:bg-brand-soft" },
  { n: "05", title: "Creative & Digital Services", description: "Digital creatives, marketing visuals and brand content with a consistent identity.", icon: Palette, tone: "violet", tint: "group-hover:bg-teal-soft" },
  { n: "06", title: "Technology Courses & Membership", description: "Practical Python learning, guided projects, career preparation and membership.", icon: GraduationCap, tone: "teal", tint: "group-hover:bg-teal-soft" },
];

export const companyStats = [
  { value: 3, suffix: "+", label: "Clients & Projects Delivered" },
  { value: 20, suffix: "+", label: "Courses & Learning Programs" },
  { value: 40, suffix: "+", label: "Advertising & Promotional Videos" },
] as const;

export type Project = { t: string; c: string; icon: LucideIcon; bg: string; accent: string };
export const projects: Project[] = [
  { t: "Client Project Delivered", c: "Professional digital solution", icon: Layers3, bg: "bg-brand-soft", accent: "bg-brand" },
];
