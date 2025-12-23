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
    name: "TYPHLOSION",
    image: "/typhlosion.png",
    description:
      "The first pokemon I ever chose. I believe that raising a starter makes you attatched to a pokemon compared to others, and cyndaquil was an obvious pick for me. Eventhough many times I considered subbing him out for others, I love this little dude.",
  },
  {
    name: "SCEPTILE",
    image: "/sceptile.png",
    description:
      "FAST. Maxing out his speed and attack makes him a deadly sweeper, although he is one of very few grass types that I like.",
  },
  {
    name: "GARCHOMP",
    image: "/garchomp.png",
    description:
      "Dragon and Ground? Give me dragon claw and earthquake and he can take out the Elite 4 himself.",
  },
  {
    name: "GENGAR",
    image: "/gengar.png",
    description:
      "I don't have to explain... its Gengar. Max out his speed/special attack an it's free.",
  },
  {
    name: "SNORLAX",
    image: "/snorlax.png",
    description:
      "Old reliable. Most of the times he is used simply as a punching bag while I figure out what to do next. Snorlax + leftovers = infinite rounds.",
  },
  {
    name: "ZEKROM",
    image: "/zekrom.png",
    description:
      "The legendary anchor of the team. He is nowhere near a competitive pick, but look at him! Dude is a demon.",
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
  const [revealedPokemon, setRevealedPokemon] = useState<Set<string>>(new Set());
  const [introPhase, setIntroPhase] = useState<IntroPhase>("waiting");
  const [textVisible, setTextVisible] = useState(true);

  const handlePokemonClick = (pokemon: Pokemon) => {
    const isRevealed = revealedPokemon.has(pokemon.name);

    if (!isRevealed) {
      // Reveal the Pokemon
      setRevealedPokemon((prev) => new Set([...prev, pokemon.name]));
      setSelectedPokemon(pokemon);
    } else {
      // Toggle selection for already revealed Pokemon
      setSelectedPokemon(
        selectedPokemon?.name === pokemon.name ? null : pokemon
      );
    }
  };

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
          Who would be on my Pokémon team?
        </h1>

        {/* Pokemon grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 mb-8">
          {team.map((pokemon, index) => {
            const isRevealed = revealedPokemon.has(pokemon.name);
            const isSelected = selectedPokemon?.name === pokemon.name;

            return (
              <button
                key={pokemon.name}
                onClick={() => handlePokemonClick(pokemon)}
                className={`relative p-2 transition-transform duration-200 ${
                  isRevealed && isSelected
                    ? "scale-125 z-10"
                    : isRevealed
                    ? "hover:scale-110"
                    : "hover:scale-105"
                }`}
              >
                {isRevealed ? (
                  // Revealed Pokemon with pop-in animation
                  <div
                    className="animate-pop-in"
                    style={{
                      animationDelay: "0s",
                    }}
                  >
                    <div
                      className="animate-float"
                      style={{
                        animationDelay: `${index * 0.15}s`,
                      }}
                    >
                      <Image
                        src={pokemon.image}
                        alt={pokemon.name}
                        width={96}
                        height={96}
                        className="w-16 h-16 md:w-24 md:h-24 object-contain"
                        style={{ imageRendering: "pixelated" }}
                      />
                    </div>
                  </div>
                ) : (
                  // Pokeball with shake animation
                  <div
                    className="animate-shake"
                    style={{
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    <Image
                      src="/poke.png"
                      alt="Pokeball"
                      width={96}
                      height={96}
                      className="w-16 h-16 md:w-24 md:h-24 object-contain"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </div>
                )}
                {/* Name label - only shown when revealed */}
                <p
                  className={`text-white text-[10px] md:text-xs mt-1 text-center transition-opacity ${
                    isRevealed ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.8)" }}
                >
                  {pokemon.name}
                </p>
              </button>
            );
          })}
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
                Click a Pokeball to reveal...
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
