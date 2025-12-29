import Header from "../components/Header";
import Footer from "../components/Footer";

const projects = [
  {
    name: "PROJECT KIM",
    problem: "Measuring how live-stream moments escape their original platforms.",
    solution: "Built pipelines to compare engagement across short-form platforms.",
  },
  {
    name: "FINCH",
    problem: "Personal finance apps feel overwhelming and impersonal.",
    solution: "Designed a minimal expense tracker focused on weekly reflection.",
  },
  {
    name: "STATIC",
    problem: "Portfolio websites are often more complex than they need to be.",
    solution: "Built this site with Next.js, emphasizing restraint and clarity.",
  },
  {
    name: "WAVELENGTH",
    problem: "Discovering new music through algorithms feels passive.",
    solution: "Created a tool that surfaces music based on lyrical themes and moods.",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-4 md:px-8 pt-28 md:pt-36 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto animate-fade-in">
          {/* Page Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              PROJECTS
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Selected work. Some finished, some in progress, all excited to share to y&apos;all.
            </p>
          </div>

          {/* Project List */}
          <div className="space-y-10 md:space-y-12">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: "forwards" }}
              >
                <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-600 mb-1">
                  {project.problem}
                </p>
                <p className="text-gray-800 mb-3">
                  {project.solution}
                </p>
                <a
                  href="https://github.com/danielmnuoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium transition-colors"
                >
                  [details]
                </a>
              </article>
            ))}
          </div>

          {/* Footer Note */}
          <p className="mt-16 md:mt-20 text-sm text-gray-500 font-mono">
            More experiments coming soon... stay tuned!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
