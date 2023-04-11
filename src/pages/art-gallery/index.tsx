import { useEffect } from "react"
import Head from "next/head"
import Navbar from "@/components/UIComponents/Navbar/Navbar"
import Blob from "@/components/UIComponents/Blob/Blob"
import styles from "../../styles/ArtGallery.module.css"
import ArtGallery from "@/components/ArtGallery/ArtGallery"

export async function getStaticProps() {
  return {
    props: {},
  }
}

function ArtGalleryPage() {
  return (
    <>
      <Head>
        <title>Deveesh Shetty - Art Gallery</title>
        <meta
          name="description"
          content="Arts - Paintings / Sketches made by Deveesh Shetty"
        />
      </Head>
      <>
        <Blob />
        <Navbar />
        <main className={styles.main}>
          <ArtGallery />
        </main>
      </>
    </>
  )
}

export default ArtGalleryPage
