"use client";

import { useState } from "react";

const links = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <span className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center text-sm font-bold tracking-tight">
            HA
          </span>
          <span className="font-semibold tracking-tight">Haseeb Ahmed</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted">
            {links.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={scrollTo(id)}
                  className="hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/Haseeb Ahmed_Resume.pdf"
            download
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4 bg-background">
          {links.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={scrollTo(id)}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-accent text-white text-center hover:bg-accent/90 transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
