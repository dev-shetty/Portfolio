import { useState, useCallback, useMemo, useRef } from "react"
import Map, { Marker, NavigationControl } from "react-map-gl/maplibre"
import type { MapRef } from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"
import Supercluster from "supercluster"
import { travels, getThumbUrl } from "@/lib/travels"
import type { TravelEntry } from "@/lib/travels"
import { PhotoLightbox } from "./PhotoLightbox"

const MAPTILER_KEY = import.meta.env.PUBLIC_MAPTILER_KEY

type TravelProps = { index: number }
type TravelFeature = GeoJSON.Feature<GeoJSON.Point, TravelProps>

export function TravelMap() {
  const mapRef = useRef<MapRef>(null)
  const [selectedCity, setSelectedCity] = useState<TravelEntry | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState(4)
  const [bounds, setBounds] = useState<[number, number, number, number] | null>(null)

  const markerSize = useMemo(() => {
    const base = 48
    const scale = Math.max(0.8, Math.min(2.5, zoom / 4))
    return Math.round(base * scale)
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
      radius: 60,
      maxZoom: 10,
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

  const handleMove = useCallback(() => {
    const map = mapRef.current
    if (!map) return
    const b = map.getMap().getBounds()
    setBounds([b.getWest(), b.getSouth(), b.getEast(), b.getNorth()])
    setZoom(map.getMap().getZoom())
  }, [])

  const handleClusterClick = useCallback((clusterId: number, lng: number, lat: number) => {
    const expansionZoom = Math.min(cluster.getClusterExpansionZoom(clusterId), 10)
    mapRef.current?.flyTo({ center: [lng, lat], zoom: expansionZoom, duration: 500 })
  }, [cluster])

  const handleMarkerClick = useCallback((entry: TravelEntry) => {
    setSelectedCity(entry)
    setLightboxIndex(0)
    mapRef.current?.flyTo({
      center: [entry.coordinates[0], entry.coordinates[1]],
      duration: 600,
    })
  }, [])

  const handleCloseLightbox = useCallback(() => {
    setSelectedCity(null)
    setLightboxIndex(null)
  }, [])

  return (
    <div className="relative w-full h-full">
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 78.9629,
          latitude: 20.5937,
          zoom: 4,
          pitch: 0,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={`https://api.maptiler.com/maps/dataviz-dark/style.json?key=${MAPTILER_KEY}`}
        attributionControl={false}
        maxZoom={10}
        minZoom={4}
        onMove={handleMove}
        onLoad={handleMove}
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
            const clusterSize = markerSize * 1.2
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
                      .getLeaves(props.cluster_id, 4)
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
                    {cityNames.length <= 3 ? cityNames.join(", ") : `${cityNames.slice(0, 2).join(", ")} +${cityNames.length - 2}`}
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
