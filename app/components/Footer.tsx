export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Khaled Mustafa. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/khaledmustafa91"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--foreground)] text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/khaledmustafa8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--foreground)] text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:khaled.mustafa1297@gmail.com"
            className="text-[var(--muted)] hover:text-[var(--foreground)] text-sm transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
