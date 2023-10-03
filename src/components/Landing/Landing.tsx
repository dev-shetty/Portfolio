import Socials from "@/components/UIComponents/SideBar/Socials"
// import { Icon } from "@iconify/react"
import styles from "./Landing.module.css"

function Landing() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <p>DEVEESH</p>
        <p>SHETTY</p>
      </header>
      <div>
        <div className={styles.scroll_arrow}>
          {/* <Icon icon="ic:baseline-keyboard-double-arrow-down" /> */}
        </div>
      </div>
      <Socials />
    </section>
  )
}

export default Landing
