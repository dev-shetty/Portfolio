import { arts } from "@/lib/artgallery"
import Image from "next/image"
import styles from "./ArtGallery.module.css"
function ArtGallery() {
  return (
    <section className={styles.container}>
      <div>
        <h1>Art Gallery</h1>
        <h2>
          I may be a developer, but I also have a creative side as an artist.
        </h2>
      </div>
      <div className={styles.art_container}>
        {arts.map((art) => (
          <div key={art.id} data-content={art.alt}>
            <Image
              src={art.img}
              priority={art.priority || false}
              alt={art.alt}
              width={1000}
              height={1000}
              title={art.alt}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ArtGallery
