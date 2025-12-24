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
              DESIGNER · DEVELOPER · CREATOR
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
            <p>Include mentions of clemson university maybe, spanish bilingula, Series 65, how would I get resume, button? </p>
            <p>
              I’m Daniel. I’m a software engineer with a computer science background,
              but at my core I’m someone who enjoys creating and staying curious
              about how the world works — both technically and culturally. I work
              professionally in software, and I spend a lot of my free time experimenting
              with ideas and questions that catch my curiosity. 
            </p>
            <p>
              As an engineer, I have a growing interest on how complex systems are built,
              maintained, and kept reliable at scale. Over the past couple of years, I have
              enjoyed designing and delivering new features for customers and have worked
              on breaking out a monolithic application toward a microservice architecture.
              This meant taking real ownership over individual services — not just the code,
              but how they’re deployed, monitored, and kept online.
            </p>
            <p>
              Outside of tech, I enjoy learning languages, traveling, and pulling
              inspiration from people and fields far outside engineering. I’m also
              deeply interested in the financial systems that shape our world — analyzing
              companies, markets, and broader economic health as interconnected systems
              rather than just vehicles for returns. I’m drawn to work that blends technical
              problem-solving with curiosity about culture, incentives, and how people
              interact with the world. I care about making complex systems more
              understandable and accessible to those who don’t always have the tools or
              financial literacy readily available.
            </p>
            <p>
              If you’re interested in what I’m working on or want to talk about software,
              data, or ideas in progress, feel free to reach out.
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
