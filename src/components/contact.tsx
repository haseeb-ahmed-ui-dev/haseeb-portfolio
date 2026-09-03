"use client";

import { useState } from "react";

const CONTACT_EMAIL = "ihaseebahmed7@gmail.com";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const { message } = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(message || "Thank you! Your message has been sent.");
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Hiring? Let&apos;s talk.
          </h2>
          <p className="text-muted leading-relaxed max-w-sm mb-8">
            Looking for a frontend developer for your team? Share a few
            details about the role and I&apos;ll get back to you — or reach
            out directly.
          </p>

          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-surface border border-border">
                ✉
              </span>
              {CONTACT_EMAIL}
            </a>
            <a
              href="tel:+923201236993"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-surface border border-border">
                ☎
              </span>
              0320-123-6993
            </a>
            <a
              href="https://www.linkedin.com/in/haseeb-ahmed-ui-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-surface border border-border">
                in
              </span>
              linkedin.com/in/haseeb-ahmed-ui-dev
            </a>
            <div className="flex items-center gap-3 text-foreground hover:text-accent">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-surface border border-border">
                ⚲
              </span>
              Lahore, Punjab, Pakistan
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Name</span>
            <input
              name="name"
              type="text"
              required
              className="bg-surface border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Work Email</span>
            <input
              name="email"
              type="email"
              required
              className="bg-surface border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Company</span>
            <input
              name="company"
              type="text"
              className="bg-surface border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">
              Phone{" "}
              <span className="text-muted font-normal">(optional)</span>
            </span>
            <input
              name="number"
              type="tel"
              className="bg-surface border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Role / Message</span>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell me about the role, team, and what you're looking for."
              className="bg-surface border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="self-start px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent text-white hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors mt-2"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sm font-medium text-emerald-600">
              {statusMessage}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600">
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
