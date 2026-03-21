import React, { useState, useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import RetroSlider from "./RetroSlider"
import "./retro-tv.css"

interface Talk {
  id: string
  title: string
  organizer: string
  description: string
  date: string
  blog: string | null
  video: string | null
  image: string | null
}

interface RetroTVModalProps {
  talks: Talk[]
  isOpen: boolean
  onClose: () => void
  initialIndex?: number
}

function generatePlaceholder(talk: Talk, canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  let hash = 0
  for (let i = 0; i < talk.title.length; i++) {
    hash = talk.title.charCodeAt(i) + ((hash << 5) - hash)
  }
  const hue = Math.abs(hash) % 360

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop(0, `hsl(${hue}, 60%, 25%)`)
  gradient.addColorStop(1, `hsl(${(hue + 60) % 360}, 50%, 15%)`)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = `hsl(${hue}, 40%, 40%)`
  ctx.lineWidth = 2
  for (let i = 0; i < 5; i++) {
    ctx.beginPath()
    ctx.arc(
      canvas.width * 0.5 + Math.cos(i * 1.2) * 80,
      canvas.height * 0.5 + Math.sin(i * 1.2) * 60,
      30 + i * 15,
      0,
      Math.PI * 2,
    )
    ctx.stroke()
  }

  ctx.fillStyle = "rgba(255,255,255,0.9)"
  ctx.font = "bold 16px 'Press Start 2P', monospace"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"

  const words = talk.title.split(" ")
  const lines: string[] = []
  let currentLine = ""
  const maxWidth = canvas.width - 60

  for (const word of words) {
    const testLine = currentLine ? currentLine + " " + word : word
    const metrics = ctx.measureText(testLine)
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine)
      currentLine = word
    } else {
      currentLine = testLine
    }
  }
  lines.push(currentLine)

  const lineHeight = 28
  const startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2
  lines.forEach((line, i) => {
    ctx.fillText(line, canvas.width / 2, startY + i * lineHeight)
  })

  ctx.fillStyle = "rgba(255,255,255,0.5)"
  ctx.font = "10px 'Press Start 2P', monospace"
  ctx.fillText(talk.organizer, canvas.width / 2, canvas.height - 30)
}

const DEFAULT_PIXELATION = 7
const DEFAULT_COLOR_LEVEL = 77
const STATIC_DISPLAY_DURATION = 400

export default function RetroTVModal({
  talks,
  isOpen,
  onClose,
  initialIndex = 0,
}: RetroTVModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [pixelation, setPixelation] = useState(DEFAULT_PIXELATION)
  const [colorLevel, setColorLevel] = useState(DEFAULT_COLOR_LEVEL)
  const [isPoweredOn, setIsPoweredOn] = useState(false)
  const [showStatic, setShowStatic] = useState(true)

  const screenCanvasRef = useRef<HTMLCanvasElement>(null)
  const sourceCanvasRef = useRef<HTMLCanvasElement>(null)

  const currentTalk = talks[currentIndex]

  // Power-on sequence
  useEffect(() => {
    if (isOpen) {
      setShowStatic(true)
      setIsPoweredOn(false)
      const staticTimer = setTimeout(() => {
        setIsPoweredOn(true)
        setShowStatic(false)
      }, STATIC_DISPLAY_DURATION)
      return () => clearTimeout(staticTimer)
    }
  }, [isOpen, currentIndex])

  // Pixelation renderer
  const renderPixelated = useCallback(() => {
    if (!screenCanvasRef.current || !sourceCanvasRef.current) return
    const screen = screenCanvasRef.current
    const source = sourceCanvasRef.current
    const ctx = screen.getContext("2d")
    if (!ctx) return

    screen.width = 640
    screen.height = 400

    const scale = pixelation / 10
    const smallWidth = Math.max(16, Math.floor(640 * scale))
    const smallHeight = Math.max(10, Math.floor(400 * scale))

    ctx.imageSmoothingEnabled = false
    ctx.drawImage(source, 0, 0, smallWidth, smallHeight)
    ctx.drawImage(screen, 0, 0, smallWidth, smallHeight, 0, 0, 640, 400)
  }, [pixelation])

  // Generate source image
  useEffect(() => {
    if (!sourceCanvasRef.current || !currentTalk) return
    const canvas = sourceCanvasRef.current
    canvas.width = 640
    canvas.height = 400

    if (currentTalk.image) {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
          renderPixelated()
        }
      }
      img.src = currentTalk.image
    } else {
      generatePlaceholder(currentTalk, canvas)
      renderPixelated()
    }
  }, [currentTalk, renderPixelated])

  // Re-render when pixelation changes
  useEffect(() => {
    renderPixelated()
  }, [pixelation, renderPixelated])

  // Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  const grayscale = 100 - colorLevel

  const navigateTalk = (direction: number) => {
    setCurrentIndex((prev) => {
      const next = prev + direction
      if (next < 0) return talks.length - 1
      if (next >= talks.length) return 0
      return next
    })
  }

  if (!isOpen) return null

  const marqueeText = `CH.${currentIndex + 1} ── ${currentTalk.title} ── ${currentTalk.organizer} ── ${currentTalk.date}`

  return createPortal(
    <div className="retro-modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col items-center"
      >
        {/* Antenna */}
        <svg
          width="160"
          height="70"
          viewBox="0 0 160 70"
          fill="none"
          className="relative z-10 mb-[-6px]"
        >
          {/* Left rod */}
          <path
            d="M 50 66 Q 35 40, 20 8"
            stroke="#6b7280"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right rod */}
          <path
            d="M 110 66 Q 125 40, 140 8"
            stroke="#6b7280"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Ball tips */}
          <circle
            cx="20"
            cy="7"
            r="5"
            fill="#9ca3af"
            stroke="#6b7280"
            strokeWidth="1"
          />
          <circle
            cx="140"
            cy="7"
            r="5"
            fill="#9ca3af"
            stroke="#6b7280"
            strokeWidth="1"
          />
          {/* Base block */}
          <rect
            x="60"
            y="56"
            width="40"
            height="14"
            rx="4"
            fill="#374151"
            stroke="#4b5563"
            strokeWidth="1.5"
          />
          {/* Base detail */}
          <line
            x1="70"
            y1="63"
            x2="90"
            y2="63"
            stroke="#4b5563"
            strokeWidth="1"
          />
        </svg>

        {/* TV Body */}
        <div
          className="rounded-2xl border-2 border-gray-700 relative"
          style={{
            background: "#1a1f2e",
            padding: "20px",
            boxShadow:
              "0 0 60px rgba(100,200,255,0.06), inset 0 1px 0 rgba(255,255,255,0.05)",
            width: "min(85vw, 820px)",
          }}
        >
          {/* Inner body */}
          <div
            className="rounded-xl border border-gray-800 p-4"
            style={{ background: "#111827" }}
          >
            <div className="flex gap-5">
              {/* Left side: Screen + Marquee */}
              <div className="flex-1 min-w-0 flex flex-col">
                {/* Screen */}
                <div
                  className="tv-screen tv-screen-glow w-full relative rounded-lg overflow-hidden"
                  style={{
                    aspectRatio: "16/10",
                    background: "#0a0e17",
                    border: "3px solid #2d3548",
                  }}
                >
                  {showStatic && (
                    <div className="absolute inset-0 tv-static bg-gray-800 z-10" />
                  )}
                  <div
                    className={
                      isPoweredOn ? "tv-power-on w-full h-full" : "hidden"
                    }
                  >
                    <canvas
                      ref={screenCanvasRef}
                      className="w-full h-full"
                      style={{
                        filter: `grayscale(${grayscale}%)`,
                        imageRendering: "pixelated",
                        display: "block",
                      }}
                    />
                  </div>
                  {/* Scanline */}
                  <div
                    className="absolute left-0 right-0 h-[3px] pointer-events-none z-[3]"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(100,200,255,0.08), transparent)",
                      animation: "scanline-move 3s linear infinite",
                    }}
                  />
                </div>

                {/* Marquee bar */}
                <div
                  className="w-full overflow-hidden rounded-b-lg"
                  style={{
                    height: "32px",
                    background: "#0d1117",
                    borderLeft: "3px solid #2d3548",
                    borderRight: "3px solid #2d3548",
                    borderBottom: "3px solid #2d3548",
                  }}
                >
                  <div className="h-full flex items-center px-2">
                    <span
                      className="retro-marquee"
                      style={{
                        color: "#4ade80",
                        fontSize: "9px",
                        textShadow: "0 0 8px rgba(74,222,128,0.5)",
                      }}
                    >
                      {marqueeText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side: Controls panel */}
              <div
                className="flex flex-col items-center py-3 shrink-0"
                style={{ width: "150px", gap: "0" }}
              >
                {/* Channel display */}
                <div
                  className="w-full rounded-md mb-3 px-3 py-2 text-center"
                  style={{
                    background: "#0d1117",
                    border: "2px solid #2d3548",
                  }}
                >
                  <p
                    style={{
                      fontFamily: '"Press Start 2P", monospace',
                      fontSize: "6px",
                      color: "#4b5563",
                      marginBottom: "4px",
                    }}
                  >
                    MY TALKS
                  </p>
                  <p
                    style={{
                      fontFamily: '"Press Start 2P", monospace',
                      fontSize: "16px",
                      color: "#4ade80",
                      textShadow: "0 0 10px rgba(74,222,128,0.4)",
                    }}
                  >
                    {String(currentIndex + 1).padStart(2, "0")}
                  </p>
                  <p
                    style={{
                      fontFamily: '"Press Start 2P", monospace',
                      fontSize: "5px",
                      color: "#374151",
                      marginTop: "2px",
                    }}
                  >
                    OF {String(talks.length).padStart(2, "0")}
                  </p>
                </div>

                {/* Speaker grille */}
                <div className="w-full mb-3">
                  <svg
                    width="100%"
                    height="28"
                    viewBox="0 0 120 28"
                    fill="none"
                    className="mx-auto block"
                  >
                    {[0, 1, 2, 3].map((i) => (
                      <line
                        key={`g-${i}`}
                        x1="15"
                        y1={4 + i * 7}
                        x2="105"
                        y2={4 + i * 7}
                        stroke="#2d3548"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    ))}
                  </svg>
                </div>

                {/* Knobs */}
                <div className="flex flex-col gap-4 items-center w-full">
                  <RetroSlider
                    min={1}
                    max={10}
                    value={pixelation}
                    onChange={setPixelation}
                    label="RESOLUTION"
                  />
                  <RetroSlider
                    min={0}
                    max={100}
                    value={colorLevel}
                    onChange={setColorLevel}
                    label="COLOR"
                  />
                </div>

                {/* Navigation */}
                <div className="flex gap-3 mt-4">
                  <button
                    className="retro-btn"
                    onClick={() => navigateTalk(-1)}
                    aria-label="Previous talk"
                  >
                    ◀ PREV
                  </button>
                  <button
                    className="retro-btn"
                    onClick={() => navigateTalk(1)}
                    aria-label="Next talk"
                  >
                    NEXT ▶
                  </button>
                </div>

                {/* Brand */}
                <div className="mt-auto pt-3 text-center">
                  <p
                    style={{
                      fontFamily: '"Press Start 2P", monospace',
                      fontSize: "6px",
                      color: "#2d3548",
                    }}
                  >
                    RETRO-TV
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feet */}
          <div className="flex justify-between px-12 mt-2">
            <div
              className="w-14 h-2 rounded-sm"
              style={{ background: "#374151" }}
            />
            <div
              className="w-14 h-2 rounded-sm"
              style={{ background: "#374151" }}
            />
          </div>
        </div>

        {/* Hidden source canvas */}
        <canvas ref={sourceCanvasRef} className="hidden" />
      </div>
    </div>,
    document.body,
  )
}
