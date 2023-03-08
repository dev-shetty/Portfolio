import { useEffect, useRef } from "react"
import styles from "./Home.module.css"
function Home() {
  const homeRef = useRef<HTMLDivElement>(null)
  function onMouseEnter() {
    document.documentElement.style.setProperty("--blob-clr-1", "hotpink")
    document.documentElement.style.setProperty("--blob-clr-2", "turquoise")
  }
  useEffect(() => {
    homeRef.current?.addEventListener("mouseenter", onMouseEnter)

    return () => {
      homeRef.current?.removeEventListener("mouseenter", onMouseEnter)
    }
  }, [])
  return (
    <section className={styles.container} ref={homeRef}>
      <div>
        <h1></h1>
      </div>
    </section>
  )
}

export default Home
