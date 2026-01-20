import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content area */}
      <main className="flex-1 px-8 pt-32">
        <div className="max-w-3xl mx-auto">
          {/* Page Title Section */}
          <div className="mb-16">
            <h1 className="text-7xl font-serif font-bold mb-4">ABOUT</h1>
          </div>

          {/* Portrait Photo */}
          <div className="mb-16">
            <Image
              src="/icarus.jpg"
              alt="Daniel Munoz-Lara"
              width={800}
              height={600}
              className="grayscale w-full"
            />
          </div>

          {/* Biography Section */}
          <div className="space-y-6 text-lg leading-relaxed mb-24">
            <p>
              Hi, my name is Daniel Munoz-Lara—though I assume you may already know that unless you randomly landed on this page by typing in danielmunoz.com/about and missed the giant header with my name on it.
              Regardless, this is my portfolio website, and on this page I’ll go over some things you may or may not know about me.
            </p>
            <p>
              To start, I studied Computer Science at Clemson University. Both my parents and my sister were born in Colombia, and although I was born in the United States, I grew up speaking Spanish and carry Colombia—and the rest of my family there—close to my heart. At my core, I’m someone who enjoys creating and staying curious about how the world works, both technically and culturally. Lately, my hobbies have been more focused on creation, from woodworking to cooking, but professionally, I work in the creation of software.
            </p>
            <p>
              As an engineer, I have a growing interest in how complex systems are built, maintained, and kept reliable at scale. Over the past couple of years, I’ve enjoyed designing and delivering new features for customers, and I’ve worked on breaking a monolithic application into a microservice architecture. This meant taking real ownership of individual services—not just the code, but also how they’re deployed, monitored, and kept online. To me, this experience is highly valuable in understanding software as more than just code, especially in this age of artificial intelligence, where people often overlook the infrastructure and systems that support these applications.
            </p>
            <p>
              Outside of tech, I enjoy various sports, traveling, and pulling
              inspiration from people and fields far outside engineering. I’m also
              deeply interested in the financial systems that shape our world — analyzing
              companies, markets, and broader economic health as interconnected systems
              rather than just vehicles for returns. In an effort to boost this knowledge, I am currently studying for the Series 65 exam to call myself a licensed Investment Advisor.
              I care about making complex systems more understandable and accessible to those who don’t always have the tools or
              financial literacy readily available. I’m drawn to work that blends technical
              problem-solving with curiosity about culture, incentives, and how people
              interact with the world. For example, recently my interest has revolved around
              differences in the design of buildings, furniture, or everyday items that reflects a cultural perspective,
              or even how the languages we learn can change the way we think and perceive the world. 
            </p>
            <p>
              If you’re interested in what I’m working on or want to talk about software, finances, or anything I mentioned above, feel free to reach out. 
            </p>
          </div>

          {/* Resume Download Button */}
          {/* <div>
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
            >
              DOWNLOAD RESUME ↓
            </a>
          </div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
