import Header from "../components/Header";
import Footer from "../components/Footer";
import { dummyThoughts } from "./data";
import { formatDateShort } from "./utils";

export default function Thoughts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-4 md:px-8 pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-[800px] mx-auto">
          {/* Tabs */}
          <div className="flex items-center gap-8 mb-8 border-b border-neutral-200 pb-4">
            <button className="flex items-center gap-2 border-l-2 border-black pl-4 font-medium">
              Latest
            </button>
            <button className="flex items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </button>
          </div>

          {/* Thoughts feed */}
          <div className="divide-y divide-neutral-200">
            {dummyThoughts.map((thought) => (
              <article
                key={thought.id}
                className="flex gap-8 py-10 first:pt-4"
              >
                {/* Date column */}
                <time className="text-sm text-neutral-400 w-28 flex-shrink-0 pt-1">
                  {formatDateShort(thought.created_at)}
                </time>

                {/* Content column */}
                <div className="flex-1 min-w-0">
                  <p className="text-lg md:text-xl leading-relaxed text-neutral-900">
                    {thought.content}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
