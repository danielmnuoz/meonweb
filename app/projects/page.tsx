"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const projects = [
  {
    id: "001",
    name: "PROJECT KIM",
    sector: "DATA",
    problem: "Measuring how live-stream moments escape their original platforms.",
    solution: "Built pipelines to compare engagement across short-form platforms.",
  },
  {
    id: "002",
    name: "PARIS TOMORROW",
    sector: "PRODUCT",
    problem: "Travel planning tools make it hard to quickly plan a trip and its activities by location, time, and budget.",
    solution: "Built an itinerary planner that groups places by area, organizes days intelligently, and estimates transport and spending in one flow.",
  },
  {
    id: "003",
    name: "PORTFOLIO WEBSITE",
    sector: "WEB",
    problem: "Portfolio websites are often more complex than they need to be.",
    solution: "Built this site with Next.js, emphasizing restraint and clarity.",
  },
  {
    id: "004",
    name: "WAVELENGTH",
    sector: "PRODUCT",
    problem: "Discovering new music through algorithms feels passive.",
    solution: "Created a tool that surfaces music based on lyrical themes and moods.",
  },
];

export default function Projects() {
  const [linesDrawn, setLinesDrawn] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const lineTimer = setTimeout(() => setLinesDrawn(true), 100);
    const contentTimer = setTimeout(() => setShowContent(true), 1200);

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <Header />

      {/* Animated Construction Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        {/* Horizontal lines */}
        <line
          x1="0" y1="8%" x2="100%" y2="8%"
          stroke="#e0e0e0"
          strokeWidth="1"
          style={{
            strokeDasharray: '3000',
            strokeDashoffset: linesDrawn ? '0' : '3000',
            transition: 'stroke-dashoffset 2.2s ease-out'
          }}
        />
        <line
          x1="0" y1="22%" x2="100%" y2="22%"
          stroke="#e8e8e8"
          strokeWidth="1"
          style={{
            strokeDasharray: '3000',
            strokeDashoffset: linesDrawn ? '0' : '3000',
            transition: 'stroke-dashoffset 2.5s ease-out 0.08s'
          }}
        />
        <line
          x1="0" y1="38%" x2="100%" y2="38%"
          stroke="#e0e0e0"
          strokeWidth="1"
          style={{
            strokeDasharray: '3000',
            strokeDashoffset: linesDrawn ? '0' : '3000',
            transition: 'stroke-dashoffset 2.3s ease-out 0.15s'
          }}
        />
        <line
          x1="0" y1="55%" x2="100%" y2="55%"
          stroke="#e8e8e8"
          strokeWidth="1"
          style={{
            strokeDasharray: '3000',
            strokeDashoffset: linesDrawn ? '0' : '3000',
            transition: 'stroke-dashoffset 2.6s ease-out 0.1s'
          }}
        />
        <line
          x1="0" y1="72%" x2="100%" y2="72%"
          stroke="#e0e0e0"
          strokeWidth="1"
          style={{
            strokeDasharray: '3000',
            strokeDashoffset: linesDrawn ? '0' : '3000',
            transition: 'stroke-dashoffset 2.4s ease-out 0.2s'
          }}
        />
        <line
          x1="0" y1="88%" x2="100%" y2="88%"
          stroke="#e8e8e8"
          strokeWidth="1"
          style={{
            strokeDasharray: '3000',
            strokeDashoffset: linesDrawn ? '0' : '3000',
            transition: 'stroke-dashoffset 2.1s ease-out 0.25s'
          }}
        />

        {/* Vertical lines */}
        <line
          x1="6%" y1="0" x2="6%" y2="100%"
          stroke="#e0e0e0"
          strokeWidth="1"
          style={{
            strokeDasharray: '3000',
            strokeDashoffset: linesDrawn ? '0' : '3000',
            transition: 'stroke-dashoffset 2.5s ease-out 0.05s'
          }}
        />
        <line
          x1="25%" y1="0" x2="25%" y2="100%"
          stroke="#e8e8e8"
          strokeWidth="1"
          style={{
            strokeDasharray: '3000',
            strokeDashoffset: linesDrawn ? '0' : '3000',
            transition: 'stroke-dashoffset 2.3s ease-out 0.12s'
          }}
        />
        <line
          x1="50%" y1="0" x2="50%" y2="100%"
          stroke="#ebebeb"
          strokeWidth="1"
          style={{
            strokeDasharray: '3000',
            strokeDashoffset: linesDrawn ? '0' : '3000',
            transition: 'stroke-dashoffset 2.4s ease-out 0.18s'
          }}
        />
        <line
          x1="75%" y1="0" x2="75%" y2="100%"
          stroke="#e8e8e8"
          strokeWidth="1"
          style={{
            strokeDasharray: '3000',
            strokeDashoffset: linesDrawn ? '0' : '3000',
            transition: 'stroke-dashoffset 2.2s ease-out 0.1s'
          }}
        />
        <line
          x1="94%" y1="0" x2="94%" y2="100%"
          stroke="#e0e0e0"
          strokeWidth="1"
          style={{
            strokeDasharray: '3000',
            strokeDashoffset: linesDrawn ? '0' : '3000',
            transition: 'stroke-dashoffset 2.6s ease-out 0.15s'
          }}
        />

        {/* Diagonal line 1: top-left, hits circle, bounces down-right */}
        <line
          x1="0" y1="3%" x2="12%" y2="18%"
          stroke="#d8d8d8"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.6s ease-out 0.4s'
          }}
        />
        <circle
          cx="12%" cy="18%"
          r="5"
          fill="none"
          stroke="#d0d0d0"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 1 : 0,
            transition: 'opacity 0.4s ease-out 1.6s'
          }}
        />
        <line
          x1="12%" y1="18%" x2="28%" y2="42%"
          stroke="#d8d8d8"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.5s ease-out 1.8s'
          }}
        />

        {/* Diagonal line 2: top-right area */}
        <line
          x1="100%" y1="12%" x2="85%" y2="28%"
          stroke="#d8d8d8"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.5s ease-out 0.6s'
          }}
        />
        <circle
          cx="85%" cy="28%"
          r="4"
          fill="none"
          stroke="#d0d0d0"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 1 : 0,
            transition: 'opacity 0.4s ease-out 1.7s'
          }}
        />
        <line
          x1="85%" y1="28%" x2="70%" y2="48%"
          stroke="#d8d8d8"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.4s ease-out 1.9s'
          }}
        />

        {/* Diagonal line 3: mid-left */}
        <line
          x1="0" y1="45%" x2="18%" y2="58%"
          stroke="#d8d8d8"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.4s ease-out 0.7s'
          }}
        />
        <circle
          cx="18%" cy="58%"
          r="5"
          fill="none"
          stroke="#d0d0d0"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 1 : 0,
            transition: 'opacity 0.4s ease-out 1.8s'
          }}
        />
        <line
          x1="18%" y1="58%" x2="32%" y2="75%"
          stroke="#d8d8d8"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.3s ease-out 2.0s'
          }}
        />

        {/* Diagonal line 4: mid-right */}
        <line
          x1="100%" y1="52%" x2="82%" y2="65%"
          stroke="#e0e0e0"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.5s ease-out 0.8s'
          }}
        />
        <circle
          cx="82%" cy="65%"
          r="4"
          fill="none"
          stroke="#d0d0d0"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 1 : 0,
            transition: 'opacity 0.4s ease-out 1.9s'
          }}
        />
        <line
          x1="82%" y1="65%" x2="68%" y2="82%"
          stroke="#e0e0e0"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.3s ease-out 2.1s'
          }}
        />

        {/* Diagonal line 5: bottom-left */}
        <line
          x1="0" y1="75%" x2="15%" y2="88%"
          stroke="#d8d8d8"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.4s ease-out 0.9s'
          }}
        />
        <circle
          cx="15%" cy="88%"
          r="4"
          fill="none"
          stroke="#d0d0d0"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 1 : 0,
            transition: 'opacity 0.4s ease-out 2.0s'
          }}
        />
        <line
          x1="15%" y1="88%" x2="35%" y2="98%"
          stroke="#d8d8d8"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.2s ease-out 2.2s'
          }}
        />

        {/* Diagonal line 6: bottom-right */}
        <line
          x1="100%" y1="78%" x2="88%" y2="90%"
          stroke="#e0e0e0"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.3s ease-out 1.0s'
          }}
        />
        <circle
          cx="88%" cy="90%"
          r="5"
          fill="none"
          stroke="#d0d0d0"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 1 : 0,
            transition: 'opacity 0.4s ease-out 2.1s'
          }}
        />
        <line
          x1="88%" y1="90%" x2="72%" y2="100%"
          stroke="#e0e0e0"
          strokeWidth="1"
          style={{
            strokeDasharray: '500',
            strokeDashoffset: linesDrawn ? '0' : '500',
            transition: 'stroke-dashoffset 1.2s ease-out 2.3s'
          }}
        />

        {/* Additional standalone circles at intersections */}
        <circle
          cx="25%" cy="22%"
          r="3"
          fill="none"
          stroke="#d4d4d4"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 0.7 : 0,
            transition: 'opacity 0.5s ease-out 1.8s'
          }}
        />
        <circle
          cx="50%" cy="38%"
          r="3"
          fill="none"
          stroke="#d4d4d4"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 0.7 : 0,
            transition: 'opacity 0.5s ease-out 1.9s'
          }}
        />
        <circle
          cx="75%" cy="55%"
          r="3"
          fill="none"
          stroke="#d4d4d4"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 0.7 : 0,
            transition: 'opacity 0.5s ease-out 2.0s'
          }}
        />
        <circle
          cx="6%" cy="72%"
          r="3"
          fill="none"
          stroke="#d4d4d4"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 0.7 : 0,
            transition: 'opacity 0.5s ease-out 2.1s'
          }}
        />
        <circle
          cx="94%" cy="38%"
          r="3"
          fill="none"
          stroke="#d4d4d4"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 0.7 : 0,
            transition: 'opacity 0.5s ease-out 2.0s'
          }}
        />
        <circle
          cx="50%" cy="72%"
          r="3"
          fill="none"
          stroke="#d4d4d4"
          strokeWidth="1"
          style={{
            opacity: linesDrawn ? 0.7 : 0,
            transition: 'opacity 0.5s ease-out 2.2s'
          }}
        />
      </svg>

      {/* Corner Reference Marks */}
      <div className={`absolute top-4 left-4 transition-opacity duration-500 ${linesDrawn ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
        <div className="w-5 h-5 border-l border-t border-gray-300" />
        <span className="text-[9px] font-mono text-gray-400 ml-1">A1</span>
      </div>
      <div className={`absolute top-4 right-4 transition-opacity duration-500 ${linesDrawn ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
        <div className="w-5 h-5 border-r border-t border-gray-300 ml-auto" />
        <span className="text-[9px] font-mono text-gray-400 text-right block">A4</span>
      </div>
      <div className={`absolute bottom-4 left-4 transition-opacity duration-500 ${linesDrawn ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
        <span className="text-[9px] font-mono text-gray-400 ml-1">D1</span>
        <div className="w-5 h-5 border-l border-b border-gray-300" />
      </div>
      <div className={`absolute bottom-4 right-4 transition-opacity duration-500 ${linesDrawn ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.7s' }}>
        <span className="text-[9px] font-mono text-gray-400 text-right block">D4</span>
        <div className="w-5 h-5 border-r border-b border-gray-300 ml-auto" />
      </div>

      <main className="flex-1 px-4 md:px-8 pt-28 md:pt-36 pb-12 md:pb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className={`mb-12 md:mb-16 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="flex items-baseline gap-4 mb-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                PROJECTS
              </h1>
              <span className="text-xs font-mono text-gray-400 hidden sm:inline">REV. 2024.01</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gray-300 hidden sm:block" />
              <p className="text-base md:text-lg text-gray-600">
                Selected work. Some finished, some in progress.
              </p>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`relative bg-white border border-gray-200 p-5 md:p-6 transition-all duration-500 hover:shadow-lg hover:border-gray-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                {/* Corner fold detail */}
                <div className="absolute top-0 right-0 w-5 h-5 border-l border-b border-gray-100 bg-background" />

                {/* Project ID badge */}
                <div className="absolute -top-2.5 -left-2.5 w-7 h-7 bg-black text-white flex items-center justify-center text-[10px] font-mono">
                  {project.id}
                </div>

                {/* Sector tag */}
                <div className="mb-3 pt-1">
                  <span className="text-[10px] font-mono text-gray-400 border border-gray-200 px-2 py-0.5">
                    {project.sector}
                  </span>
                </div>

                <h2 className="text-lg md:text-xl font-bold tracking-tight mb-3">
                  {project.name}
                </h2>

                <div className="space-y-2 text-sm">
                  <p className="text-gray-500">{project.problem}</p>
                  <p className="text-gray-800">{project.solution}</p>
                </div>

                {/* Bottom annotation */}
                <div className="mt-5 pt-4 border-t border-dashed border-gray-200 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-gray-400">
                    DWG-{project.id}-REV.A
                  </span>
                  <a
                    href="https://github.com/danielmnuoz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono hover:underline"
                  >
                    [GITHUB]
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Footer revision note */}
          <div className={`mt-12 md:mt-16 border-t border-gray-200 pt-4 transition-all duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono text-gray-400">
              <span>STATUS: IN PROGRESS</span>
              <span>LAST UPDATED: 2024.01</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
