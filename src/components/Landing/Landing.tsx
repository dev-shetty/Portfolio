import Socials from "@/components/UIComponents/SideBar/Socials"
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
      <Socials />
    </div>
  )
}

export default Landing
