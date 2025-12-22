"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const pokemonFont = localFont({
  src: "../fonts/Pokemon Classic.ttf",
  variable: "--font-pokemon",
});

interface Pokemon {
  name: string;
  image: string;
  description: string;
}

const team: Pokemon[] = [
  {
    name: "SCEPTILE",
    image: "/sceptile.png",
    description:
      "The first Pokemon I ever chose. Sceptile represents the beginning of my journey, and its speed and elegance have always resonated with me. A true starter for life.",
  },
  {
    name: "UMBREON",
    image: "/umbreon.png",
    description:
      "There's something about Umbreon's quiet strength that I admire. A Pokemon that thrives in darkness, patient and resilient. The perfect partner for late nights.",
  },
  {
    name: "GARCHOMP",
    image: "/garchomp.png",
    description:
      "Raw power meets precision. Garchomp doesn't hesitate, doesn't second-guess. When you need something done, you call on Garchomp.",
  },
  {
    name: "CHANDELURE",
    image: "/chandelure.png",
    description:
      "Hauntingly beautiful and devastatingly powerful. Chandelure brings an elegance to battle that few Pokemon can match. Style and substance.",
  },
  {
    name: "SNORLAX",
    image: "/snorlax.png",
    description:
      "Sometimes you need a wall. Sometimes you need a friend who understands the value of a good nap. Snorlax is both. An immovable force of comfort.",
  },
  {
    name: "ZEKROM",
    image: "/zekrom.png",
    description:
      "The legendary anchor of the team. Zekrom represents ideals and the pursuit of truth. When everything is on the line, Zekrom answers the call.",
  },
];

function TypewriterText({ text, isActive }: { text: string; isActive: boolean }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setDisplayedText("");
      setCurrentIndex(0);
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [isActive, currentIndex, text]);

  if (!isActive) return null;

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

type IntroPhase = "waiting" | "ready" | "opening" | "done";

export default function Team() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [introPhase, setIntroPhase] = useState<IntroPhase>("waiting");
  const [textVisible, setTextVisible] = useState(true);

  // Wait 2 seconds before showing "TOUCH TO START"
  useEffect(() => {
    if (introPhase === "waiting") {
      const timeout = setTimeout(() => {
        setIntroPhase("ready");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [introPhase]);

  // Blink the text every second when ready
  useEffect(() => {
    if (introPhase === "ready") {
      const interval = setInterval(() => {
        setTextVisible((prev) => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [introPhase]);

  // Handle click to start the opening animation
  const handleStart = () => {
    if (introPhase === "ready") {
      setIntroPhase("opening");
      // After animation completes (1s), mark as done
      setTimeout(() => {
        setIntroPhase("done");
      }, 1000);
    }
  };

  return (
    <div
      className={`min-h-screen bg-repeat flex flex-col ${pokemonFont.className}`}
      style={{
        backgroundImage: "url('/pixelgrass.png')",
        imageRendering: "pixelated",
      }}
    >
      {/* Intro overlay */}
      {introPhase !== "done" && (
        <div
          className="fixed inset-0 z-[100] cursor-pointer"
          onClick={handleStart}
        >
          {/* Top half */}
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-black transition-transform duration-1000 ease-in-out"
            style={{
              transform: introPhase === "opening" ? "translateY(-100%)" : "translateY(0)",
            }}
          />
          {/* Bottom half */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-black transition-transform duration-1000 ease-in-out"
            style={{
              transform: introPhase === "opening" ? "translateY(100%)" : "translateY(0)",
            }}
          />
          {/* TOUCH TO START text */}
          {introPhase === "ready" && textVisible && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <p
                className="text-white text-3xl md:text-5xl tracking-widest text-center"
                style={{
                  textShadow: "4px 4px 0px rgba(0,0,0,0.8)",
                }}
              >
                TOUCH TO START
              </p>
            </div>
          )}
        </div>
      )}

      {/* Back button */}
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 bg-black border-4 border-white px-4 py-2 text-white text-sm hover:bg-gray-900 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
        style={{ imageRendering: "pixelated" }}
      >
        ← ESC
      </Link>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        {/* Title */}
        <h1
          className="text-white text-2xl md:text-4xl mb-12 text-center tracking-widest"
          style={{
            textShadow: "4px 4px 0px rgba(0,0,0,0.8)",
          }}
        >
          MY TEAM
        </h1>

        {/* Pokemon grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 mb-8">
          {team.map((pokemon) => (
            <button
              key={pokemon.name}
              onClick={() =>
                setSelectedPokemon(
                  selectedPokemon?.name === pokemon.name ? null : pokemon
                )
              }
              onMouseEnter={() => setSelectedPokemon(pokemon)}
              className={`relative p-2 transition-all duration-200 ${
                selectedPokemon?.name === pokemon.name
                  ? "scale-110 -translate-y-2"
                  : "hover:scale-105"
              }`}
            >
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={96}
                height={96}
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
                style={{ imageRendering: "pixelated" }}
              />
              {/* Name label */}
              <p
                className="text-white text-[10px] md:text-xs mt-1 text-center"
                style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.8)" }}
              >
                {pokemon.name}
              </p>
            </button>
          ))}
        </div>

        {/* Dialogue box */}
        <div
          className="w-full max-w-2xl border-4 border-black p-4 md:p-6 min-h-[120px]"
          style={{
            backgroundColor: "#F8F8F8",
            boxShadow: "8px 8px 0px 0px rgba(0,0,0,0.8)",
          }}
        >
          <p className="text-sm md:text-base leading-relaxed text-black">
            {selectedPokemon ? (
              <TypewriterText
                text={selectedPokemon.description}
                isActive={!!selectedPokemon}
                key={selectedPokemon.name}
              />
            ) : (
              <span className="text-gray-400">
                Select a Pokemon to learn more...
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
