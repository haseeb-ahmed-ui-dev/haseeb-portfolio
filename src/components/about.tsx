const highlights = [
  "React.js & Next.js development",
  "TypeScript & modern JavaScript",
  "Tailwind CSS, HTML & CSS",
  "Responsive, reusable UI components",
  "REST API integration & data handling",
  "Git & GitHub collaboration",
  "UI/UX implementation, pixel-focused",
  "QA-minded approach to reliability",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-surface border-y border-border">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_1fr] gap-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-5">About Me</h2>
          <p className="text-muted leading-relaxed mb-4">
            I&apos;m a frontend developer focused on building fast,
            responsive, and user-friendly web applications using React.js,
            Next.js, TypeScript, JavaScript, and Tailwind CSS. I enjoy turning
            UI/UX designs into clean, reusable, and scalable interfaces that
            work smoothly across devices.
          </p>
          <p className="text-muted leading-relaxed">
            My background also spans QA testing, SEO, and project
            coordination — which gives me a strong eye for usability, edge
            cases, and overall product quality, not just the code itself.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 content-start">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 text-sm text-foreground bg-background border border-border rounded-lg px-3 py-2.5"
            >
              <svg
                className="w-4 h-4 text-accent shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
