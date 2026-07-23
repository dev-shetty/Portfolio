export const TRAVEL_IMAGE_BASE_URL = "https://cdn.shetty.me/travels"

export type TravelPhoto = {
  url: string
  caption: string
  isCover?: boolean
}

export type TravelEntry = {
  city: string
  country: string
  coordinates: [lng: number, lat: number]
  coverPhoto: string
  visitDate: string
  description: string
  photos: TravelPhoto[]
  landmark3d?: {
    modelUrl: string
    name: string
    scale: number
    rotation: [x: number, y: number, z: number]
  }
  tags: string[]
}

export const travels: TravelEntry[] = [
  {
    city: "Delhi",
    country: "India",
    coordinates: [77.2410, 28.6139],
    coverPhoto: "delhi/red-fort.webp",
    visitDate: "July 2026",
    description: "Explored the historic Red Fort, Humayun's Tomb, the Chandni Chowk Gurudwara, and the city skyline at night.",
    photos: [
      { url: "delhi/red-fort.webp", caption: "Red Fort" },
      { url: "delhi/humayaun-tomb.webp", caption: "Humayun's Tomb" },
      { url: "delhi/chandni-chown-gurudwara.webp", caption: "Chandni Chowk Gurudwara" },
      { url: "delhi/night-skyline.webp", caption: "Delhi Night Skyline" },
      { url: "delhi/india-gate-tricolor-night.webp", caption: "India Gate Tricolor at Night" },
    ],
    tags: ["architecture", "history"],
  },
  {
    city: "Mumbai",
    country: "India",
    coordinates: [72.8777, 19.0760],
    coverPhoto: "mumbai/gateway-of-india-taj-hotel.webp",
    visitDate: "June 2026",
    description: "The city that never sleeps — explored CSMT, Gateway of India, Elephanta Caves, Marine Drive, and much more.",
    photos: [
      { url: "mumbai/csmt.webp", caption: "CSMT Building" },
      { url: "mumbai/csmt-building.webp", caption: "CSMT Building Front" },
      { url: "mumbai/csmt-facade-low-angle.webp", caption: "CSMT Facade" },
      { url: "mumbai/csmt-dome-ceiling.webp", caption: "CSMT Dome Ceiling" },
      { url: "mumbai/csmt-gothic-stained-glass.webp", caption: "CSMT Gothic Stained Glass" },
      { url: "mumbai/csmt-grand-staircase.webp", caption: "CSMT Grand Staircase" },
      { url: "mumbai/csmt-statue-panoramic.webp", caption: "CSMT Statue Panoramic" },
      { url: "mumbai/bse-bull.webp", caption: "BSE Bull" },
      { url: "mumbai/skyline-from-sky.webp", caption: "Mumbai Skyline from the Sky" },
      { url: "mumbai/gateway-of-india-taj-hotel.webp", caption: "Gateway of India & Taj Hotel" },
      { url: "mumbai/shivaji-maharaj-statue.webp", caption: "Shivaji Maharaj Statue" },
      { url: "mumbai/bombay-high-court.webp", caption: "Bombay High Court" },
      { url: "mumbai/bombay-high-court-night.webp", caption: "Bombay High Court at Night" },
      { url: "mumbai/csmvs-museum-sculpture.webp", caption: "CSMVS Museum Sculpture" },
      { url: "mumbai/csmvs-museum-sculpture-2.webp", caption: "CSMVS Museum Sculpture" },
      { url: "mumbai/marine-drive-sunset-skyline.webp", caption: "Marine Drive Sunset Skyline" },
      { url: "mumbai/marine-drive-tetrapods.webp", caption: "Marine Drive Tetrapods" },
      { url: "mumbai/siddhivinayak-temple.webp", caption: "Siddhivinayak Temple" },
      { url: "mumbai/ferry-arabian-sea.webp", caption: "Ferry on Arabian Sea" },
      { url: "mumbai/elephanta-island-hillside.webp", caption: "Elephanta Island Hillside" },
      { url: "mumbai/elephanta-caves-trimurti.webp", caption: "Elephanta Caves Trimurti" },
      { url: "mumbai/elephanta-caves-window.webp", caption: "Elephanta Caves Window" },
      { url: "mumbai/elephanta-caves-doorway.webp", caption: "Elephanta Caves Doorway" },
      { url: "mumbai/atal-setu-bridge-view.webp", caption: "Atal Setu Bridge" },
      { url: "mumbai/old-lighthouse-skyline.webp", caption: "Old Lighthouse Skyline" },
      { url: "mumbai/nhava-sheva-port-cranes.webp", caption: "Nhava Sheva Port Cranes" },
      { url: "mumbai/bmc-building-statue.webp", caption: "BMC Building Statue" },
      { url: "mumbai/metro-tunnel-walkway.webp", caption: "Metro Tunnel Walkway" },
      { url: "mumbai/linus-at-open-source-summit-india.webp", caption: "Linus at Open Source Summit India" },
    ],
    tags: ["architecture", "city"],
  },
  {
    city: "Rishikesh",
    country: "India",
    coordinates: [78.2676, 30.0869],
    coverPhoto: "rishikesh/lakshman-jhula.webp",
    visitDate: "July 2026",
    description: "The yoga capital of the world — walked across Lakshman Jhula and Ram Jhula, visited Beatles Ashram, Parmarth Niketan, temples along the Ganga, and witnessed the mesmerizing Ganga Aarti.",
    photos: [
      { url: "rishikesh/triveni-ghat.webp", caption: "Triveni Ghat" },
      { url: "rishikesh/ram-jhula.webp", caption: "Ram Jhula" },
      { url: "rishikesh/trymbakeshwar-temple.webp", caption: "Trymbakeshwar Temple" },
      { url: "rishikesh/beatles-ashram-beatles-mural.webp", caption: "Beatles Ashram Mural" },
      { url: "rishikesh/beatles-ashram-meditating-shiva-mural.webp", caption: "Meditating Shiva Mural" },
      { url: "rishikesh/parmarth-niketan.webp", caption: "Parmarth Niketan", isCover: true },
      { url: "rishikesh/parmarth-teerth-ganga-aarti.webp", caption: "Ganga Aarti at Parmarth" },
      { url: "rishikesh/lakshman-jhula.webp", caption: "Lakshman Jhula" },
      { url: "rishikesh/triveni-ghat-ganga-aarti.webp", caption: "Ganga Aarti at Triveni Ghat" },
      { url: "rishikesh/ganga-river-view.webp", caption: "Ganga River View" },
      { url: "rishikesh/ganga-view-neelkanth-bridge.webp", caption: "Ganga View from Neelkanth Bridge" },
      { url: "rishikesh/banks-of-ganga.webp", caption: "Banks of Ganga" },
      { url: "rishikesh/ramayana-mural.webp", caption: "Ramayana Mural" },
      { url: "rishikesh/bhootnath-temple-view.webp", caption: "View from Bhootnath Temple" },
      { url: "rishikesh/ganga-aarti-closeup.webp", caption: "Ganga Aarti Closeup" },
    ],
    tags: ["nature", "spiritual", "adventure"],
  },
  {
    city: "Vrindavan",
    country: "India",
    coordinates: [77.7012, 27.5751],
    coverPhoto: "vrindavan/prem-mandir.webp",
    visitDate: "July 2026",
    description: "Visited the stunning Prem Mandir, beautifully lit and intricately carved.",
    photos: [
      { url: "vrindavan/prem-mandir.webp", caption: "Prem Mandir" },
      { url: "vrindavan/yamuna-river-boats.webp", caption: "Yamuna River Boats" },
    ],
    tags: ["spiritual", "architecture"],
  },
  {
    city: "Mangalore",
    country: "India",
    coordinates: [74.8560, 12.9141],
    coverPhoto: "mangalore/beach-sunset-with-boats.webp",
    visitDate: "February 2026",
    description: "Sunsets on the beach, fishing boats at the harbour, and the serene coastal life of Mangalore.",
    photos: [
      { url: "mangalore/beach-sunset-with-boats.webp", caption: "Beach Sunset with Boats" },
      { url: "mangalore/beach-sunset.webp", caption: "Beach Sunset" },
      { url: "mangalore/crescent-moon-sunset-sky.webp", caption: "Crescent Moon Sunset Sky" },
      { url: "mangalore/egret-on-buoy-harbour.webp", caption: "Egret on Buoy at Harbour" },
      { url: "mangalore/fishing-boats-harbour.webp", caption: "Fishing Boats at Harbour" },
      { url: "mangalore/fishing-trawler-jetty.webp", caption: "Fishing Trawler at Jetty" },
      { url: "mangalore/polali-rajarajeshwari-temple.webp", caption: "Polali Rajarajeshwari Temple" },
      { url: "mangalore/mariyamma-temple-entrance.webp", caption: "Mariyamma Temple Entrance" },
      { url: "mangalore/dev-host-group-photo.webp", caption: "DevHost Group Photo" },
      { url: "mangalore/mangaladevi-temple-interior.webp", caption: "Mangaladevi Temple Interior" },
    ],
    tags: ["nature", "coastal", "spiritual", "tech"],
  },
  {
    city: "Puttur",
    country: "India",
    coordinates: [75.2006, 12.7594],
    coverPhoto: "puttur/illuminated-temple-chariot-night.webp",
    visitDate: "April 2026",
    description: "Temple festivals with illuminated chariots, processions, and the vibrant cultural traditions of Puttur.",
    photos: [
      { url: "puttur/illuminated-temple-chariot-night.webp", caption: "Illuminated Temple Chariot at Night" },
      { url: "puttur/temple-festival-procession-flags.webp", caption: "Temple Festival Procession" },
      { url: "puttur/deity-idol-flower-garland-procession.webp", caption: "Deity Idol Flower Garland Procession" },
    ],
    tags: ["spiritual", "culture"],
  },
  {
    city: "Vittal",
    country: "India",
    coordinates: [75.1132, 12.7630],
    coverPhoto: "vittal/misty-hills-western-ghats.webp",
    visitDate: "February 2026",
    description: "Misty hills of the Western Ghats and the natural beauty of Vittal.",
    photos: [
      { url: "vittal/misty-hills-western-ghats.webp", caption: "Misty Hills of Western Ghats" },
      { url: "vittal/red-hibiscus-closeup.webp", caption: "Red Hibiscus Closeup" },
    ],
    tags: ["nature"],
  },
  {
    city: "Munnar",
    country: "India",
    coordinates: [77.0595, 10.0889],
    coverPhoto: "munnar/tea-plantations-valley.webp",
    visitDate: "July 2023",
    description: "The tea plantations of Munnar — lush green valleys stretching endlessly.",
    photos: [
      { url: "munnar/tea-plantations-valley.webp", caption: "Tea Plantations Valley" },
      { url: "munnar/tea-leaves-closeup.webp", caption: "Tea Leaves Closeup" },
      { url: "munnar/mountain-range-panorama.webp", caption: "Mountain Range Panorama" },
      { url: "munnar/rolling-hills-viewpoint.webp", caption: "Rolling Hills Viewpoint" },
      { url: "munnar/mattupetty-reservoir.webp", caption: "Mattupetty Reservoir" },
    ],
    tags: ["nature"],
  },
  {
    city: "Kochi",
    country: "India",
    coordinates: [76.2673, 9.9312],
    coverPhoto: "kochi/port-night-view.webp",
    visitDate: "2026",
    description: "Kochi port lit up at night — cargo ships and cranes reflecting on the water.",
    photos: [
      { url: "kochi/port-night-view.webp", caption: "Kochi Port at Night" },
    ],
    tags: ["city"],
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    coordinates: [101.6869, 3.1390],
    coverPhoto: "kuala-lumpur/petronas-towers-night.webp",
    visitDate: "May 2025",
    description: "The iconic Petronas Towers and the Batu Caves — a mix of modern skyline and ancient temples.",
    photos: [
      { url: "kuala-lumpur/petronas-towers-night.webp", caption: "Petronas Towers at Night" },
      { url: "kuala-lumpur/batu-caves-murugan-statue.webp", caption: "Batu Caves Murugan Statue" },
    ],
    tags: ["architecture", "city"],
  },
  {
    city: "Penang",
    country: "Malaysia",
    coordinates: [100.3288, 5.4141],
    coverPhoto: "penang/city-skyline-observation-deck.webp",
    visitDate: "May 2025",
    description: "Street art, beaches, and panoramic views from the observation deck — Penang's charm.",
    photos: [
      { url: "penang/city-skyline-observation-deck.webp", caption: "City Skyline from Observation Deck" },
      { url: "penang/kids-on-bicycle-street-art.webp", caption: "Kids on Bicycle Street Art" },
      { url: "penang/beach-hills-view.webp", caption: "Beach Hills View" },
    ],
    tags: ["culture", "nature"],
  },
  {
    city: "Udupi",
    country: "India",
    coordinates: [74.7421, 13.3409],
    coverPhoto: "udupi/shambhavi-river-front.webp",
    visitDate: "January 2026",
    description: "The serene Shambavi river front with boats docked along the banks.",
    photos: [
      { url: "udupi/shambhavi-river-front.webp", caption: "Shambavi River Front" },
      { url: "udupi/standup-paddling-mantra-surf-club.webp", caption: "Standup Paddling at Mantra Surf Club" },
    ],
    tags: ["nature", "coastal", "adventure"],
  },
  {
    city: "Somewhere over the Coast",
    country: "India",
    coordinates: [73.5, 15.5],
    coverPhoto: "misc/evening-sky-air-view.webp",
    visitDate: "July 2026",
    description: "An aerial view of the evening sky over the Arabian Sea, captured while flying from Mumbai to Mangalore.",
    photos: [
      { url: "misc/evening-sky-air-view.webp", caption: "Evening sky over the Arabian Sea, at 35,000 ft" },
    ],
    tags: ["aerial", "nature"],
  },
  {
    city: "Agumbe",
    country: "India",
    coordinates: [75.0963, 13.5027],
    coverPhoto: "agumbe/misty-valley-panorama.webp",
    visitDate: "2025",
    description: "The Cherrapunji of the South — misty valleys and lush rainforests of the Western Ghats.",
    photos: [
      { url: "agumbe/misty-valley-panorama.webp", caption: "Misty Valley Panorama" },
      { url: "agumbe/rainforest-hills-viewpoint.webp", caption: "Rainforest Hills Viewpoint" },
    ],
    tags: ["nature"],
  },
  {
    city: "Bengaluru",
    country: "India",
    coordinates: [77.5946, 12.9716],
    coverPhoto: "bengaluru/india-foss-2025-group-photo.webp",
    visitDate: "2025",
    description: "Attended India FOSS 2025 in Bengaluru.",
    photos: [
      { url: "bengaluru/india-foss-2025-group-photo.webp", caption: "India FOSS 2025 Group Photo" },
    ],
    tags: ["tech"],
  },
  {
    city: "Hampi",
    country: "India",
    coordinates: [76.4601, 15.3350],
    coverPhoto: "hampi/virupaksha-temple-gopuram.webp",
    visitDate: "2025",
    description: "The ruins of Vijayanagara — the iconic Virupaksha Temple gopuram against the evening sky.",
    photos: [
      { url: "hampi/virupaksha-temple-gopuram.webp", caption: "Virupaksha Temple Gopuram" },
    ],
    tags: ["architecture", "history"],
  },
  {
    city: "Hyderabad",
    country: "India",
    coordinates: [78.4867, 17.3850],
    coverPhoto: "hyderabad/wikimedia-technology-summit.webp",
    visitDate: "2025",
    description: "Attended the Wikimedia Technology Summit in Hyderabad.",
    photos: [
      { url: "hyderabad/wikimedia-technology-summit.webp", caption: "Wikimedia Technology Summit" },
    ],
    tags: ["tech"],
  },
  {
    city: "Kasaragod",
    country: "India",
    coordinates: [75.0000, 12.4996],
    coverPhoto: "kasaragod/madhur-temple.webp",
    visitDate: "2025",
    description: "Visited the ancient Madhur Temple with its traditional Kerala architecture.",
    photos: [
      { url: "kasaragod/madhur-temple.webp", caption: "Madhur Temple" },
    ],
    tags: ["spiritual", "architecture"],
  },
  {
    city: "Mantralaya",
    country: "India",
    coordinates: [77.3776, 15.6789],
    coverPhoto: "mantralaya/raghavendra-swamy-math-front.webp",
    visitDate: "2025",
    description: "Pilgrimage to Sri Raghavendra Swamy Math on the banks of the Tungabhadra.",
    photos: [
      { url: "mantralaya/raghavendra-swamy-math-front.webp", caption: "Raghavendra Swamy Math" },
      { url: "mantralaya/raghavendra-swamy-mutt-entrance.webp", caption: "Raghavendra Swamy Mutt Entrance" },
    ],
    tags: ["spiritual"],
  },
  {
    city: "Mysore",
    country: "India",
    coordinates: [76.6394, 12.2958],
    coverPhoto: "mysore/mysore-palace-entrance-gate.webp",
    visitDate: "2025",
    description: "The grand entrance of the Amba Vilas Palace — Mysore's crown jewel.",
    photos: [
      { url: "mysore/mysore-palace-entrance-gate.webp", caption: "Mysore Palace Entrance Gate" },
    ],
    tags: ["architecture", "history"],
  },
]

export function getPhotoUrl(path: string): string {
  return `${TRAVEL_IMAGE_BASE_URL}/${path}`
}

export function getThumbUrl(path: string): string {
  return `${TRAVEL_IMAGE_BASE_URL}/thumbs/${path}`
}
