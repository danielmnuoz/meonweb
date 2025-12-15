export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background">
      <div className="max-w-[1600px] mx-auto px-8 py-6 flex items-end justify-between">
        {/* Left: Dense metadata */}
        <div className="font-mono text-xs tracking-wide">
          MADE IN USA · DESIGNED IN COLOMBIA · SOFTWARE, FINANCE, ART, MUSIC · EST. 2023 · ALL RIGHTS RESERVED
        </div>

        {/* Right: Social links */}
        <div className="flex gap-3">
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
