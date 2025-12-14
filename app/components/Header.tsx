import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-[1600px] mx-auto px-8 py-6 flex items-baseline justify-between">
        {/* Left: Name */}
        <div className="flex items-baseline gap-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            DANIEL MUNOZ-LARA
          </h1>
          <span className="text-sm text-gray-600">but on the web.</span>
        </div>

        {/* Right: Navigation */}
        <nav className="flex gap-8">
          <Link
            href="/about"
            className="text-lg font-medium hover:opacity-60 transition-opacity"
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            className="text-lg font-medium hover:opacity-60 transition-opacity"
          >
            PROJECTS
          </Link>
          <Link
            href="/thoughts"
            className="text-lg font-medium hover:opacity-60 transition-opacity"
          >
            THOUGHTS
          </Link>
        </nav>
      </div>
    </header>
  );
}
