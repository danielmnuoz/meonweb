"use client";

import { useState, useMemo, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { dummyThoughts } from "./data";
import { formatDate, formatDateShort } from "./utils";
import { Thought } from "./types";

type Tab = "latest" | "search";

export default function Thoughts() {
  const [activeTab, setActiveTab] = useState<Tab>("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch thoughts from database on mount
  useEffect(() => {
    async function fetchThoughts() {
      try {
        const response = await fetch("/api/thoughts");
        if (response.ok) {
          const data = await response.json();
          setThoughts(data);
        } else {
          console.error("Failed to fetch thoughts");
          // Fallback to dummy data if API fails
          setThoughts(dummyThoughts);
        }
      } catch (error) {
        console.error("Error fetching thoughts:", error);
        // Fallback to dummy data if API fails
        setThoughts(dummyThoughts);
      } finally {
        setLoading(false);
      }
    }
    fetchThoughts();
  }, []);

  // Thoughts are already sorted by created_at DESC from the API
  const allThoughts = thoughts;

  const filteredThoughts = useMemo(() => {
    if (activeTab === "latest" || !searchQuery.trim()) {
      return allThoughts;
    }
    const query = searchQuery.toLowerCase();
    return allThoughts.filter((thought) => {
      const contentMatch = thought.content.toLowerCase().includes(query);
      const dateMatch = formatDate(thought.created_at).toLowerCase().includes(query);
      return contentMatch || dateMatch;
    });
  }, [activeTab, searchQuery, allThoughts]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-4 md:px-8 pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-[800px] mx-auto animate-fade-in">
          {/* Tabs */}
          <div className="flex items-center gap-8 mb-8 border-b border-neutral-200 pb-4">
            <button
              onClick={() => setActiveTab("latest")}
              className={`flex items-center gap-2 pl-4 font-medium transition-colors ${
                activeTab === "latest"
                  ? "border-l-2 border-black text-black"
                  : "border-l-2 border-transparent text-neutral-400 hover:text-neutral-600"
              }`}
            >
              Latest
            </button>
            <button
              onClick={() => setActiveTab("search")}
              className={`flex items-center gap-2 transition-colors ${
                activeTab === "search"
                  ? "text-black"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
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

          {/* Search input */}
          {activeTab === "search" && (
            <div className="mb-8">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search thoughts..."
                autoFocus
                className="w-full px-0 py-3 text-xl border-b-2 border-black bg-transparent placeholder:text-neutral-400 focus:outline-none"
              />
              {searchQuery.trim() && (
                <p className="mt-3 text-sm text-neutral-500">
                  {filteredThoughts.length === 0
                    ? "No results found"
                    : `${filteredThoughts.length} result${filteredThoughts.length === 1 ? "" : "s"}`}
                </p>
              )}
            </div>
          )}

          {/* Thoughts feed */}
          {loading ? (
            <div className="py-16 text-center">
              <p className="text-neutral-400 text-lg">Loading thoughts...</p>
            </div>
          ) : filteredThoughts.length > 0 ? (
            <div className="divide-y divide-neutral-200">
              {filteredThoughts.map((thought) => (
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
          ) : (
            activeTab === "search" &&
            searchQuery.trim() && (
              <div className="py-16 text-center">
                <p className="text-neutral-400 text-lg">
                  No thoughts match your search.
                </p>
              </div>
            )
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
