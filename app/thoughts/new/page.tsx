"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NewThought() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [token, setToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/thoughts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create thought");
      }

      // Thought is now saved in the database
      await response.json();

      // Redirect to thoughts page (it will fetch from database)
      router.push("/thoughts");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-4 md:px-8 pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-[600px] mx-auto">
          <h1 className="text-2xl font-medium mb-8">New Thought</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Token input */}
            <div>
              <label
                htmlFor="token"
                className="block text-sm text-neutral-500 mb-2"
              >
                Secret Token
              </label>
              <input
                id="token"
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter your secret token"
                required
                className="w-full px-4 py-3 border border-neutral-300 bg-white focus:border-black focus:outline-none transition-colors"
              />
            </div>

            {/* Content textarea */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm text-neutral-500 mb-2"
              >
                Thought
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind?"
                required
                rows={6}
                className="w-full px-4 py-3 border border-neutral-300 bg-white focus:border-black focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Error message */}
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            {/* Submit button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting || !content.trim() || !token}
                className="bg-black text-white px-6 py-3 font-medium hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Posting..." : "Post Thought"}
              </button>
              <button
                type="button"
                onClick={() => router.push("/thoughts")}
                className="px-6 py-3 font-medium text-neutral-500 hover:text-black transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
