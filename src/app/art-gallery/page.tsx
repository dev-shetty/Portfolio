import Navbar from "@/components/UIComponents/Navbar/Navbar"
import Blob from "@/components/UIComponents/Blob/Blob"
import styles from "../../styles/ArtGallery.module.css"
import ArtGallery from "@/components/ArtGallery/ArtGallery"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deveesh Shetty - Art Gallery",
  description: "Arts - Paintings / Sketches made by Deveesh Shetty",
}

function ArtGalleryPage() {
  return (
    <>
      <Blob />
      <Navbar />
      <main className={styles.main}>
        <ArtGallery />
      </main>
    </>
  )
}

export default ArtGalleryPage
