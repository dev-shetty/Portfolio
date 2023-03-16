import { useEffect } from "react"
import Head from "next/head"
import Navbar from "@/components/UIComponents/Navbar/Navbar"
import Blob from "@/components/UIComponents/Blob/Blob"
import styles from "../../styles/ArtGallery.module.css"
import ArtGallery from "@/components/ArtGallery/ArtGallery"

function ArtGalleryPage() {
  useEffect(() => {
    document.documentElement.style.setProperty("--blob-clr-1", "hotpink")
    document.documentElement.style.setProperty("--blob-clr-2", "turquoise")
  }, [])
  return (
    <>
      <Head>
        <title>Deveesh Shetty - Art Gallery</title>
        <meta
          name="description"
          content="Arts - Paintings / Sketches made by Deveesh Shetty"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <Blob />
        <div className={styles.nav}>
          <Navbar />
        </div>
        <main className={styles.main}>
          <ArtGallery />
        </main>
      </>
    </>
  )
}

export default ArtGalleryPage
