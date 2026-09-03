"use client";

export default function Hero() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[1.15fr_1fr] gap-12 items-center">
      <div>
        <p className="text-sm font-semibold text-accent mb-3">
          Frontend Developer
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
          Building fast, reliable
          <br />
          web apps with <span className="text-accent">React &amp; Next.js</span>
        </h1>
        <p className="text-muted text-base leading-relaxed max-w-lg mb-8">
          I&apos;m Haseeb Ahmed, a frontend developer based in Lahore, Pakistan,
          focused on turning UI/UX designs into clean, scalable interfaces using
          React, Next.js, TypeScript, and Tailwind CSS.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            onClick={scrollTo("projects")}
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={scrollTo("contact")}
            className="px-5 py-2.5 text-sm font-semibold rounded-lg border border-border hover:bg-surface transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-10 text-sm text-muted">
          <span>Lahore, Pakistan</span>
          <span className="hidden sm:inline">·</span>
          <span>Available for opportunities</span>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-[#0f172a] overflow-hidden shadow-xl ml-auto w-full max-w-sm">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <pre className="p-5 text-[13px] leading-relaxed font-mono text-slate-300 overflow-x-auto">
          <code>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-sky-300">developer</span> = {"{"}
            {"\n  "}
            <span className="text-emerald-300">name</span>:{" "}
            <span className="text-amber-300">&apos;Haseeb Ahmed&apos;</span>,
            {"\n  "}
            <span className="text-emerald-300">role</span>:{" "}
            <span className="text-amber-300">
              &apos;Frontend Developer&apos;
            </span>
            ,{"\n  "}
            <span className="text-emerald-300">stack</span>: [
            <span className="text-amber-300">&apos;React&apos;</span>,{" "}
            <span className="text-amber-300">&apos;Next.js&apos;</span>,{" "}
            <span className="text-amber-300">&apos;TypeScript&apos;</span>],
            {"\n  "}
            <span className="text-emerald-300">focus</span>:{" "}
            <span className="text-amber-300">
              &apos;fast, accessible UI&apos;
            </span>
            ,{"\n"}
            {"}"};
          </code>
        </pre>
      </div>
    </section>
  );
}
