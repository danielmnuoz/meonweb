import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content area */}
      <main className="flex-1 px-8 py-32">
        <div className="max-w-3xl mx-auto">
          {/* Page Title Section */}
          <div className="mb-16">
            <h1 className="text-7xl font-serif font-bold mb-4">ABOUT</h1>
            <p className="text-xs font-mono text-gray-600">
              DESIGNER · DEVELOPER · CREATIVE
            </p>
          </div>

          {/* Portrait Photo */}
          <div className="mb-16">
            <Image
              src="/mohr.jpg"
              alt="Daniel Munoz-Lara"
              width={800}
              height={600}
              className="grayscale w-full"
            />
          </div>

          {/* Biography Section */}
          <div className="space-y-6 text-lg leading-relaxed mb-24">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur. Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>
          </div>

          {/* Resume Download Button */}
          <div>
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
            >
              DOWNLOAD RESUME ↓
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
