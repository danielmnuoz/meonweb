import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />

      {/* Main content area - padded for fixed header */}
      <main className="flex-1 flex items-center justify-center px-4 md:px-8 pt-28 md:pt-32">
        <div className="relative max-w-[1200px] w-full">
          {/* Image container - slightly off-center on desktop */}
          <div className="relative ml-0 md:ml-24">
            <Image
              src="/medellin.jpg"
              alt="Editorial photograph"
              width={800}
              height={600}
              className="grayscale max-w-full md:max-w-none md:w-[800px]"
              priority
            />
          </div>

          {/* Handwritten "Mi PAIS" overlay - positioned on left side */}
          <div className="absolute top-4 md:top-1/2 left-2 md:-left-12 -translate-y-1/2 translate-x-0 md:-translate-x-0">
            <Image
              src="/mi paiz !.png"
              alt="Mi PAIS"
              width={500}
              height={250}
              className="pointer-events-none w-[250px] md:w-[500px] h-auto"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
