export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-5xl mx-auto px-6 h-16 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted">
        <span>© {new Date().getFullYear()} Haseeb Ahmed.</span>
        <a
          href="https://www.linkedin.com/in/haseeb-ahmed-ui-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          linkedin.com/in/haseeb-ahmed-ui-dev
        </a>
      </div>
    </footer>
  );
}
