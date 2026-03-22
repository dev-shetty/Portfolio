import { useState, useEffect, useCallback, useRef } from "react"
import type { Art } from "@/lib/artgallery"
import "./art-book.css"

type Page =
  | { type: "cover" }
  | { type: "art"; art: Art }
  | { type: "end" }

interface ArtBookProps {
  arts: Art[]
}

export default function ArtBook({ arts }: ArtBookProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [exitingPage, setExitingPage] = useState<Page | null>(null)
  const [exitDir, setExitDir] = useState<"next" | "prev" | null>(null)
  const animating = exitingPage !== null
  const totalPages = arts.length + 2

  const pages: Page[] = [
    { type: "cover" },
    ...arts.map((art): Page => ({ type: "art", art })),
    { type: "end" },
  ]

  const openBook = useCallback((artIndex?: number) => {
    setCurrentPage(artIndex != null ? artIndex + 1 : 0)
    setExitingPage(null)
    setExitDir(null)
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }, [])

  const closeBook = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ""
  }, [])

  const goNext = useCallback(() => {
    if (animating || currentPage >= totalPages - 1) return
    const oldPage = pages[currentPage]
    setExitingPage(oldPage)
    setExitDir("next")
    setCurrentPage((p) => p + 1)
    setTimeout(() => {
      setExitingPage(null)
      setExitDir(null)
    }, 600)
  }, [animating, currentPage, totalPages, pages])

  const goPrev = useCallback(() => {
    if (animating || currentPage <= 0) return
    const oldPage = pages[currentPage]
    setExitingPage(oldPage)
    setExitDir("prev")
    setCurrentPage((p) => p - 1)
    setTimeout(() => {
      setExitingPage(null)
      setExitDir(null)
    }, 600)
  }, [animating, currentPage, pages])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBook()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, closeBook, goNext, goPrev])

  useEffect(() => {
    const handler = (e: Event) => {
      openBook((e as CustomEvent).detail?.index)
    }
    window.addEventListener("open-art-book", handler)
    return () => window.removeEventListener("open-art-book", handler)
  }, [openBook])

  if (!isOpen) return null

  // Preload adjacent images
  const prevArt = currentPage >= 2 && currentPage <= arts.length ? arts[currentPage - 2] : null
  const nextArt = currentPage >= 1 && currentPage < arts.length ? arts[currentPage] : null

  return (
    <div className="art-book-backdrop" onClick={closeBook}>
      <div className="art-book-container" onClick={(e) => e.stopPropagation()}>
        <button className="art-book-close" onClick={closeBook}>
          ✕ <span>Close</span>
        </button>

        <div className="art-book-page-wrapper">
          {/* Base layer: the NEW (current) page — always visible, no animation */}
          <div className="art-book-layer base">
            {renderPage(pages[currentPage])}
          </div>

          {/* Exit layer: the OLD page curling away on top */}
          {exitingPage && exitDir && (
            <div className={`art-book-layer exit curl-${exitDir}`}>
              {renderPage(exitingPage)}
            </div>
          )}

          {/* Curl shadow */}
          {exitDir && (
            <div className={`curl-shadow ${exitDir}`} />
          )}
        </div>

        <button
          className="art-book-nav prev"
          onClick={goPrev}
          disabled={currentPage === 0 || animating}
          aria-label="Previous page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button
          className="art-book-nav next"
          onClick={goNext}
          disabled={currentPage === totalPages - 1 || animating}
          aria-label="Next page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>

        <div className="art-book-counter">
          {currentPage + 1} / {totalPages}
        </div>

        {/* Preload adjacent images */}
        {prevArt && <link rel="preload" as="image" href={prevArt.img} />}
        {nextArt && <link rel="preload" as="image" href={nextArt.img} />}
      </div>
    </div>
  )
}

function ArtWithTape({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const tapeRef = useRef<HTMLDivElement>(null)

  const positionTape = useCallback(() => {
    const img = imgRef.current
    const tape = tapeRef.current
    const container = containerRef.current
    if (!img || !tape || !container) return

    const containerRect = container.getBoundingClientRect()
    const imgRect = img.getBoundingClientRect()

    // Calculate image position relative to container
    const top = imgRect.top - containerRect.top
    const left = imgRect.left - containerRect.left
    const right = left + imgRect.width
    const bottom = top + imgRect.height

    tape.style.cssText = `
      --img-top: ${top}px;
      --img-left: ${left}px;
      --img-right: ${right}px;
      --img-bottom: ${bottom}px;
    `
    tape.style.display = "block"
  }, [])

  useEffect(() => {
    window.addEventListener("resize", positionTape)
    return () => window.removeEventListener("resize", positionTape)
  }, [positionTape])

  return (
    <div className="art-tape-container" ref={containerRef}>
      <img ref={imgRef} src={src} alt={alt} onLoad={positionTape} />
      <div className="tape-overlay" ref={tapeRef} style={{ display: "none" }}>
        <div className="masking-tape top-left" />
        <div className="masking-tape top-right" />
        <div className="masking-tape bottom-left" />
        <div className="masking-tape bottom-right" />
      </div>
    </div>
  )
}

function renderPage(page: Page) {
  if (page.type === "cover") {
    return (
      <div className="leather-cover">
        <div className="cover-ornament" />
        <h2>Deveesh{"'"}s<br />Art Gallery</h2>
        <div className="cover-ornament" />
        <p className="cover-subtitle">A collection of hand-drawn artworks</p>
      </div>
    )
  }

  if (page.type === "end") {
    return (
      <div className="leather-cover">
        <div className="cover-ornament" />
        <div className="end-page-content">Hey, you rock!</div>
        <span className="end-page-emoji">🤘</span>
        <div className="cover-ornament" style={{ marginTop: "1.5rem" }} />
      </div>
    )
  }

  const { art } = page
  return (
    <div className="paper-page">
      <div className="art-panel">
        <ArtWithTape src={art.img} alt={art.alt} />
      </div>
      <div className="text-panel">
        {art.quote && <span className="quote-mark open">{"\u201C"}</span>}
        {art.quote && <p className="quote-text">{art.quote}</p>}
        {art.quote && <span className="quote-mark close">{"\u201D"}</span>}
        <div className="divider" />
        <p className="description">{art.description}</p>
        <p className="art-title">{art.alt}</p>
      </div>
    </div>
  )
}
