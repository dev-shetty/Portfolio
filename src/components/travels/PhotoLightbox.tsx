import { useEffect, useCallback, useRef, useState, useMemo } from "react"
import type { TravelPhoto } from "@/lib/travels"
import { getPhotoUrl, getThumbUrl } from "@/lib/travels"
import "./film-reel.css"

type Props = {
  photos: TravelPhoto[]
  currentIndex: number
  cityName: string
  visitDate: string
  onClose: () => void
  onNavigate: (index: number) => void
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function Sprockets() {
  return (
    <div className="film-sprockets">
      {Array.from({ length: 14 }, (_, i) => (
        <div key={i} className="film-sprocket" />
      ))}
    </div>
  )
}

function FrameHoles({ side }: { side: "left" | "right" }) {
  return (
    <div className={`frame-holes ${side}`}>
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="frame-hole" />
      ))}
    </div>
  )
}

function isCached(src: string) {
  const img = new Image()
  img.src = src
  return img.complete
}

function ProgressiveImage({ photo }: { photo: TravelPhoto }) {
  const fullSrc = getPhotoUrl(photo.url)
  const thumbSrc = getThumbUrl(photo.url)
  const [loaded, setLoaded] = useState(() => isCached(fullSrc))

  useEffect(() => {
    if (isCached(fullSrc)) {
      setLoaded(true)
      return
    }
    setLoaded(false)
    const img = new Image()
    img.onload = () => setLoaded(true)
    img.src = fullSrc
    return () => { img.onload = null }
  }, [fullSrc])

  return (
    <div className="progressive-img-wrap">
      <img
        src={thumbSrc}
        alt=""
        className={`progressive-thumb${loaded ? " loaded" : ""}`}
      />
      <img
        src={fullSrc}
        alt={photo.caption}
        className={`progressive-full${loaded ? " visible" : ""}`}
      />
    </div>
  )
}

function FilmFrame({ photo, index }: { photo: TravelPhoto | null; index: number }) {
  if (!photo) {
    return (
      <div className="reel-frame">
        <Sprockets />
        <div className="frame-body empty">
          <span className="end-of-reel">· end of reel ·</span>
          <FrameHoles side="left" />
          <FrameHoles side="right" />
        </div>
        <Sprockets />
      </div>
    )
  }

  return (
    <div className="reel-frame">
      <Sprockets />
      <div className="frame-body">
        <ProgressiveImage photo={photo} />
        <FrameHoles side="left" />
        <FrameHoles side="right" />
        <span className="film-edge-text left">KODAK 400TX</span>
        <span className="film-edge-text right">5063</span>
        <span className="frame-stamp">▸ {pad(index + 1)}</span>
      </div>
      <Sprockets />
    </div>
  )
}

export function PhotoLightbox({ photos, currentIndex, cityName, visitDate, onClose, onNavigate }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const windowRef = useRef<HTMLDivElement>(null)
  const [animating, setAnimating] = useState(false)
  const [current, setCurrent] = useState(currentIndex)
  const touchStartRef = useRef({ x: 0, y: 0 })
  const stripRef = useRef<HTMLDivElement>(null)
  const [stripCanScrollLeft, setStripCanScrollLeft] = useState(false)
  const [stripCanScrollRight, setStripCanScrollRight] = useState(false)

  const totalWithEnd = photos.length + 1
  const isEnd = current >= photos.length

  const visibleFrames = useMemo(() => {
    const frames: { index: number; photo: TravelPhoto | null }[] = []
    for (let i = 0; i < totalWithEnd; i++) {
      if (Math.abs(i - current) <= 1) {
        frames.push({ index: i, photo: i < photos.length ? photos[i] : null })
      }
    }
    return frames
  }, [current, photos, totalWithEnd])

  // Preload full-res images ±2 ahead
  useEffect(() => {
    for (let offset = -2; offset <= 2; offset++) {
      const idx = current + offset
      if (idx >= 0 && idx < photos.length) {
        const img = new Image()
        img.src = getPhotoUrl(photos[idx].url)
      }
    }
  }, [current, photos])

  const getFrameWidth = useCallback(() => {
    if (windowRef.current) return windowRef.current.offsetWidth
    return Math.min(860, window.innerWidth * 0.9)
  }, [])

  const slideTo = useCallback((idx: number, animate = true) => {
    const track = trackRef.current
    if (!track) return
    const w = getFrameWidth()
    track.style.transition = animate
      ? "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)"
      : "none"
    track.style.transform = `translate3d(${-idx * w}px, 0, 0)`
  }, [getFrameWidth])

  const updateStripScroll = useCallback(() => {
    const strip = stripRef.current
    if (!strip) return
    setStripCanScrollLeft(strip.scrollLeft > 4)
    setStripCanScrollRight(strip.scrollLeft < strip.scrollWidth - strip.clientWidth - 4)
  }, [])

  const scrollStripTo = useCallback((idx: number) => {
    const strip = stripRef.current
    if (!strip) return
    const thumb = strip.querySelector(`[data-strip-idx="${idx}"]`) as HTMLElement
    if (thumb) {
      const stripRect = strip.getBoundingClientRect()
      const thumbRect = thumb.getBoundingClientRect()
      const scrollLeft = strip.scrollLeft + thumbRect.left - stripRect.left - stripRect.width / 2 + thumbRect.width / 2
      strip.scrollTo({ left: scrollLeft, behavior: "smooth" })
    }
    setTimeout(updateStripScroll, 350)
  }, [updateStripScroll])

  const goTo = useCallback((idx: number) => {
    if (animating) return
    const isSequential = Math.abs(idx - current) <= 1
    if (isSequential) {
      setAnimating(true)
      setCurrent(idx)
      slideTo(idx)
      setTimeout(() => setAnimating(false), 450)
    } else {
      setCurrent(idx)
      slideTo(idx, false)
    }
    onNavigate(Math.min(idx, photos.length - 1))
    scrollStripTo(idx)
  }, [animating, current, slideTo, onNavigate, photos.length, scrollStripTo])

  const navigate = useCallback((dir: number) => {
    if (animating) return
    const next = current + dir

    if (next > photos.length) {
      setAnimating(true)
      const track = trackRef.current
      if (!track) return
      const w = getFrameWidth()
      track.style.transition = "none"
      track.style.transform = `translate3d(${w}px, 0, 0)`
      track.offsetHeight
      setCurrent(0)
      onNavigate(0)
      requestAnimationFrame(() => {
        track.style.transition = "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)"
        track.style.transform = "translate3d(0, 0, 0)"
        scrollStripTo(0)
        setTimeout(() => setAnimating(false), 450)
      })
      return
    }

    if (next < 0) return
    goTo(next)
  }, [animating, current, photos.length, goTo, onNavigate, scrollStripTo, getFrameWidth])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
    if (e.key === "ArrowLeft") { e.preventDefault(); e.stopPropagation(); navigate(-1) }
    if (e.key === "ArrowRight") { e.preventDefault(); e.stopPropagation(); navigate(1) }
  }, [onClose, navigate])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [handleKeyDown])

  useEffect(() => {
    slideTo(currentIndex, false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateStripScroll()
      })
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onResize = () => slideTo(current, false)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [current, slideTo])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      navigate(dx < 0 ? 1 : -1)
    }
  }, [navigate])

  const scrollStrip = useCallback((dir: number) => {
    const strip = stripRef.current
    if (!strip) return
    strip.scrollBy({ left: dir * 300, behavior: "smooth" })
    setTimeout(updateStripScroll, 350)
  }, [updateStripScroll])

  return (
    <div
      className="film-backdrop"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="film-viewer" onClick={(e) => e.stopPropagation()}>
        <div className="reel-window" ref={windowRef}>
          <div
            className="reel-track"
            ref={trackRef}
            style={{ width: `${totalWithEnd * 100}%` }}
          >
            {visibleFrames.map(({ index: i, photo }) => (
              <div
                key={i}
                className="reel-frame"
                style={{
                  position: "absolute",
                  left: `${(i / totalWithEnd) * 100}%`,
                  width: `${(1 / totalWithEnd) * 100}%`,
                }}
              >
                <FilmFrame photo={photo} index={i} />
              </div>
            ))}
          </div>
        </div>

        <button className="film-nav-btn prev" onClick={() => navigate(-1)} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="film-nav-btn next" onClick={() => navigate(1)} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="film-caption-area" onClick={(e) => e.stopPropagation()}>
        <div className="film-caption-text" style={{ opacity: isEnd ? 0 : 1 }}>
          {isEnd ? "" : photos[current]?.caption}
        </div>
        <div className="film-caption-meta">
          {isEnd ? "" : `${cityName} · ${photos[current]?.visitDate || visitDate}`}
        </div>
      </div>

      <div className="film-strip-container" onClick={(e) => e.stopPropagation()}>
        {stripCanScrollLeft && (
          <button className="strip-scroll-btn left" onClick={() => scrollStrip(-1)} aria-label="Scroll filmstrip left">
            <div className="strip-roll-indicator" />
          </button>
        )}
        <div
          className="film-strip"
          ref={stripRef}
          onScroll={updateStripScroll}
        >
          {photos.map((photo, i) => (
            <button
              key={photo.url}
              data-strip-idx={i}
              className={`strip-thumb${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
            >
              <div className="strip-sprocket" />
              <img src={getThumbUrl(photo.url)} alt={photo.caption} loading="lazy" />
              <div className="strip-sprocket bottom" />
            </button>
          ))}
          <button
            data-strip-idx={photos.length}
            className={`strip-end${isEnd ? " active" : ""}`}
            onClick={() => goTo(photos.length)}
          >
            <div className="strip-end-dot" />
          </button>
        </div>
        {stripCanScrollRight && (
          <button className="strip-scroll-btn right" onClick={() => scrollStrip(1)} aria-label="Scroll filmstrip right">
            <div className="strip-roll-indicator" />
          </button>
        )}
      </div>

      <div className="film-caption-counter">
        {isEnd ? "END OF REEL" : `FRAME ${pad(current + 1)} OF ${pad(photos.length)}`}
      </div>

      <button className="film-close-btn" onClick={onClose} aria-label="Close">✕</button>
    </div>
  )
}
