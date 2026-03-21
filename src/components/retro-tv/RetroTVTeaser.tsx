import React, { useState, lazy, Suspense } from "react";
import "./retro-tv.css";

const RetroTVModal = lazy(() => import("./RetroTVModal"));

interface Talk {
  id: string;
  title: string;
  organizer: string;
  description: string;
  date: string;
  blog: string | null;
  video: string | null;
  image: string | null;
}

interface RetroTVTeaserProps {
  talks: Talk[];
}

export default function RetroTVTeaser({ talks }: RetroTVTeaserProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="teaser-tv-container relative flex flex-col items-center"
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        aria-label="Open retro TV talk viewer"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
      >
        {/* Antenna */}
        <svg
          width="100"
          height="40"
          viewBox="0 0 100 40"
          fill="none"
          className="relative z-10 mb-[-4px]"
        >
          {/* Left rod */}
          <path d="M 32 36 Q 22 22, 12 6" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Right rod */}
          <path d="M 68 36 Q 78 22, 88 6" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Ball tips */}
          <circle cx="12" cy="5" r="3.5" fill="#9ca3af" stroke="#6b7280" strokeWidth="0.8" />
          <circle cx="88" cy="5" r="3.5" fill="#9ca3af" stroke="#6b7280" strokeWidth="0.8" />
          {/* Base block */}
          <rect x="38" y="30" width="24" height="10" rx="3" fill="#374151" stroke="#4b5563" strokeWidth="1" />
        </svg>

        {/* TV Body */}
        <div
          className="rounded-xl border border-gray-700 relative"
          style={{
            background: "#1a1f2e",
            padding: "10px",
            width: "200px",
            boxShadow: "0 0 30px rgba(100,200,255,0.04)",
          }}
        >
          {/* Inner body */}
          <div
            className="rounded-lg border border-gray-800 p-2"
            style={{ background: "#111827" }}
          >
            <div className="flex gap-2">
              {/* Screen area */}
              <div className="flex-1 min-w-0 flex flex-col">
                {/* Screen */}
                <div
                  className="tv-screen tv-screen-glow relative rounded overflow-hidden"
                  style={{
                    aspectRatio: "4/3",
                    background: "#0a0e17",
                    border: "2px solid #2d3548",
                  }}
                >
                  <div className="tv-static w-full h-full bg-gray-900 opacity-60" />
                  <div className="teaser-hover-text absolute inset-0 flex items-center justify-center z-10 bg-black/50">
                    <span
                      className="text-center px-1"
                      style={{
                        fontFamily: '"Press Start 2P", monospace',
                        fontSize: "6px",
                        color: "#4ade80",
                        textShadow: "0 0 6px rgba(74,222,128,0.5)",
                        lineHeight: "1.6",
                      }}
                    >
                      CLICK TO
                      <br />
                      TUNE IN
                    </span>
                  </div>
                </div>

                {/* Marquee strip */}
                <div
                  className="w-full overflow-hidden"
                  style={{
                    height: "16px",
                    background: "#0d1117",
                    borderLeft: "2px solid #2d3548",
                    borderRight: "2px solid #2d3548",
                    borderBottom: "2px solid #2d3548",
                  }}
                >
                  <div className="h-full flex items-center">
                    <span
                      className="retro-marquee-fast"
                      style={{
                        color: "#4ade80",
                        fontSize: "4px",
                        fontFamily: '"Press Start 2P", monospace',
                        textShadow: "0 0 4px rgba(74,222,128,0.4)",
                      }}
                    >
                      {talks.length} TALKS ── CLICK TO EXPLORE
                    </span>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="flex flex-col items-center justify-between py-1" style={{ width: "36px" }}>
                {/* Speaker lines */}
                <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
                  {[0, 1, 2, 3].map((i) => (
                    <line
                      key={`tg-${i}`}
                      x1="2" y1={4 + i * 7}
                      x2="26" y2={4 + i * 7}
                      stroke="#2d3548" strokeWidth="1.5" strokeLinecap="round"
                    />
                  ))}
                </svg>

                {/* Knobs */}
                <div className="flex flex-col gap-2 items-center">
                  <div
                    className="rounded-full border border-gray-600"
                    style={{
                      width: "14px",
                      height: "14px",
                      background: "radial-gradient(circle at 40% 40%, #6b7280, #374151)",
                    }}
                  >
                    <div
                      className="mx-auto mt-[2px] rounded-full"
                      style={{ width: "2px", height: "5px", background: "#9ca3af" }}
                    />
                  </div>
                  <div
                    className="rounded-full border border-gray-600"
                    style={{
                      width: "14px",
                      height: "14px",
                      background: "radial-gradient(circle at 40% 40%, #6b7280, #374151)",
                    }}
                  >
                    <div
                      className="mx-auto mt-[2px] rounded-full"
                      style={{ width: "2px", height: "5px", background: "#9ca3af" }}
                    />
                  </div>
                </div>

                {/* Label */}
                <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: "3px", color: "#2d3548" }}>
                  TV
                </span>
              </div>
            </div>
          </div>

          {/* Feet */}
          <div className="flex justify-between px-4 mt-1">
            <div className="w-6 h-1 rounded-sm" style={{ background: "#374151" }} />
            <div className="w-6 h-1 rounded-sm" style={{ background: "#374151" }} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Suspense fallback={null}>
          <RetroTVModal
            talks={talks}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
}
