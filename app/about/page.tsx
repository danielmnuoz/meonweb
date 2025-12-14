import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-serif font-bold mb-8">About</h1>
          <p className="text-lg leading-relaxed text-gray-600">
            This page is a placeholder and will be populated in a future phase.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
