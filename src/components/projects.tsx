interface Project {
  title: string;
  role: string;
  period?: string;
  tech: string[];
  description: string;
  bullets: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "Fillo Workforce",
    role: "SaaS Workforce Management Platform",
    period: "Aug 2025 — Present",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Query",
    ],
    description:
      "A live SaaS workforce management platform with a Company Portal and Candidate Portal. Involved from the beginning, contributing to UI development, feature implementation, bug fixing, and ongoing product improvements.",
    bullets: [
      "Designed and developed responsive interfaces using Next.js, React, TypeScript, and Tailwind CSS.",
      "Built scalable, reusable UI components with shadcn/ui and modern React patterns.",
      "Integrated REST APIs and worked with forms, tables, filters, dialogs, and validation.",
      "Identified and resolved UI/UX issues, functional bugs, and edge cases.",
    ],
    href: "https://www.filloworkforce.com/",
  },
  {
    title: "Al Madinah Quran Academy",
    role: "Freelance Project",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SEO", "Responsive Design"],
    description:
      "A complete responsive website developed and customized to the client's requirements, with a focus on UI/UX, performance, maintainability, and consistency.",
    bullets: [
      "Built a reusable, JSON-driven course template covering 21 course pages.",
      "Converted repeated page elements into reusable PHP components to keep code DRY.",
      "Optimized site structure, assets, CSS, and JavaScript for performance.",
      "Designed the logo, a custom educators section, and a fee structure page; improved on-page SEO.",
    ],
    href: "https://almadinaquranacademy.org/",
  },
  {
    title: "Cyberses",
    role: "Project Manager · Web Content Writing · SEO",
    tech: ["Project Management", "Content Writing", "SEO"],
    description:
      "Corporate cybersecurity & IT solutions website. Managed the full project as the link between client and developer, and wrote and refined the site's content.",
    bullets: [
      "Gathered requirements, feedback, and coordinated client communication end-to-end.",
      "Translated requirements into development tasks and coordinated delivery.",
      "Wrote and optimized content for clarity, keywords, and search visibility.",
      "Designed the company logo and managed hosting and final deployment.",
    ],
    href: "https://cyberses.co.uk/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-10">Projects</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-border p-6 md:p-8 hover:border-accent/40 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-accent font-medium">
                    {project.role}
                  </p>
                </div>
                {project.period && (
                  <span className="text-xs font-medium text-muted whitespace-nowrap">
                    {project.period}
                  </span>
                )}
              </div>

              <p className="text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-5">
                {project.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-sm text-muted leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent"
                  >
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-surface-2 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline whitespace-nowrap"
                >
                  Visit site
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
