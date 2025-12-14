import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content area */}
      <main className="flex-1 flex items-center justify-center px-8 py-24">
        <div className="relative max-w-[1200px] w-full">
          {/* Image container - slightly off-center */}
          <div className="relative ml-24">
            <Image
              src="/home.jpg"
              alt="Editorial photograph"
              width={800}
              height={600}
              className="grayscale"
              priority
            />
          </div>

          {/* Overlapping "MY PORTFOLIO" text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <h2 className="text-8xl md:text-9xl font-serif font-bold leading-none">
              MY
              <br />
              PORTFOLIO
            </h2>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
