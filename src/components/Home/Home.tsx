import { useEffect, useRef } from "react"
import Image from "next/image"
import ProfileImg from "../../assets/images/Deveesh.jpg"
import styles from "./Home.module.css"
function Home() {
  const homeRef = useRef<HTMLDivElement>(null)
  function onMouseEnter() {
    document.documentElement.style.setProperty("--blob-clr-1", "hotpink")
    document.documentElement.style.setProperty("--blob-clr-2", "turquoise")
  }
  useEffect(() => {
    const homeNode = homeRef.current
    homeNode?.addEventListener("mouseenter", onMouseEnter)

    return () => {
      homeNode?.removeEventListener("mouseenter", onMouseEnter)
    }
  }, [])
  return (
    <section className={styles.container} ref={homeRef}>
      <div className={styles.content}>
        <div className={styles.details}>
          <h1>Deveesh Shetty</h1>
          <div>
            <p>
              React Developer, to be Full Stack Developer. Constantly exploring
              new concepts and ideas in the world of Web Development, building
              projects daily to enhance my skills and get better bit by bit.
              Looking forward to contribute to open source and build a
              community.
            </p>
            <q>
              2nd year CSE Student, Developer by passion and an Artist by hobby.
            </q>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <div>
          <Image src={ProfileImg} alt="Deveesh Profile" />
        </div>
      </div>
    </section>
  )
}

export default Home
