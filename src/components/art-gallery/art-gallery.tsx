import { arts } from "@/lib/artgallery"
import Image from "next/image"
import styles from "./art-gallery.module.css"
function ArtGallery() {
  return (
    <section className="px-4">
      <div className={styles.art_container}>
        {arts.map((art) => (
          <div
            key={art.id}
            data-content={art.alt}
            className="relative overflow-hidden cursor-pointer"
          >
            <Image
              src={art.img}
              alt={art.alt}
              width={1000}
              height={1000}
              title={art.alt}
              className="w-full h-full object-cover object-top transition-all duration-500 scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ArtGallery
