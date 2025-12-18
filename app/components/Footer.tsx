export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4 md:py-6 flex flex-col-reverse md:flex-row items-center md:items-end justify-between gap-3 md:gap-0">
        {/* Left: Dense metadata - hidden on mobile, shown on desktop */}
        <div className="hidden md:block font-mono text-xs tracking-wide">
          MADE IN USA · DESIGNED IN COLOMBIA · SOFTWARE, FINANCE, ART, MUSIC, FOOD · EST. 2023 · ALL RIGHTS RESERVED
        </div>
        {/* Simplified metadata for mobile */}
        <div className="md:hidden font-mono text-[10px] tracking-wide text-center text-gray-600">
          EST. 2023 · ALL RIGHTS RESERVED
        </div>

        {/* Right: Social links */}
        <div className="flex gap-2 md:gap-3">
          <a
            href="https://x.com/danielmnuoz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-3 py-1.5 text-xs font-medium hover:opacity-80 transition-opacity"
          >
            TWITTER
          </a>
          <a
            href="https://www.linkedin.com/in/danielmnuoz/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-3 py-1.5 text-xs font-medium hover:opacity-80 transition-opacity"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:dmnuozl@gmail.com"
            className="bg-black text-white px-3 py-1.5 text-xs font-medium hover:opacity-80 transition-opacity"
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
