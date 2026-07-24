import { useState, useCallback, useMemo, useRef, useEffect } from "react"
import Map, { Marker, NavigationControl } from "react-map-gl/maplibre"
import type { MapRef } from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"
import Supercluster from "supercluster"
import { travels, getThumbUrl } from "@/lib/travels"
import type { TravelEntry } from "@/lib/travels"
import { PhotoLightbox } from "./PhotoLightbox"
import { useEdgeIndicators } from "./useEdgeIndicators"

const MAPTILER_KEY = import.meta.env.PUBLIC_MAPTILER_KEY

const INITIAL_ZOOM = 4
const MIN_ZOOM = 4
const MAX_ZOOM = 10
const INITIAL_CENTER = { lng: 78.9629, lat: 20.5937 }
const MARKER_BASE_SIZE = 48
const MARKER_SCALE_MIN = 0.8
const MARKER_SCALE_MAX = 2.5
const CLUSTER_SIZE_MULTIPLIER = 1.2
const CLUSTER_RADIUS = 60
const CLUSTER_PREVIEW_COUNT = 4
const CLUSTER_LABEL_MAX_CITIES = 3
const MOVE_DEBOUNCE_MS = 60
const CLUSTER_FLY_DURATION_MS = 300
const MARKER_FLY_DURATION_MS = 600
const EDGE_INDICATOR_VISIBLE_THRESHOLD = 3
const EDGE_POSITION_MIN = 0.15
const EDGE_POSITION_MAX = 0.85
const EDGE_OFFSET_PX = 12

type TravelProps = { index: number }
type TravelFeature = GeoJSON.Feature<GeoJSON.Point, TravelProps>

export function TravelMap() {
  const mapRef = useRef<MapRef>(null)
  const [selectedCity, setSelectedCity] = useState<TravelEntry | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState(4)
  const [bounds, setBounds] = useState<[number, number, number, number] | null>(null)

  const markerSize = useMemo(() => {
    const scale = Math.max(MARKER_SCALE_MIN, Math.min(MARKER_SCALE_MAX, zoom / INITIAL_ZOOM))
    return Math.round(MARKER_BASE_SIZE * scale)
  }, [zoom])

  const points: TravelFeature[] = useMemo(() =>
    travels.map((entry, index) => ({
      type: "Feature" as const,
      geometry: {
        type: "Point" as const,
        coordinates: [entry.coordinates[0], entry.coordinates[1]],
      },
      properties: { index },
    })),
  [])

  const cluster = useMemo(() => {
    const sc = new Supercluster<TravelProps>({
      radius: CLUSTER_RADIUS,
      maxZoom: MAX_ZOOM,
    })
    sc.load(points)
    return sc
  }, [points])

  const clusters = useMemo(() => {
    if (!bounds) return []
    return cluster.getClusters(bounds, Math.round(zoom))
  }, [cluster, bounds, zoom])

  const totalPhotos = useMemo(() =>
    travels.reduce((sum, t) => sum + t.photos.length, 0),
  [])

  const totalPlaces = travels.length

  const moveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const syncMapState = useCallback(() => {
    const map = mapRef.current
    if (!map) return
    const b = map.getMap().getBounds()
    setBounds([b.getWest(), b.getSouth(), b.getEast(), b.getNorth()])
    setZoom(map.getMap().getZoom())
  }, [])

  const handleMove = useCallback(() => {
    if (moveTimer.current) clearTimeout(moveTimer.current)
    moveTimer.current = setTimeout(syncMapState, MOVE_DEBOUNCE_MS)
  }, [syncMapState])

  useEffect(() => () => { if (moveTimer.current) clearTimeout(moveTimer.current) }, [])

  const handleClusterClick = useCallback((clusterId: number, lng: number, lat: number) => {
    const expansionZoom = Math.min(cluster.getClusterExpansionZoom(clusterId), MAX_ZOOM)
    mapRef.current?.flyTo({ center: [lng, lat], zoom: expansionZoom, duration: CLUSTER_FLY_DURATION_MS })
  }, [cluster])

  const handleMarkerClick = useCallback((entry: TravelEntry) => {
    setSelectedCity(entry)
    setLightboxIndex(0)
    mapRef.current?.flyTo({
      center: [entry.coordinates[0], entry.coordinates[1]],
      duration: MARKER_FLY_DURATION_MS,
    })
  }, [])

  const handleCloseLightbox = useCallback(() => {
    setSelectedCity(null)
    setLightboxIndex(null)
  }, [])

  const { indicators: edgeIndicators, handleEdgeClick } = useEdgeIndicators(bounds, zoom, mapRef)

  return (
    <div className="relative w-full h-full">
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: INITIAL_CENTER.lng,
          latitude: INITIAL_CENTER.lat,
          zoom: INITIAL_ZOOM,
          pitch: 0,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={`https://api.maptiler.com/maps/dataviz-dark/style.json?key=${MAPTILER_KEY}`}
        attributionControl={false}
        maxZoom={MAX_ZOOM}
        minZoom={MIN_ZOOM}
        onMove={handleMove}
        onMoveEnd={syncMapState}
        onLoad={syncMapState}
      >
        <NavigationControl position="bottom-right" />

        {clusters.map((feature) => {
          const [lng, lat] = feature.geometry.coordinates
          const props = feature.properties as Supercluster.ClusterProperties & TravelProps

          if (props.cluster) {
            const leaves = cluster.getLeaves(props.cluster_id, Infinity)
            const totalClusterPhotos = leaves.reduce(
              (sum, leaf) => sum + travels[leaf.properties.index].photos.length, 0
            )
            const clusterSize = markerSize * CLUSTER_SIZE_MULTIPLIER
            const cityNames = leaves.map((leaf) => travels[leaf.properties.index].city)

            return (
              <Marker
                key={`cluster-${props.cluster_id}`}
                longitude={lng}
                latitude={lat}
                anchor="center"
                onClick={(e) => {
                  e.originalEvent.stopPropagation()
                  handleClusterClick(props.cluster_id, lng, lat)
                }}
              >
                <button
                  className="group relative cursor-pointer border-0 bg-transparent p-0 flex flex-col items-center"
                  aria-label={`Cluster: ${cityNames.join(", ")}`}
                >
                  <div
                    className="relative grid grid-cols-2 gap-0.5 overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] ring-2 ring-white/20 transition-all duration-300 group-hover:scale-110 group-hover:ring-white/50 bg-gray-800"
                    style={{ width: clusterSize, height: clusterSize }}
                  >
                    {cluster
                      .getLeaves(props.cluster_id, CLUSTER_PREVIEW_COUNT)
                      .map((leaf, i) => (
                        <img
                          key={i}
                          src={getThumbUrl(travels[leaf.properties.index].coverPhoto)}
                          alt={travels[leaf.properties.index].city}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ))}
                    <span className="absolute right-1 bottom-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-black/70 px-1.5 text-[10px] font-bold text-white backdrop-blur-sm tabular-nums">
                      {totalClusterPhotos}
                    </span>
                  </div>
                  <span className="mt-1.5 block text-center text-[11px] font-medium text-gray-300/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] group-hover:text-white max-w-36 truncate">
                    {cityNames.length <= CLUSTER_LABEL_MAX_CITIES ? cityNames.join(", ") : `${cityNames.slice(0, 2).join(", ")} +${cityNames.length - 2}`}
                  </span>
                </button>
              </Marker>
            )
          }

          const entry = travels[props.index]
          return (
            <Marker
              key={entry.city}
              longitude={lng}
              latitude={lat}
              anchor="center"
              onClick={(e) => {
                e.originalEvent.stopPropagation()
                handleMarkerClick(entry)
              }}
            >
              <button
                className="group relative cursor-pointer border-0 bg-transparent p-0 flex flex-col items-center"
                aria-label={`View ${entry.city} photos`}
              >
                <div
                  className="relative overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] ring-2 ring-white/20 transition-all duration-300 group-hover:scale-110 group-hover:ring-white/50"
                  style={{ width: markerSize, height: markerSize }}
                >
                  <img
                    src={getThumbUrl(entry.coverPhoto)}
                    alt={entry.city}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {entry.photos.length > 1 && (
                    <span className="absolute right-1 bottom-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-black/70 px-1.5 text-[10px] font-bold text-white backdrop-blur-sm tabular-nums">
                      {entry.photos.length}
                    </span>
                  )}
                </div>
                <span className="mt-1.5 block text-center text-[11px] font-medium text-gray-300/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] group-hover:text-white">
                  {entry.city}
                </span>
              </button>
            </Marker>
          )
        })}
      </Map>

      {/* Stats pill */}
      <div className="absolute left-4 bottom-8 flex items-center gap-3 rounded-full bg-black/60 px-4 py-2 backdrop-blur-md ring-1 ring-white/10">
        <span className="text-xs text-gray-400">
          <span className="font-semibold text-gray-200">{totalPlaces}</span> places
        </span>
        <span className="h-3 w-px bg-gray-600" />
        <span className="text-xs text-gray-400">
          <span className="font-semibold text-gray-200">{totalPhotos}</span> photos
        </span>
      </div>

      {/* Edge indicators for off-screen locations — hide when enough content is already visible */}
      {clusters.length <= EDGE_INDICATOR_VISIBLE_THRESHOLD && edgeIndicators.map(({ edge, entry, position }) => {
        const arrows = { top: "↑", bottom: "↓", left: "←", right: "→" }
        const clamp = (v: number) => Math.max(EDGE_POSITION_MIN, Math.min(EDGE_POSITION_MAX, v))
        const pos = clamp(edge === "top" || edge === "bottom" ? position : 1 - position)

        const style: React.CSSProperties = (() => {
          switch (edge) {
            case "top": return { top: EDGE_OFFSET_PX, left: `${pos * 100}%`, transform: "translateX(-50%)" }
            case "bottom": return { bottom: EDGE_OFFSET_PX, left: `${pos * 100}%`, transform: "translateX(-50%)" }
            case "left": return { left: EDGE_OFFSET_PX, top: `${pos * 100}%`, transform: "translateY(-50%)" }
            case "right": return { right: EDGE_OFFSET_PX, top: `${pos * 100}%`, transform: "translateY(-50%)" }
          }
        })()

        return (
          <button
            key={edge}
            className="absolute z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-medium text-gray-300 backdrop-blur-md ring-1 ring-white/10 transition-all hover:bg-black/80 hover:text-white hover:ring-white/30 cursor-pointer"
            style={style}
            onClick={() => handleEdgeClick(entry)}
          >
            {edge === "left" && <span>{arrows[edge]}</span>}
            {entry.city}
            {edge !== "left" && <span>{arrows[edge]}</span>}
          </button>
        )
      })}

      {selectedCity && lightboxIndex !== null && (
        <PhotoLightbox
          photos={selectedCity.photos}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  )
}
