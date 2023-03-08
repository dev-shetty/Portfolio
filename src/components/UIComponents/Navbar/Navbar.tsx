import { Icon } from "@iconify/react"
import { useState } from "react"
import styles from "./Navbar.module.css"

function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className={styles.navbar}>
      <div className="bars" onClick={() => setNavbar(!navbar)}>
        <Icon icon="heroicons:bars-3" color="var(--clr-primary-100)" />
      </div>
    </nav>
  )
}

export default Navbar
