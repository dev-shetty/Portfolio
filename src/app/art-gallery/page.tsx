import ArtGallery from "@/components/ArtGallery/art-gallery"

function ArtGalleryPage() {
  return (
    <div>
      <div className="container mx-auto text-center border-b mb-4 pb-2 border-b-slate-700">
        <h1 className="text-4xl md:text-5xl">Art Gallery</h1>
        <h2 className="text-lg md:text-xl font-light">
          I may be a developer, but I also have a creative side as an artist.
        </h2>
      </div>
      <ArtGallery />
    </div>
  )
}

export default ArtGalleryPage
