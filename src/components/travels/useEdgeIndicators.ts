import { useMemo, useCallback } from "react"
import { travels } from "@/lib/travels"
import type { TravelEntry } from "@/lib/travels"
import type { MapRef } from "react-map-gl/maplibre"

const MOBILE_BREAKPOINT = 768
const MOBILE_MAX_INDICATORS = 1
const POSITION_CLAMP_MIN = 0
const POSITION_CLAMP_MAX = 1
const MIN_FLY_ZOOM = 6
const FLY_DURATION_MS = 800

type Edge = "top" | "bottom" | "left" | "right"

export type EdgeIndicator = {
  edge: Edge
  entry: TravelEntry
  position: number
}

export function useEdgeIndicators(
  bounds: [number, number, number, number] | null,
  zoom: number,
  mapRef: React.RefObject<MapRef | null>,
) {
  const indicators = useMemo<EdgeIndicator[]>(() => {
    if (!bounds) return []
    const [west, south, east, north] = bounds
    const offscreen = travels.filter(
      (t) => t.coordinates[0] < west || t.coordinates[0] > east || t.coordinates[1] < south || t.coordinates[1] > north
    )
    if (offscreen.length === 0) return []

    const centerLng = (west + east) / 2
    const centerLat = (south + north) / 2

    const buckets: Record<string, { entry: TravelEntry; dist: number; position: number }> = {}

    for (const t of offscreen) {
      const [lng, lat] = t.coordinates
      const dLeft = west - lng
      const dRight = lng - east
      const dBottom = south - lat
      const dTop = lat - north

      let edge: Edge
      let position: number

      if (dTop > 0 && dTop >= Math.max(dLeft, dRight, dBottom)) {
        edge = "top"
        position = Math.max(POSITION_CLAMP_MIN, Math.min(POSITION_CLAMP_MAX, (lng - west) / (east - west)))
      } else if (dBottom > 0 && dBottom >= Math.max(dLeft, dRight, dTop)) {
        edge = "bottom"
        position = Math.max(POSITION_CLAMP_MIN, Math.min(POSITION_CLAMP_MAX, (lng - west) / (east - west)))
      } else if (dLeft > 0 && dLeft >= Math.max(dRight, dTop, dBottom)) {
        edge = "left"
        position = Math.max(POSITION_CLAMP_MIN, Math.min(POSITION_CLAMP_MAX, (lat - south) / (north - south)))
      } else {
        edge = "right"
        position = Math.max(POSITION_CLAMP_MIN, Math.min(POSITION_CLAMP_MAX, (lat - south) / (north - south)))
      }

      const dist = Math.sqrt((lng - centerLng) ** 2 + (lat - centerLat) ** 2)
      if (!buckets[edge] || dist < buckets[edge]!.dist) {
        buckets[edge] = { entry: t, dist, position }
      }
    }

    const all = Object.entries(buckets).map(([edge, val]) => ({
      edge: edge as Edge,
      entry: val!.entry,
      dist: val!.dist,
      position: val!.position,
    }))

    const isMobile = typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT
    if (isMobile) {
      all.sort((a, b) => a.dist - b.dist)
      return all.slice(0, MOBILE_MAX_INDICATORS)
    }
    return all
  }, [bounds])

  const handleEdgeClick = useCallback((entry: TravelEntry) => {
    mapRef.current?.flyTo({
      center: [entry.coordinates[0], entry.coordinates[1]],
      zoom: Math.max(zoom, MIN_FLY_ZOOM),
      duration: FLY_DURATION_MS,
    })
  }, [zoom, mapRef])

  return { indicators, handleEdgeClick }
}
