interface Degree {
  school: string;
  degree: string;
}

const degrees: Degree[] = [
  { school: "Virtual University", degree: "Master of Business Administration (MBA)" },
  { school: "Allama Iqbal Open University (AIOU)", degree: "Bachelor's Degree, B.Com" },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-surface border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-10">Education</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {degrees.map((d) => (
            <div
              key={d.school}
              className="rounded-xl border border-border bg-background p-5"
            >
              <h3 className="font-bold">{d.school}</h3>
              <p className="text-sm text-muted mt-1">{d.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
