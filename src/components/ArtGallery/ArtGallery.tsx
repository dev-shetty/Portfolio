import { arts } from "@/lib/artgallery"
import Image from "next/image"
import { useEffect, useRef } from "react"
import styles from "./ArtGallery.module.css"
function ArtGallery() {
  return (
    <section className={styles.container}>
      <h1>Art Gallery</h1>
      <div className={styles.art_container}>
        {/* <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" />
        <img src="https://source.unsplash.com/random?nature" alt="" /> */}

        {arts.map((art) => (
          <Image
            src={art.img}
            alt={art.alt}
            key={art.id}
            width={1000}
            height={1000}
          />
        ))}
      </div>
    </section>
  )
}

export default ArtGallery
