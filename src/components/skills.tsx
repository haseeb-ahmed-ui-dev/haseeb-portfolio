interface Group {
  title: string;
  skills: string[];
}

const groups: Group[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "shadcn/ui", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Data & APIs",
    skills: ["REST API Integration", "React Query", "Forms & Validation"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "QA / Testing Mindset"],
  },
  {
    title: "Beyond Code",
    skills: ["SEO", "Project Management", "Content Writing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-background border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
