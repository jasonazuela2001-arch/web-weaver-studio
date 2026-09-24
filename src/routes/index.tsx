import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Braces,
  Check,
  ChevronRight,
  Clock3,
  Code2,
  Database,
  GitBranch,
  Mail,
  Menu,
  Network,
  Settings2,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jason Azuela — AI Automation Expert" },
      {
        name: "description",
        content:
          "AI automation systems that connect your tools, streamline workflows, and give your team back time for higher-value work.",
      },
      { property: "og:title", content: "Jason Azuela — AI Automation Expert" },
      {
        property: "og:description",
        content: "Practical AI automation that turns repetitive processes into reliable, connected workflows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const navItems = ["About", "Skills", "Experience", "Contact"];

const skills = [
  {
    icon: GitBranch,
    number: "01",
    title: "Workflow Architecture",
    description: "Map complex operations into clear, dependable systems that keep work moving without constant oversight.",
    tags: ["Process mapping", "Logic design", "Error handling"],
  },
  {
    icon: Bot,
    number: "02",
    title: "AI Integration",
    description: "Put language models and intelligent agents to work inside the tools your team already uses every day.",
    tags: ["AI agents", "Prompt systems", "Knowledge bases"],
  },
  {
    icon: Network,
    number: "03",
    title: "System Connection",
    description: "Connect disconnected apps, data, and teams into one coordinated operational flow with fewer handoffs.",
    tags: ["APIs", "Webhooks", "Data sync"],
  },
  {
    icon: Zap,
    number: "04",
    title: "Automation Optimization",
    description: "Audit and improve existing automations for speed, reliability, visibility, and long-term maintainability.",
    tags: ["Performance", "Monitoring", "Documentation"],
  },
];

const experience = [
  {
    label: "Operations",
    title: "End-to-end workflow systems",
    description: "Automated intake, routing, approvals, notifications, and reporting so teams can focus on decisions—not data entry.",
    icon: Settings2,
  },
  {
    label: "Intelligence",
    title: "AI-assisted knowledge work",
    description: "Built systems that classify requests, extract structured data, draft responses, and surface the right context at the right time.",
    icon: Sparkles,
  },
  {
    label: "Infrastructure",
    title: "Reliable connected ecosystems",
    description: "Designed secure integrations across CRMs, forms, spreadsheets, databases, and communication platforms with clear fail-safes.",
    icon: Database,
  },
];

function Gear({ className }: { className: string }) {
  return (
    <div className={`gear ${className}`} aria-hidden="true">
      <Settings2 strokeWidth={1.1} />
    </div>
  );
}

function Blueprint() {
  return (
    <div className="blueprint" aria-label="Animated blueprint of a connected AI workflow">
      <div className="blueprint-coordinate top-left">A.01</div>
      <div className="blueprint-coordinate bottom-right">SYS / FLOW</div>
      <div className="blueprint-line line-one" />
      <div className="blueprint-line line-two" />
      <div className="blueprint-line line-three" />
      <div className="flow-node node-input">
        <Braces size={18} />
        <span>INPUT</span>
      </div>
      <div className="flow-node node-logic">
        <Bot size={20} />
        <span>AI LOGIC</span>
      </div>
      <div className="flow-node node-output">
        <Check size={18} />
        <span>OUTPUT</span>
      </div>
      <Gear className="gear-large" />
      <Gear className="gear-small" />
      <div className="signal signal-one" />
      <div className="signal signal-two" />
      <div className="blueprint-caption">
        <span>WORKFLOW STATUS</span>
        <strong><span className="status-dot" /> ACTIVE</strong>
      </div>
    </div>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <a href="#home" className="brand-mark" aria-label="Jason Azuela, home">
          JA<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a href="#contact" className="button button-small desktop-contact">Let's talk <ArrowRight size={15} /></a>
        <button className="icon-button mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}<ChevronRight size={18} /></a>)}
          </nav>
        )}
      </header>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow hero-enter"><span className="status-dot" /> Available for automation projects</div>
          <h1 className="hero-enter hero-delay-one">I turn repetitive work into <em>intelligent systems.</em></h1>
          <p className="hero-lede hero-enter hero-delay-two">I design and build AI-powered workflows that connect your tools, reduce manual work, and help your team operate with clarity.</p>
          <div className="hero-actions hero-enter hero-delay-three">
            <a href="#contact" className="button">Build your workflow <ArrowRight size={17} /></a>
            <a href="#experience" className="text-link">Explore my approach <ArrowDown size={16} /></a>
          </div>
          <div className="hero-proof hero-enter hero-delay-three">
            <div><Clock3 size={17} /><span><strong>Less busywork</strong>More time for decisions</span></div>
            <div><Code2 size={17} /><span><strong>Built to last</strong>Clear, reliable systems</span></div>
          </div>
        </div>
        <div className="hero-visual hero-enter hero-delay-two"><Blueprint /></div>
      </section>

      <section id="about" className="section about-section reveal">
        <div className="section-label"><span>01</span> About me</div>
        <div className="about-grid">
          <h2>Automation should make work feel <em>lighter</em>—not more complicated.</h2>
          <div className="about-copy">
            <p>I help businesses replace fragmented, repetitive processes with thoughtful automation. My work starts by understanding how your team actually operates, then designing a system that supports it.</p>
            <p>The result is practical AI: fewer handoffs, cleaner data, faster responses, and workflows your team can trust.</p>
            <div className="principle"><span>My principle</span><strong>Automate the routine. Elevate the human.</strong></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section reveal">
        <div className="section-heading">
          <div><div className="section-label"><span>02</span> Skills</div><h2>Systems built for real work.</h2></div>
          <p>From first workflow map to final handoff, I focus on the details that make automation useful, resilient, and easy to own.</p>
        </div>
        <div className="skill-grid">
          {skills.map(({ icon: Icon, ...skill }) => (
            <article className="skill-card" key={skill.title}>
              <div className="skill-top"><div className="skill-icon"><Icon size={22} /></div><span>{skill.number}</span></div>
              <h3>{skill.title}</h3><p>{skill.description}</p>
              <div className="tag-list">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section experience-section reveal">
        <div className="section-label"><span>03</span> Experience</div>
        <div className="experience-grid">
          <div className="experience-intro"><h2>Built around outcomes, not buzzwords.</h2><p>I create automation that solves the operational friction teams feel every day.</p></div>
          <div className="experience-list">
            {experience.map(({ icon: Icon, ...item }, index) => (
              <article className="experience-item" key={item.title}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-icon"><Icon size={20} /></div>
                <div><span>{item.label}</span><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section reveal">
        <div className="contact-copy">
          <div className="section-label light-label"><span>04</span> Contact</div>
          <h2>Have a process that should run <em>smarter?</em></h2>
          <p>Tell me where your team is losing time. I’ll help you find the clearest path to a better workflow.</p>
          <a className="contact-email" href="mailto:hello@jasonazuela.com"><Mail size={18} /> hello@jasonazuela.com</a>
        </div>
        <form className="contact-form" onSubmit={submitContact}>
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@company.com" /></label>
          <label>What would you like to automate?<textarea name="project" required rows={4} placeholder="A quick overview of the workflow or bottleneck..." /></label>
          <button className="button button-light" type="submit">Send inquiry <ArrowRight size={17} /></button>
          {sent && <p className="form-success" role="status"><Check size={17} /> Thanks—your inquiry is ready for review.</p>}
        </form>
      </section>

      <footer><a href="#home" className="brand-mark">JA<span>.</span></a><p>AI automation systems, thoughtfully built.</p><span>© 2026 Jason Azuela</span></footer>
    </main>
  );
}