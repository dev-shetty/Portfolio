import { Icon } from "@iconify/react"
import { useState } from "react"
import Link from "next/link"
import styles from "./Navbar.module.css"

function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <>
      <nav className={styles.nav_toggle}>
        <div className={styles.bars} onClick={() => setNavbar(!navbar)}>
          <Icon icon="heroicons:bars-3" />
        </div>
      </nav>
      {navbar && (
        <nav className={styles.navbar}>
          <div className={styles.bars} onClick={() => setNavbar(!navbar)}>
            <Icon icon="material-symbols:close" />
          </div>
          <div>
            <ul className={styles.nav_list}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/art-gallery">Art Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  )
}

export default Navbar
