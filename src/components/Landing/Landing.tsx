import Socials from "@/components/UIComponents/SideBar/Socials"
import styles from "./Landing.module.css"
import { FaAngleDoubleDown } from "react-icons/fa"

function Landing() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <p>DEVEESH</p>
        <p>SHETTY</p>
      </header>
      <div>
        <div className={styles.scroll_arrow}>
          <FaAngleDoubleDown />
        </div>
      </div>
      <Socials />
    </section>
  )
}

export default Landing
