import { v4 as uuid } from "uuid"

export interface Art {
  id: string
  img: string
  alt: string
  description: string
  quote: string | null
}

export const arts: Art[] = [
  {
    id: uuid(),
    img: "/sketch/LalBaugChaRaja.jpg",
    alt: "A pencil portrait of Lal Baug Cha Raja Ganapathi in Maharashtra",
    description:
      "A detailed pencil portrait of the iconic Lal Baug Cha Raja, one of the most famous Ganpati idols in Mumbai, Maharashtra. This piece captures the divine grandeur and intricate ornamentation of the deity.",
    quote: null,
  },
  {
    id: uuid(),
    img: "/sketch/Joker.jpg",
    alt: "Pencil sketch of Joker from Joker Movie",
    description:
      "A pencil sketch capturing the haunting expression of Joaquin Phoenix from the Joker movie.",
    quote: "The worst part of having a mental illness is people expect you to behave as if you don't.",
  },
  {
    id: uuid(),
    img: "/sketch/AmitabhBachchan.jpg",
    alt: "Pencil Sketch of Amitabh Bachchan",
    description:
      "A detailed pencil portrait of the legendary Amitabh Bachchan - the Shahenshah of Bollywood. The sketch captures his iconic baritone-worthy intensity and timeless screen presence.",
    quote: "7 Crore!!!",
  },
  {
    id: uuid(),
    img: "/sketch/AbdulKalam.jpg",
    alt: "Pencil sketch of APJ Abdul Kalam",
    description:
      "A respectful pencil portrait of Dr. APJ Abdul Kalam — the Missile Man of India and a beloved President. The sketch captures his warm smile and visionary gaze.",
    quote: "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
  },
  {
    id: uuid(),
    img: "/sketch/TigerRoar.jpg",
    alt: "Pencil sketch of a tiger roaring",
    description:
      "A powerful pencil sketch of a roaring tiger, showcasing the raw ferocity and majestic beauty of the big cat through dynamic strokes and detailed fur texturing.",
    quote: "Roar! 🐾",
  },
  {
    id: uuid(),
    img: "/sketch/Yakshagana.jpg",
    alt: "Color Pencil Drawing Yakshagana an art form of Tulunadu",
    description:
      "A vibrant color pencil drawing depicting Yakshagana, a traditional theatre art form from Tulunadu. The elaborate costume, headgear, and facial makeup are rendered in rich, vivid colors.",
    quote: null,
  },
  {
    id: uuid(),
    img: "/sketch/Adiyogi.jpg",
    alt: "Marker Drawing Adi Yogi Shiva",
    description:
      "A bold marker drawing of Adiyogi Shiva — the first yogi. The sharp contrasts and flowing lines bring out the meditative intensity and cosmic energy of Shiva.",
    quote: "In the vast nothingness that is the source of existence, that is what we call Shiva.",
  },
  {
    id: uuid(),
    img: "/sketch/Rajkumar.jpg",
    alt: "Pencil Sketch of Rajkumar",
    description:
      "A pencil portrait of the legendary Kannada actor Dr. Rajkumar, capturing his iconic presence and the charisma that made him a cultural icon of Karnataka.",
    quote: null,
  },
  {
    id: uuid(),
    img: "/sketch/Shivaji.jpg",
    alt: "Charcoal Sketch of Chhatrapati Shivaji Maharaj",
    description:
      "A dramatic charcoal sketch of Chhatrapati Shivaji Maharaj, the warrior king. The bold charcoal medium perfectly conveys his strength, valor, and the weight of his legacy.",
    quote: "Freedom is a blessing, and it is the right of everyone to receive it",
  },
  {
    id: uuid(),
    img: "/sketch/Thanos.jpg",
    alt: "Graphite Sketch of Thanos",
    description:
      "A detailed graphite sketch of the Mad Titan Thanos from the Marvel universe. The rendering captures his imposing presence and the intricate texture of his armored chin.",
    quote: "Reality is often disappointing.",
  },
  {
    id: uuid(),
    img: "/sketch/Goku.jpg",
    alt: "Colored Drawing of Goku from Dragon Ball Z",
    description:
      "A colorful drawing of Goku from Dragon Ball Z in his iconic fighting stance. The vibrant colors and dynamic pose capture the energy and spirit of the beloved Saiyan warrior.",
    quote: "Power comes in response to a need, not a desire. You have to create that need",
  },
  {
    id: uuid(),
    img: "/sketch/Saibaba.jpg",
    alt: "Water color painting of Shirdi Sai Baba",
    description:
      "A serene watercolor painting of Shirdi Sai Baba, capturing his compassionate gaze and peaceful demeanor. The soft watercolor washes lend a spiritual, ethereal quality to the piece.",
    quote: null,
  },
  {
    id: uuid(),
    img: "/sketch/TigerAndCub.jpg",
    alt: "Pencil Sketch of Tiger holding his Cub",
    description:
      "A tender pencil sketch depicting a tiger gently holding its cub — a beautiful portrayal of strength meeting tenderness in the animal kingdom.",
    quote: "The smallest act of kindness is worth more than the grandest intention.",
  },
  {
    id: uuid(),
    img: "/sketch/SwamiVivekananda.jpg",
    alt: "Color Pencil Drawing of Swami Vivekananda",
    description:
      "A striking color pencil portrait of Swami Vivekananda, capturing the intensity of his gaze and the spiritual fire that inspired millions across the world.",
    quote: "Arise, awake, and stop not till the goal is reached.",
  },
  {
    id: uuid(),
    img: "/sketch/InfinityGuantlet.jpg",
    alt: "Pigma Micron Art of Infinity Gauntlet",
    description:
      "A precise Pigma Micron pen illustration of the Infinity Gauntlet from Marvel, showcasing the six Infinity Stones in intricate detail with fine linework.",
    quote: "Fine lines tell the finest stories.",
  },
  {
    id: uuid(),
    img: "/sketch/ChrisHemsworth.jpg",
    alt: "Pencil Sketch of Chris Hemsworth AKA Thor",
    description:
      "A realistic pencil portrait of Chris Hemsworth as Thor, the God of Thunder. The sketch captures his chiseled features and the intensity of his on-screen presence.",
    quote: "I'm still worthy.",
  },
  {
    id: uuid(),
    img: "/sketch/KapilDev.jpg",
    alt: "Pencil Sketch of Kapil Dev",
    description:
      "A pencil sketch honoring Kapil Dev - the legendary Indian cricketer who led India to its first Cricket World Cup victory in 1983.",
    quote: "When you have to work, work with a smile.",
  },
  {
    id: uuid(),
    img: "/sketch/Minions.jpg",
    alt: "Colored Drawing of Minions",
    description:
      "A fun and colorful drawing of the lovable Minions, bursting with their signature cheerfulness and mischief. A lighthearted piece that brings a smile.",
    quote: "Banana!",
  },
  {
    id: uuid(),
    img: "/sketch/SardarPatel.jpg",
    alt: "Pencil Sketch of Sardar Patel AKA Ironman of India",
    description:
      "A dignified pencil portrait of Sardar Vallabhbhai Patel, the Iron Man of India, whose determination united a nation. The sketch reflects his resolute character.",
    quote: "Manpower without unity is not a strength unless it is harmonized and united properly.",
  },
  {
    id: uuid(),
    img: "/sketch/Lion.jpg",
    alt: "Small Graphite sketch of Lion",
    description:
      "A compact yet expressive graphite sketch of a lion, capturing the regal bearing and quiet power of the king of the jungle in minimal strokes.",
    quote: "A lion does not concern himself with the opinion of sheep.",
  },
  {
    id: uuid(),
    img: "/sketch/NarendraModi.jpg",
    alt: "Pencil Sketch of Indian Prime Minister Narendra Modi",
    description:
      "A detailed pencil portrait of Prime Minister Narendra Modi, capturing his characteristic expression and presence that commands attention.",
    quote: "Sabka Saath, Sabka Vikas",
  },
  {
    id: uuid(),
    img: "/sketch/Spiderman.jpg",
    alt: "Acrylic Painting of Spiderman",
    description:
      "A bold acrylic painting of Spider-Man in action, with vivid reds and blues popping against the canvas. The dynamic composition captures the web-slinger mid-swing.",
    quote: "With great power comes great responsibility.",
  },
  {
    id: uuid(),
    img: "/sketch/MarvelWeapons.jpg",
    alt: "Micron art of Marvel",
    description:
      "An intricate Micron pen illustration featuring iconic weapons from the Marvel universe, drawn with meticulous precision and fine detail work.",
    quote: "Heroes are made by the paths they choose, not the powers they are graced with.",
  },
]
