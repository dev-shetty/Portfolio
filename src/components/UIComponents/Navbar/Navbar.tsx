import { Icon } from "@iconify/react"
import { useState } from "react"
import styles from "./Navbar.module.css"

function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className={styles.navbar}>
      <div className={styles.bars} onClick={() => setNavbar(!navbar)}>
        <Icon icon="heroicons:bars-3" />
      </div>
    </nav>
  )
}

export default Navbar
