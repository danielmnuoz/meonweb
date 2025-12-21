import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 md:gap-0">
        {/* Left: Name */}
        <Link href="/" className="flex items-baseline gap-2 hover:opacity-60 transition-opacity">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
            DANIEL MUNOZ-LARA
          </h1>
          <span className="text-xs md:text-sm text-gray-600 whitespace-nowrap">but on the web.</span>
        </Link>

        {/* Right: Navigation */}
        <nav className="flex gap-4 md:gap-8">
          <Link
            href="/about"
            className="text-sm md:text-lg font-medium hover:opacity-60 transition-opacity"
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            className="text-sm md:text-lg font-medium hover:opacity-60 transition-opacity"
          >
            PROJECTS
          </Link>
          <Link
            href="/thoughts"
            className="text-sm md:text-lg font-medium hover:opacity-60 transition-opacity"
          >
            THOUGHTS
          </Link>
        </nav>
      </div>
    </header>
  );
}
