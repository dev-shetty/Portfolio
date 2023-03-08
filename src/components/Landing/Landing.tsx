import Socials from "@/components/UIComponents/SideBar/Socials"
import { Icon } from "@iconify/react"
import { useEffect, useRef } from "react"
import styles from "./Landing.module.css"

function Landing() {
  const landingRef = useRef<HTMLDivElement>(null)
  function onMouseEnter() {
    document.documentElement.style.setProperty("--blob-clr-1", "red")
    document.documentElement.style.setProperty("--blob-clr-2", "blue")
  }
  useEffect(() => {
    landingRef.current?.addEventListener("mouseenter", onMouseEnter)

    return () => {
      landingRef.current?.removeEventListener("mouseenter", onMouseEnter)
    }
  }, [])
  return (
    <section className={styles.container} ref={landingRef}>
      {/* <div className={styles.left_half}></div> */}
      {/* <div className={styles.right_half}></div> */}
      <header className={styles.header}>
        <p>DEVEESH</p>
        <p>SHETTY</p>
      </header>
      <div>
        <div className={styles.scroll_arrow}>
          <Icon icon="ic:baseline-keyboard-double-arrow-down" />
        </div>
      </div>
      <Socials />
    </section>
  )
}

export default Landing
