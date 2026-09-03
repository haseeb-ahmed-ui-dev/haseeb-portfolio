interface Job {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    company: "iTitans",
    role: "Associate Software Engineer",
    period: "Jan 2025 — Feb 2026",
    location: "Lahore",
    bullets: [
      "Developed responsive and reusable frontend interfaces using React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS.",
      "Built reusable UI components and data-driven interfaces for real-world web applications.",
      "Integrated REST APIs and handled frontend data, forms, validation, loading, and error states.",
      "Implemented responsive layouts and UI designs with a focus on usability, consistency, and performance.",
      "Worked with Git and GitHub for version control, code collaboration, and pull requests.",
      "Debugged UI and integration issues, collaborating with the team to deliver features reliably.",
    ],
  },
  {
    company: "MostlyDigital",
    role: "Search Engine Optimization Executive",
    period: "Sep 2023 — Dec 2024",
    bullets: [
      "Executed on-page and content SEO strategies to improve search visibility for client websites.",
      "Worked closely with content and development to align SEO best practices with site structure.",
    ],
  },
  {
    company: "Civil Courts Lahore",
    role: "Office Coordinator (Government)",
    period: "Jan 2016 — Dec 2024",
    bullets: [
      "Managed administrative coordination and day-to-day office operations for 9 years.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-10">
          Experience
        </h2>

        <div className="space-y-10">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 border-l-2 border-accent/30 pl-6 relative"
            >
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />

              <div>
                <p className="text-sm font-semibold text-muted">
                  {job.period}
                </p>
                {job.location && (
                  <p className="text-sm text-muted">{job.location}</p>
                )}
              </div>

              <div>
                <h3 className="text-lg font-bold">{job.role}</h3>
                <p className="text-accent font-medium mb-3">{job.company}</p>
                <ul className="space-y-1.5">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-muted leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
