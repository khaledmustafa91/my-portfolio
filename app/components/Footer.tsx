export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-[#1f1f1f] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Khaled Mustafa. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/khaledmustafa91"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/khaledmustafa8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:khaled.mustafa1297@gmail.com"
            className="text-gray-600 hover:text-white text-sm transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
