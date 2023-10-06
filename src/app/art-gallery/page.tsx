import ArtGallery from "@/components/art-gallery/art-gallery"
import { H1 } from "@/components/ui/headers"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Art Gallery",
  description:
    "I may be a developer, but I also have a creative side as an artist. Checkout my artworks here.",
}

function ArtGalleryPage() {
  return (
    <div>
      <div className="container mx-auto text-center border-b mb-4 pb-2 border-b-slate-700">
        <H1 className="border-b-0">Art Gallery</H1>
        <h2 className="text-lg md:text-xl font-light">
          I may be a developer, but I also have a creative side as an artist.
        </h2>
      </div>
      <ArtGallery />
    </div>
  )
}

export default ArtGalleryPage
