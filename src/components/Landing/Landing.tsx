import Socials from "@/components/UIComponents/SideBar/Socials"
import { Icon } from "@iconify/react"
import styles from "./Landing.module.css"

function Landing() {
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default Landing
